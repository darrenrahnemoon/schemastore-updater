/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type JSONSchemaForNPMPackageJsonFiles = CoreProperties &
  JspmDefinition &
  (
    | {
        bundleDependencies?: BundledDependency;
        [k: string]: any;
      }
    | {
        bundledDependencies?: BundledDependency;
        [k: string]: any;
      });
/**
 * A person who has been involved in creating or maintaining this package
 */
export type Person =
  | {
      [k: string]: any;
    }
  | string;
/**
 * Run AFTER the package is published
 */
export type ScriptsPublishAfter = string;
/**
 * Run AFTER the package is installed
 */
export type ScriptsInstallAfter = string;
/**
 * Run BEFORE the package is uninstalled
 */
export type ScriptsUninstallBefore = string;
/**
 * Run BEFORE bump the package version
 */
export type ScriptsVersionBefore = string;
/**
 * Run by the 'npm test' command
 */
export type ScriptsTest = string;
/**
 * Run by the 'npm stop' command
 */
export type ScriptsStop = string;
/**
 * Run by the 'npm start' command
 */
export type ScriptsStart = string;
/**
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts if no restart script is provided.
 */
export type ScriptsRestart = string;
/**
 * Array of package names that will be bundled when publishing the package.
 */
export type BundledDependency = string[];

export interface CoreProperties {
  /**
   * The name of the package.
   */
  name?: string;
  /**
   * Version must be parseable by node-semver, which is bundled with npm as a dependency.
   */
  version?: string;
  /**
   * This helps people discover your package, as it's listed in 'npm search'.
   */
  description?: string;
  /**
   * This helps people discover your package as it's listed in 'npm search'.
   */
  keywords?: string[];
  /**
   * The url to the project homepage.
   */
  homepage?:
    | {
        [k: string]: any;
      }
    | ".";
  /**
   * The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.
   */
  bugs?:
    | {
        [k: string]: any;
      }
    | string;
  /**
   * You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.
   */
  license?: string;
  /**
   * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or { "license": "(MIT OR Apache-2.0)" } see: 'https://docs.npmjs.com/files/package.json#license'
   */
  licenses?: {
    type?: string;
    url?: string;
    [k: string]: any;
  }[];
  author?: Person;
  /**
   * A list of people who contributed to this package.
   */
  contributors?: Person[];
  /**
   * A list of people who maintains this package.
   */
  maintainers?: Person[];
  /**
   * The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.
   */
  files?: string[];
  /**
   * The main field is a module ID that is the primary entry point to your program.
   */
  main?: string;
  bin?:
    | string
    | {
        [k: string]: any;
      };
  /**
   * Set the types property to point to your bundled declaration file
   */
  types?: string;
  /**
   * Note that the "typings" field is synonymous with "types", and could be used as well.
   */
  typings?: string;
  /**
   * Specify either a single file or an array of filenames to put in place for the man program to find.
   */
  man?: string[];
  directories?: {
    /**
     * If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.
     */
    bin?: string;
    /**
     * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
     */
    doc?: string;
    /**
     * Put example scripts in here. Someday, it might be exposed in some clever way.
     */
    example?: string;
    /**
     * Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.
     */
    lib?: string;
    /**
     * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
     */
    man?: string;
    test?: string;
    [k: string]: any;
  };
  /**
   * Specify the place where your code lives. This is helpful for people who want to contribute.
   */
  repository?:
    | {
        [k: string]: any;
      }
    | string;
  /**
   * The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.
   */
  scripts?: {
    /**
     * Run BEFORE the package is published (Also run on local npm install without any arguments)
     */
    prepublish?: string;
    /**
     * Run both BEFORE the package is packed and published, and on local npm install without any arguments. This is run AFTER prepublish, but BEFORE prepublishOnly
     */
    prepare?: string;
    /**
     * Run BEFORE the package is prepared and packed, ONLY on npm publish
     */
    prepublishOnly?: string;
    /**
     * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git dependencies)
     */
    prepack?: string;
    /**
     * Run AFTER the tarball has been generated and moved to its final destination.
     */
    postpack?: string;
    publish?: ScriptsPublishAfter;
    postpublish?: ScriptsPublishAfter;
    /**
     * Run BEFORE the package is installed
     */
    preinstall?: string;
    install?: ScriptsInstallAfter;
    postinstall?: ScriptsInstallAfter;
    preuninstall?: ScriptsUninstallBefore;
    uninstall?: ScriptsUninstallBefore;
    /**
     * Run AFTER the package is uninstalled
     */
    postuninstall?: string;
    preversion?: ScriptsVersionBefore;
    version?: ScriptsVersionBefore;
    /**
     * Run AFTER bump the package version
     */
    postversion?: string;
    pretest?: ScriptsTest;
    test?: ScriptsTest;
    posttest?: ScriptsTest;
    prestop?: ScriptsStop;
    stop?: ScriptsStop;
    poststop?: ScriptsStop;
    prestart?: ScriptsStart;
    start?: ScriptsStart;
    poststart?: ScriptsStart;
    prerestart?: ScriptsRestart;
    restart?: ScriptsRestart;
    postrestart?: ScriptsRestart;
    [k: string]: string;
  };
  /**
   * A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.
   */
  config?: {
    [k: string]: any;
  };
  dependencies?: Dependency;
  devDependencies?: Dependency;
  optionalDependencies?: Dependency;
  peerDependencies?: Dependency;
  resolutions?: Dependency;
  engines?: {
    [k: string]: string;
  };
  engineStrict?: boolean;
  /**
   * You can specify which operating systems your module will run on
   */
  os?: string[];
  /**
   * If your code only runs on certain cpu architectures, you can specify which ones.
   */
  cpu?: string[];
  /**
   * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is purely there for informational purposes. It is now recommended that you install any binaries as local devDependencies wherever possible.
   */
  preferGlobal?: boolean;
  /**
   * If set to true, then npm will refuse to publish it.
   */
  private?: boolean;
  publishConfig?: {
    [k: string]: any;
  };
  dist?: {
    shasum?: string;
    tarball?: string;
    [k: string]: any;
  };
  readme?: string;
  /**
   * An ECMAScript module ID that is the primary entry point to your program.
   */
  module?: string;
  /**
   * A module ID with untranspiled code that is the primary entry point to your program.
   */
  esnext?:
    | string
    | {
        [k: string]: any;
      };
  /**
   * Any property starting with _ is valid.
   *
   * This interface was referenced by `CoreProperties`'s JSON-Schema definition
   * via the `patternProperty` "^_".
   */
  [k: string]: {
    [k: string]: any;
  };
}
/**
 * Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.
 */
export interface Dependency {
  [k: string]: string;
}
export interface JspmDefinition {
  jspm?: CoreProperties;
  [k: string]: any;
}
