/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A recipe for Sourcehut CI service
 */
export interface SourcehutBuildManifest {
  /**
   * Which OS image to build in
   */
  image: string;
  /**
   * A list of packages to install on the image
   */
  packages?: string[];
  /**
   * A list of extra repositories to enable with the image's package manager
   */
  repositories?: {
    [k: string]: any;
  };
  /**
   * A list of repositories to clone into the home directory of the build user in the build environment
   */
  sources?: string[];
  /**
   * A list of scripts to execute in the build environment
   */
  tasks?: {
    [k: string]: any;
  };
  /**
   * A list of triggers to execute post-build, which can be used to send emails or do other post-build tasks
   */
  triggers?: {
    action: "email" | "webhook";
    condition: "always" | "failure" | "success";
    [k: string]: any;
  }[];
  /**
   * A list of key/value pairs for options to set in the build environment via ~/.buildenv
   */
  environment?: {
    [k: string]: any;
  };
  /**
   * List of secret UUIDs to be added to the guest during the build
   */
  secrets?: string[];
  [k: string]: any;
}