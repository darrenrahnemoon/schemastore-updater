/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Behavior = "block" | "allow" | "noAuth";

export interface JsonSchemaForEntryPointRegulationManifestFiles {
  /**
   * A fully qualified URL of your website.
   */
  site?: string;
  /**
   * Set the max age HTTP cache expiration.
   */
  maxAge?: number;
  reportUrl?: string;
  defaultNavBehavior?: Behavior;
  defaultResBehavior?: Behavior;
  rules: Rule[];
  [k: string]: any;
}
export interface Rule {
  /**
   * Relative path to resource.
   */
  path?: string;
  /**
   * A regular expression for identifying paths to resources.
   */
  regex?: string;
  types?: ("navigation" | "image" | "stylesheet" | "script" | "xhr" | "other")[];
  /**
   * Determines if data is allowed at this path.
   */
  allowData?: boolean;
  [k: string]: any;
}
