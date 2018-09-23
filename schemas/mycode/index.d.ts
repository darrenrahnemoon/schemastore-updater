/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Classification = "MyCode" | "LibraryCode" | "UnrelatedCode";
export type Includes = string[];

export interface JsonSchemaForMycodeJsFiles {
  /**
   * Script that is executed by passing a string to the host-provided eval function.
   */
  Eval?: Classification;
  /**
   * Script that is executed by passing a string to the 'Function' constructor.
   */
  Function?: Classification;
  /**
   * Script that is executed by passing a string to the 'setTimeout', 'setImmediate', or 'setInterval' functions.
   */
  ScriptBlock?: Classification;
  /**
   * An array of urls or files that are classified as 'MyCode'.
   */
  MyCode?: Includes;
  /**
   * An array of urls or files that are classified as 'LibraryCode'.
   */
  Libraries?: Includes;
  /**
   * An array of urls or files that are classified as 'UnrelatedCode'.
   */
  Unrelated?: Includes;
  [k: string]: any;
}