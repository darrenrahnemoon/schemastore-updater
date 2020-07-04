/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The Container Structure Tests provide a powerful framework to validate the structure of a container image. These tests can be used to check the output of commands in an image, as well as verify metadata and contents of the filesystem
 */
export interface ContainerStructureTests {
  /**
   * The schema version of Structure Tests.
   */
  schemaVersion: string;
  /**
   * A list of command tests
   */
  commandTests?: {
    /**
     * The name of the test
     */
    name: string;
    /**
     * A list of commands (each with optional flags) to run before the actual command under test.
     */
    setup?: string[][];
    /**
     * A list of commands (each with optional flags) to run after the actual command under test.
     */
    teardown?: string[][];
    envVars?: EnvVar[];
    /**
     * The command to run in the test.
     */
    command: string;
    /**
     * The arguments to pass to the command.
     */
    args?: string[];
    /**
     * List of regexes that should match the stdout from running the command.
     */
    expectedOutput?: string[];
    /**
     * List of regexes that should not match the stdout from running the command..
     */
    excludedOutput?: string[];
    /**
     * List of regexes that should match the stderr from running the command.
     */
    expectedError?: string[];
    /**
     * List of regexes that should not match the stderr from running the command.
     */
    excludedError?: string[];
    /**
     * Exit code that the command should exit with.
     */
    exitCode?: number;
    [k: string]: unknown;
  }[];
  /**
   * File existence tests check to make sure a specific file (or directory) exist within the file system of the image. No contents of the files or directories are checked. These tests can also be used to ensure a file or directory is not present in the file system.
   */
  fileExistenceTests?: {
    /**
     * The name of the test
     */
    name?: string;
    /**
     * Path to the file or directory under test
     */
    path?: string;
    /**
     * Whether or not the specified file or directory should exist in the file system
     */
    shouldExist?: boolean;
    /**
     * The expected Unix permission string (e.g. drwxrwxrwx) of the files or directory.
     */
    permissions?: string;
    /**
     * The expected Unix user ID of the owner of the file or directory.
     */
    uid?: number;
    /**
     * The expected Unix group ID of the owner of the file or directory.
     */
    gid?: number;
    /**
     * Checks if file is executable by a given user.
     */
    isExecutableBy?: "owner" | "group" | "any" | "other";
    [k: string]: unknown;
  }[];
  /**
   * File content tests open a file on the file system and check its contents. These tests assume the specified file is a file, and that it exists
   */
  fileContentTests?: {
    /**
     * The name of the test
     */
    name: string;
    /**
     * Path to the file under test
     */
    path: string;
    /**
     * List of regexes that should match the contents of the file
     */
    expectedContents?: string[];
    /**
     * List of regexes that should not match the contents of the file
     */
    excludedContents?: string[];
    [k: string]: unknown;
  }[];
  /**
   * License tests check a list of copyright files and makes sure all licenses are allowed at Google. By default it will look at where Debian lists all copyright files, but can also look at an arbitrary list of files.
   */
  licenseTests?: {
    /**
     * if the image is based on Debian, check where Debian lists all licenses.
     */
    debian: boolean;
    /**
     * A list of other files to check.
     */
    files?: string[];
    [k: string]: unknown;
  }[];
  metadataTest?: {
    /**
     * A list of environment variable key/value pairs that should be set in the container.
     */
    env?: {
      /**
       * The name of the environment variables
       */
      key: string;
      /**
       * The value of the environment variable
       */
      value: string;
    }[];
    /**
     * A list of image labels key/value pairs that should be set on the container.
     */
    labels?: {
      /**
       * The name of the label
       */
      key: string;
      /**
       * The value of the label
       */
      value: string;
    }[];
    /**
     * The entrypoint of the container
     */
    entrypoint?: string[];
    /**
     * The CMD specified in the container
     */
    cmd?: string[];
    [k: string]: unknown;
  };
  /**
   * A list of environment variables can optionally be specified as part of the test setup.
   */
  globalEnvVars?: {
    /**
     * The name of the environment variables
     */
    key: string;
    /**
     * The value of the environment variable
     */
    value: string;
  }[];
}
export interface EnvVar {
  /**
   * The name of the environment variables
   */
  key: string;
  /**
   * The value of the environment variable
   */
  value: string;
}
