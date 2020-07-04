/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Enables plugins for JSDoc
 */
export type ConfiguringPlugins = unknown[];
/**
 * Controls recursion depth for source files and tutorials
 */
export type SpecifyingRecursionDepth = number;
/**
 * An array of paths to input files
 */
export type InputFilesPaths = unknown[];
/**
 * An array of paths to exclude from input
 */
export type InputFilesExclusionPaths = unknown[];
/**
 * Forces input filenames to match regular expression
 */
export type InclusionRegExp = string;
/**
 * Forces input filenames to match regular expression
 */
export type ExclusionRegExp = string;
/**
 * Determines how input files are parsed
 */
export type SpecifyingSourceType = "module" | "script";
/**
 * Only display symbols with the given `access` property
 */
export type SymbolAccess = "all" | "private" | "protected" | "public" | "undefined";
/**
 * Log information that can help debug issues in JSDoc itself
 */
export type LogDebugInfo = boolean;
/**
 * The path to the output folder for the generated documentation
 */
export type OutputFolder = string;
/**
 * Assume this encoding when reading all source files
 */
export type InputFilesEncoding = string;
/**
 * The `package.json` file that contains the project name, version, and other details
 */
export type Package = string;
/**
 * Treat errors as fatal errors, and treat warnings as errors
 */
export type Pedantic = boolean;
/**
 * The README.md file to include in the generated documentation
 */
export type READMEMd = string;
/**
 * Recurses to subdirectories when searching input files
 */
export type RecurseToSubdirectories = boolean;
/**
 * The path to the template to use for generating output
 */
export type OutputTemplate = string;
/**
 * Run JSDoc's test suite, and print the results to the console
 */
export type RunTests = boolean;
/**
 * Directory in which JSDoc should search for tutorials
 */
export type TutorialsPath = string;
/**
 * Determines how to handle unrecognized tags
 */
export type UnknownTags2 = UnknownTags | UnknownTags1;
export type JSDocTag = string;
/**
 * Determines how to handle unrecognized tags
 */
export type UnknownTags = JSDocTag[];
/**
 * Determines how to handle unrecognized tags
 */
export type UnknownTags1 = JSDocTag[];
export type Dictionary = "jsdoc" | "closure";
/**
 * Controls which tags JSDoc recognizes and how they are interpreted
 */
export type JSDocDictionaries = Dictionary[];
/**
 * Controls @link tag text rendering
 */
export type LinkURL = boolean;
/**
 * Controls if current date is displayed in the footer of documentation
 */
export type ShowingTheCurrentDate = boolean;
/**
 * Path to layout file to use for documentation template
 */
export type OverridingLayoutFile = string;
/**
 * Disables pretty-printed source files
 */
export type GeneratingPrettyPrintedSourceFiles = boolean;
/**
 * Controls if shortened or longhand version of a symbol will be shown in documentation
 */
export type ShowingLongnames = boolean;
/**
 * Controls @link tag text rendering
 */
export type LinkText = boolean;

export interface JSONSchemaForJSDocConfigurationFiles {
  plugins?: ConfiguringPlugins;
  recurseDepth?: SpecifyingRecursionDepth;
  source?: SpecifyingInputFiles;
  sourceType?: SpecifyingSourceType;
  opts?: IncorporatingCLIOptions;
  tags?: ConfiguringTagsAndTagDictionaries;
  templates?: ConfiguringTemplates;
  [k: string]: unknown;
}
/**
 * Determines the set of input files
 */
export interface SpecifyingInputFiles {
  include?: InputFilesPaths;
  exclude?: InputFilesExclusionPaths;
  includePattern?: InclusionRegExp;
  excludePattern?: ExclusionRegExp;
}
/**
 * Determines flags that `jsdoc` command will be invoked with
 */
export interface IncorporatingCLIOptions {
  access?: SymbolAccess;
  debug?: LogDebugInfo;
  destination?: OutputFolder;
  encoding?: InputFilesEncoding;
  package?: Package;
  pedantic?: Pedantic;
  readme?: READMEMd;
  recurse?: RecurseToSubdirectories;
  template?: OutputTemplate;
  test?: RunTests;
  tutorials?: TutorialsPath;
}
/**
 * Controls allowed JSDoc tags and their interpretation
 */
export interface ConfiguringTagsAndTagDictionaries {
  allowUnknownTags?: UnknownTags2;
  dictionaries?: JSDocDictionaries;
}
/**
 * Affects the appearance and content of generated documentation
 */
export interface ConfiguringTemplates {
  cleverLinks?: LinkURL;
  default?: {
    includeDate?: ShowingTheCurrentDate;
    layoutFile?: OverridingLayoutFile;
    outputSourceFiles?: GeneratingPrettyPrintedSourceFiles;
    staticFiles?: CopyingStaticFiles;
    useLongnameInNav?: ShowingLongnames;
    [k: string]: unknown;
  };
  monospaceLinks?: LinkText;
  [k: string]: unknown;
}
export interface CopyingStaticFiles {
  /**
   * An array of paths that should not be copied to the output directory
   */
  exclude?: string[];
  /**
   * A regular expression indicating which files to skip
   */
  excludePattern?: string;
  /**
   * An array of paths whose contents should be copied to the output directory
   */
  include?: string[];
  /**
   * A regular expression indicating which files to copy
   */
  includePattern?: string;
}
