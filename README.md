# schemastore-updater [![Build Status](https://action-badges.now.sh/ffflorian/schemastore-updater)](https://github.com/ffflorian/schemastore-updater/actions/) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/schemastore-updater)](https://dependabot.com)

Load schema files from [@SchemaStore/schemastore](https://github.com/SchemaStore/schemastore) and publish them as TypeScript definitions [on npm](https://www.npmjs.com/search?q=@schemastore/).

## Usage

```
Usage: schemastore-updater [options] [command]

Options:
  -V, --version           output the version number
  -s, --settings <file>   Specify a settings file (default: "settings.json")
  -d, --source-dir <dir>  Specify a source dir (will disable cloning)
  -h, --help              output usage information

Commands:
  update [options]
  check-disabled
  check-versions
```

```
Usage: update [options]

Options:
  -f, --force  Force re-generating all schemas
  -h, --help   output usage information
```
