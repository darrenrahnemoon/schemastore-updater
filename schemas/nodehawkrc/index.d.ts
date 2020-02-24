/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NodehawkConfigurationSchema {
  /**
   * A string or an array of paths to watch. Supports globbing.
   */
  paths?: string | string[];
  /**
   * The root path from which all other paths will be resolved.
   */
  root?: string;
  /**
   * Paths, globs or regular expressions to ignore.
   */
  ignored?: string;
  /**
   * The command to execute on file change.
   */
  exec: string;
  /**
   * The port on which the server should run. This is passed to your application as `process.env.PORT` which should be used by you.
   */
  port?: number;
  /**
   * The level of logging. 0 - fatal, 1 - error, 2 - warning, 3 - info, 4 - debug
   */
  logLevel?: number;
  /**
   * The buffer duration to wait before triggering a restart.
   */
  buffer?: number;
  /**
   * The buffer polling interval to check for the file stability.
   */
  bufferPoll?: number;
  /**
   * The various messages to display during different events.
   */
  display?: {
    /**
     * The message to display before the watcher starts.
     */
    onBeforeStart?: string;
    /**
     * The message to display after the watcher starts.
     */
    onStart?: string;
    /**
     * The message to display before the watcher restarts.
     */
    onBeforeRestart?: string;
    /**
     * The message to display after the watcher restarts.
     */
    onRestart?: string;
    /**
     * The message to display before the watcher stops.
     */
    onBeforeStop?: string;
    [k: string]: any;
  };
  /**
   * Clear the screen on start and on every restart.
   */
  clearScreen?: boolean;
  /**
   * A set of key-value pairs which will be promptly passed on to your process and accessible via `process.env`.
   */
  env?: {
    [k: string]: any;
  };
  [k: string]: any;
}
