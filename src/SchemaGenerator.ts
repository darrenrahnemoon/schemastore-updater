import * as crypto from 'crypto';
import * as fs from 'fs-extra';
import * as logdown from 'logdown';
import * as path from 'path';
import * as schemaGenerator from 'json-schema-to-typescript';
import * as semver from 'semver';
import * as simpleGit from 'simple-git/promise';
import { BuildResult, SchemaData, SchemaHashes } from './interfaces';

class SchemaGenerator {
  private git: simpleGit.SimpleGit;
  private jsonSchemasDir: string;
  private logger: logdown.Logger;
  private schemaStoreDirResolved: string;

  constructor(
    private disabledSchemas: string[],
    private schemaStoreRepo: string,
    private lockFile = 'schemas/json-schemas.lock',
    private force = false
  ) {
    this.git = simpleGit('.');
    this.schemaStoreDirResolved = path.join('temp', 'schemastore');
    this.jsonSchemasDir = path.join(
      this.schemaStoreDirResolved,
      'src',
      'schemas',
      'json'
    );
    this.lockFile = path.resolve(this.lockFile);
    this.logger = logdown('schemastore-updater/index', {
      logger: console,
      markdown: false
    });

    try {
      fs.accessSync(this.lockFile, fs.constants.R_OK | fs.constants.F_OK);
    } catch (error) {
      throw new Error(`Lockfile "${this.lockFile}" not found.`);
    }

    this.logger.info(`Using lockfile "${this.lockFile}".`);

    if (this.force) {
      this.logger.info(`Force is set. Will re-generate all schemas.`);
    }
  }

  private async fileIsReadable(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK);
      return true;
    } catch (error) {
      return false;
    }
  }

  private async generateLockFile(
    fileName: string,
    data: SchemaHashes
  ): Promise<void> {
    await fs.writeFile(path.resolve(fileName), JSON.stringify(data, null, 2), {
      encoding: 'utf8'
    });
  }

  private async generateSchemas(jsonData: SchemaHashes): Promise<BuildResult> {
    const disabledSchemas: string[] = [];
    const generatedSchemas: string[] = [];

    for (const fileName in jsonData) {
      const schemaName = fileName.replace('.json', '');
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      this.logger.info(`Processing "${schemaName}" ...`);
      let newSchema = '';

      try {
        newSchema = await schemaGenerator.compileFromFile(fileNameResolved);
      } catch (error) {
        this.logger.error(
          `Can't process "${schemaName}". Adding to the list of disabled schemas.`
        );
        disabledSchemas.push(fileName);
        continue;
      }
      const schemaDirResolved = path.resolve('schemas', schemaName);
      await fs.ensureDir(schemaDirResolved);
      await fs.writeFile(
        path.resolve(schemaDirResolved, 'index.d.ts'),
        newSchema,
        { encoding: 'utf8' }
      );
      const packageJson = this.generatePackageJson(
        schemaName,
        jsonData[fileName]
      );
      await fs.writeFile(
        path.resolve(schemaDirResolved, 'package.json'),
        packageJson,
        { encoding: 'utf8' }
      );
      const readMe = this.generateReadme(
        schemaName,
        jsonData[fileName].version
      );
      await fs.writeFile(path.resolve(schemaDirResolved, 'README.md'), readMe, {
        encoding: 'utf8'
      });
      const license = this.generateLicense();
      await fs.writeFile(path.resolve(schemaDirResolved, 'LICENSE'), license, {
        encoding: 'utf8'
      });
      generatedSchemas.push(schemaName);
    }

    return {
      disabledSchemas,
      generatedSchemas
    };
  }

  private generateLicense(): string {
    return `MIT License

Copyright (c) Florian Keller. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
`;
  }

  private generatePackageJson(
    schemaName: string,
    schemaData: SchemaData
  ): string {
    return `{
  "author": "Florian Keller <github@floriankeller.de>",
  "dependencies": {},
  "description": "TypeScript definitions for ${schemaName}.",
  "license": "MIT",
  "main": "",
  "name": "@schemastore/${schemaName}",
  "repository": "https://github.com/ffflorian/schemastore-updater/tree/master/schemas/${schemaName}",
  "scripts": {},
  "typesPublisherContentHash": "${schemaData.hash}",
  "types": "index.d.ts",
  "version": "${schemaData.version}",
  "typeScriptVersion": "2.2"
}
`;
  }

  private generateReadme(schemaName: string, schemaVersion: string) {
    const timeStamp = new Date().toLocaleDateString('en-US', {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'short',
      second: '2-digit',
      timeZone: 'GMT',
      weekday: 'short',
      year: 'numeric'
    });
    return `# Installation
> \`npm install --save @schemastore/${schemaName}\`

# Summary
This package contains type definitions for ${schemaName}.

## Details
Files were exported from https://github.com/ffflorian/schemastore-updater/tree/master/schemas/${schemaName}.

## Additional Details
* Last updated: ${timeStamp} GMT
* Dependencies: none
`;
  }

  private async removeAndClone(): Promise<void> {
    await fs.remove(this.schemaStoreDirResolved);
    this.logger.info(
      `Cloning "${this.schemaStoreRepo}" to "${
        this.schemaStoreDirResolved
      }" ...`
    );
    await this.git.clone(this.schemaStoreRepo, this.schemaStoreDirResolved, [
      '--depth=1'
    ]);
  }

  public async start(): Promise<BuildResult> {
    const lockFileData: SchemaHashes = await fs.readJSON(this.lockFile);

    await this.removeAndClone();
    const allFiles = await fs.readdir(this.jsonSchemasDir);

    const jsonFiles = allFiles.filter(fileName => {
      const schemaIsDisabled = this.disabledSchemas.includes(fileName);
      return fileName.endsWith('.json') && !schemaIsDisabled;
    });

    this.logger.info(
      `Loaded ${jsonFiles.length} enabled schemas and ${
        this.disabledSchemas.length
      } disabled schemas.`
    );

    const fileHashes: { [fileName: string]: string } = {};

    for (const fileName of jsonFiles) {
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      const fileIsReadable = await this.fileIsReadable(fileNameResolved);

      if (fileIsReadable) {
        const fileContent = await fs.readFile(fileNameResolved, {
          encoding: 'utf8'
        });
        const sha256 = crypto
          .createHash('sha256')
          .update(fileContent)
          .digest('hex');

        fileHashes[fileName] = sha256;
      } else {
        this.logger.error(`File "${fileNameResolved}" is not readable.`);
      }
    }

    const updatedHashes: SchemaHashes = {};

    for (const fileName in fileHashes) {
      if (!lockFileData[fileName]) {
        this.logger.info(
          `Hash from "${fileName}" does not exist yet. Creating.`
        );
        lockFileData[fileName] = {
          hash: fileHashes[fileName],
          version: '0.0.1'
        };
        updatedHashes[fileName] = lockFileData[fileName];
      } else if (
        lockFileData[fileName] &&
        (fileHashes[fileName] !== lockFileData[fileName].hash || this.force)
      ) {
        this.logger.info(`Hash from "${fileName}" is outdated. Updating.`);

        const newVersion = semver.inc(lockFileData[fileName].version, 'patch');

        lockFileData[fileName] = {
          hash: fileHashes[fileName],
          version: String(newVersion)
        };
        updatedHashes[fileName] = lockFileData[fileName];
      }
    }

    const { disabledSchemas, generatedSchemas } = await this.generateSchemas(
      updatedHashes
    );

    await this.generateLockFile(this.lockFile, lockFileData);

    return {
      disabledSchemas,
      generatedSchemas
    };
  }
}

export { SchemaGenerator };