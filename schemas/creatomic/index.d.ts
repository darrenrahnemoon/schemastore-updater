/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JSONSchemaForCreatomicConfigurationFile {
  /**
   * Control whether tslint is enabled for TypeScript files or not.
   */
  "tslint.enable"?: boolean;
  /**
   * Control whether tslint is enabled for JavaScript files or not.
   */
  "tslint.jsEnable"?: boolean;
  /**
   * An additional rules directory
   */
  "tslint.rulesDirectory"?: string[];
  /**
   * Validate a file when there is only a default tslint configuration is found
   */
  "tslint.validateWithDefaultConfig"?: boolean;
  /**
   * The path to the rules configuration file
   */
  "tslint.configFile"?: string;
  /**
   * Control if TypeScript definition files should be ignored
   */
  "tslint.ignoreDefinitionFiles"?: boolean;
  /**
   * Configure glob patterns of file paths to exclude from linting
   */
  "tslint.exclude"?: string[];
  /**
   * Run the linter on save (onSave) or on type (onType)
   */
  "tslint.run"?: "onSave" | "onType";
  /**
   * A path added to NODE_PATH when resolving the tslint module.
   */
  "tslint.nodePath"?: string;
  /**
   * Turns auto fix on save on or off, or defines which rules (e.g. `no-var-keyword`) to auto fix on save.
   */
  "tslint.autoFixOnSave"?: string[];
  /**
   * Always show rule failures as warnings, independent of the tslint configuration.
   */
  "tslint.alwaysShowRuleFailuresAsWarnings"?: boolean;
  [k: string]: unknown;
}
