/* tslint:disable *//** * This file was automatically generated by json-schema-to-typescript. * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file, * and run json-schema-to-typescript to regenerate this file. *//** * A command line script or scripts.Available variables:%project:Directory% - The project directory%project:Name% - The project name%project:Version% - The project version */export type Script = string[];export interface JSONSchemaForASPNETProjectJsonFiles {  authors?: string[];  /**   * List of files to exclude from publish output (kpm bundle).   */  bundleExclude?: string[];  /**   * Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ "Folder1\*.cs", "Folder2\*.cs" ]   */  code?: string[];  commands?: {    [k: string]: string;  };  compilationOptions?: CompilationOptions;  /**   * Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely 'Debug' and 'Release'.   */  configurations?: {    [k: string]: {      compilationOptions?: CompilationOptions;      [k: string]: any;    };  };  dependencies?: Dependencies;  /**   * Copyright details for the package   */  copyright?: string;  /**   * A URL for the image to use as the icon for the package. This should be a 32x32-pixel .png file that has a transparent background.   */  iconUrl?: string;  /**   * A link to the license that the package is under   */  licenseUrl?: string;  /**   * A Boolean value that specifies whether the client needs to ensure that the package license (described by licenseUrl) is accepted before the package is installed.   */  requireLicenseAcceptance?: boolean;  owners?: string[];  /**   * A URL for the home page of the package   */  projectUrl?: string;  /**   * A short description of the package   */  summary?: string;  tags?: string[];  /**   * The human-friendly title of the package   */  title?: string;  /**   * A description of the changes made in each release of the package.   */  releaseNotes?: string;  /**   * The locale ID for the package, such as en-us.   */  language?: string;  /**   * The description of the application   */  description?: string;  /**   * Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).   */  exclude?: string[];  frameworks?: {    [k: string]: ConfigType;  };  /**   * Overrides the generated resource names with custom ones.   */  namedResource?: {    [k: string]: string;  };  /**   * Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).   */  preprocess?: string;  /**   * Contains information about the repository where the project is stored.   */  repository?: {    type?: "git";    [k: string]: string;  };  /**   * Glob pattern to indicate all the files that need to be compiled as resources.   */  resources?: string[];  /**   * Scripts to execute during the various stages.   */  scripts?: {    prepack?: Script;    postpack?: Script;    prebundle?: Script;    postbundle?: Script;    prerestore?: Script;    postrestore?: Script;    prepare?: Script;    [k: string]: any;  };  /**   * Glob pattern to specify the code files to share with dependent projects. Example: [ "Folder1\*.cs", "Folder2\*.cs" ]   */  shared?: string[];  /**   * The version of the project/package. Examples: 1.2.3, 1.2.3-beta, 1.2.3-*   */  version?: string;  /**   * Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.   */  webroot?: string;  [k: string]: any;}export interface CompilationOptions {  define?: string[];  warningsAsErrors?: boolean;  allowUnsafe?: boolean;  optimize?: boolean;  languageVersion?: "csharp1" | "csharp2" | "csharp3" | "csharp4" | "csharp5" | "csharp6" | "experimental";  keyFile?: string;  delaySign?: boolean;  strongName?: boolean;  [k: string]: any;}export interface Dependencies {  [k: string]:    | string    | {        [k: string]: any;      };}export interface ConfigType {  dependencies?: Dependencies;  compilationOptions?: CompilationOptions;  frameworkAssemblies?: Dependencies;  [k: string]: any;}