/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The name of a haxelib project
 */
export type ProjectName = string;
/**
 * Project's version
 */
export type Semver = string;
/**
 * The name of a user
 */
export type UserName = string;
/**
 * A keyword or term associated with a haxelib project
 */
export type HaxelibTag = string;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[A-Za-z0-9_.-]{3,}$".
 */
export type DependencyVersion = Semver;

/**
 * A haxelib project
 */
export interface Haxelib {
  name: ProjectName;
  /**
   * Project's website
   */
  url?: string;
  /**
   * Short description of the project
   */
  description?: string;
  /**
   * Open source license under which the project is licensed
   */
  license: "GPL" | "LGPL" | "BSD" | "Public" | "MIT" | "Apache";
  version: Semver;
  /**
   * Folder in the package which contains the source files for this project
   */
  classPath?: string;
  /**
   * List of project contributors that are allowed to upload to haxelib
   */
  contributors: [UserName, ...(UserName)[]];
  /**
   * List of tags for easier finding the project on haxelib
   */
  tags?: HaxelibTag[];
  /**
   * Project's dependencies
   */
  dependencies?: {
    [k: string]: DependencyVersion;
  };
  /**
   * Short description of changes made in this version
   */
  releasenote: string;
}
