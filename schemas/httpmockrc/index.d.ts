/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A tool for mock local requests or proxy remote requests.
 */
export interface HttpMockerConfiguration {
  /**
   * Root of mock files
   */
  mockFileName: string;
  /**
   * Custom request header
   */
  requestHeaders?: {
    [k: string]: unknown;
  };
  /**
   * Custom response header
   */
  responseHeaders?: {
    [k: string]: unknown;
  };
  /**
   * Rules for proxy and mock
   */
  routes: {
    /**
     * Rule of Matching route
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: {
      /**
       * Where Mock result file located
       */
      path: string;
      /**
       * Whether to ignore this rule, generally used for remote interfaces instead of mock in the local
       */
      ignore?: boolean;
      /**
       * How many milliseconds are delayed to return a request, general used for control the request sequence
       */
      delay?: number;
      /**
       * Validate params in body by key and typeof value
       */
      validate?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
  };
  [k: string]: unknown;
}
