/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Schema for bundleconfig.json files
 */
export interface Compilerdefaults {
  compilers?: {
    less?: Less;
    sass?: Sass;
    stylus?: Stylus;
    coffeescript?: CoffeeScript;
    [k: string]: any;
  };
  minifiers?: {
    css?: BaseMinify & CssMinify;
    javascript?: BaseMinify & JavascriptMinify;
    [k: string]: any;
  };
  [k: string]: any;
}
/**
 * Specify options for the compiler.
 */
export interface Less {
  /**
   * LESS only. Support for AutoPrefixer by adding a browser string. An empty string means this feature is disabled. Example: 'last 2 versions, > 5%'. See more at https://github.com/ai/browserslist.
   */
  autoPrefix?: string;
  /**
   * LESS only. CSScomb helps you sort and categorize CSS properties in your code to improve maintenance of your stylesheets. You can specify a relative path to a local .json file as well.
   */
  cssComb?: ("csscomb" | "zen" | "yandex" | "none") | string;
  /**
   * LESS only. Currently only used for the data-uri function to ensure that images aren't created that are too large for the browser to handle.
   */
  ieCompat?: boolean;
  /**
   * Generates a base64 encoded source map at the bottom of the output.
   */
  sourceMap?: boolean;
  /**
   * LESS only. Without this option on Less will try and process all maths in your CSS.
   */
  strictMath?: boolean;
  /**
   * LESS only. Without this option, less attempts to guess at the output unit when it does maths.
   */
  strictUnits?: boolean;
  /**
   * LESS only. This option allows you to re-write URL's in imported files so that the URL is always relative to the base imported file.
   */
  relativeUrls?: boolean;
  /**
   * LESS only. Allows you to add a path to every generated import and URL in your CSS. This does not affect less import statements that are processed, just ones that are left in the output css.
   */
  rootPath?: string;
  /**
   * LESS only. Base path, will be emitted in source-map as is.
   */
  sourceMapRoot?: string;
  /**
   * Scss only. This is the opposite of the rootpath option, it specifies a path which should be removed from the output paths.
   */
  sourceMapBasePath?: string;
  [k: string]: any;
}
/**
 * Specify options for the compiler.
 */
export interface Sass {
  /**
   * Scss only. Path to look for imported files
   */
  includePath?: string;
  /**
   * Scss only. Indent type for output CSS.
   */
  indentType?: "space" | "tab";
  /**
   * Scss only. Number of spaces or tabs.
   */
  indentWidth?: number;
  /**
   * Scss only. Linefeed style (cr | crlf | lf | lfcr).
   */
  lineFeed?: "cr" | "crlf" | "lf" | "lfcr";
  /**
   * Scss only. Determines the output format of the final CSS style.
   */
  outputStyle?: "nested" | "expanded" | "compact" | "compressed";
  /**
   * Scss only. Used to determine how many digits after the decimal will be allowed. For instance, if you had a decimal number of 1.23456789 and a precision of 5, the result will be 1.23457 in the final CSS.
   */
  precision?: number;
  /**
   * Scss only. This option allows you to re-write URL's to make them relative to the output file. This doesn't work for imported .scss files.
   */
  relativeUrls?: boolean;
  /**
   * Generates a base64 encoded source map at the bottom of the output.
   */
  sourceMap?: boolean;
  /**
   * Scss only. Base path, will be emitted in source-map as is.
   */
  sourceMapRoot?: string;
  [k: string]: any;
}
/**
 * Specify options for the compiler.
 */
export interface Stylus {
  /**
   * Generates a base64 encoded source map at the bottom of the output.
   */
  sourceMap?: boolean;
  [k: string]: any;
}
/**
 * Specify options for the compiler.
 */
export interface CoffeeScript {
  /**
   * CoffeeScript only. Compile the JavaScript without the top-level function safety wrapper.
   */
  bare?: boolean;
  /**
   * CoffeeScript only. Specify how the Iced runtime is included in the output JavaScript file.
   */
  runtimeMode?: "node" | "inline" | "none" | "window";
  /**
   * Generates a source map file.
   */
  sourceMap?: boolean;
  [k: string]: any;
}
export interface BaseMinify {
  enabled?: boolean;
  /**
   * Produce a .gz file after minification.
   */
  gzip?: boolean;
  /**
   * For the multi-line output feature, how many spaces to use when indenting a block (see outputMode).
   */
  indentSize?: number;
  /**
   * SingleLine minifies everything to a single line. MultipleLines breaks the minified code into multiple lines for easier reading.
   */
  outputMode?: "multipleLines" | "singleLine" | "none";
  [k: string]: any;
}
export interface CssMinify {
  /**
   * CSS only. If no color names are to be used, set this value to 'hex'. If a set of colors recognized by all major browser is okay to use (W3C-strict validation is not required), set this value to 'major'.
   */
  colorNames?: "hex" | "major" | "noSwap" | "strict";
  /**
   * CSS only. How to treat comments in the code. The default is 'none', which will strip all comments except 'important' comments. 'all' will leave all comments, and 'hacks' will only leave certain known comment-based hacks.
   */
  commentMode?: "none" | "all" | "hacks" | "important";
  /**
   * Forces all rules to be terminated with semicolons if set to true.
   */
  termSemicolons?: boolean;
  [k: string]: any;
}
export interface JavascriptMinify {
  /**
   * JavaScript only.
   */
  evalTreatment?: "ignore" | "makeAllSafe" | "makeImmediateSafe";
  /**
   * JavaScript only.
   */
  preserveImportantComments?: boolean;
  /**
   * JavaScript only. Controls if local variables should be shortened.
   */
  renameLocals?: boolean;
  /**
   * Forces all rules to be terminated with semicolons if set to true.
   */
  termSemicolons?: boolean;
  [k: string]: any;
}
