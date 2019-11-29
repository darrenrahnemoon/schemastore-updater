/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * domain names (optionally including subdomains) added to the account, or a string for a suffixed URL using .now.sh or a Custom Deployment Suffix
 */
export type Alias = string;

/**
 * ZEIT Now project configuration file
 */
export interface Now {
  /**
   * name for the deployment
   */
  name?: string;
  /**
   * the Now Platform version that the deployment should use and is known to work with
   */
  version?: 1 | 2;
  alias?:
    | []
    | [Alias]
    | [Alias, Alias]
    | [Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias, Alias]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | [
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias,
        Alias
      ]
    | Alias;
  /**
   * an ID or slug for teams, or an email address, username, or ID for users
   */
  scope?: string;
  /**
   * environment variables passed to the invoked Serverless Functions
   */
  env?: {
    [k: string]: string;
  };
  build?: {
    /**
     * environment variables passed to the Build processes
     */
    env?: {
      [k: string]: string;
    };
    [k: string]: any;
  };
  /**
   * a list of build descriptions whose src references valid source files
   */
  builds?: {
    /**
     * A glob expression or pathname. If more than one file is resolved, one build will be created per matched file. It can include `*` and `**`.
     */
    src: string;
    /**
     * A npm module to be installed by the build process. It can include a semver compatible version (e.g.: `@org/proj@1`).
     */
    use: string;
    /**
     * An object including arbitrary metadata to be passed to the Builder.
     */
    config?: {
      [k: string]: any;
    };
    [k: string]: any;
  }[];
  /**
   * a list of route definitions
   */
  routes?: {
    /**
     * A PCRE-compatible regular expression that matches each incoming pathname (excluding querystring).
     */
    src: string;
    /**
     * A set of HTTP method types. If no method is provided, requests with any HTTP method will be a candidate for the route.
     */
    methods?: ("GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH")[];
    /**
     * A destination pathname or full URL, including querystring, with the ability to embed capture groups as $1, $2…
     */
    dest?: string;
    /**
     * A set of headers to apply for responses.
     */
    headers?: {
      [k: string]: string;
    };
    /**
     * A status code to respond with. Can be used in tandem with `Location:` header to implement redirects.
     */
    status?: number;
    /**
     * A boolean to change matching behavior. If true, routing will continue even when the src is matched.
     */
    continue?: boolean;
    [k: string]: any;
  }[];
  /**
   * the deployment regions of the Serverless Functions that get created as a result of the build steps
   */
  regions?: string[];
  /**
   * When set to true, both the source view and logs view will be publicly accessible (when the user is authenticated with ZEIT).
   */
  public?: boolean;
  /**
   * Git integration options
   */
  github?: {
    /**
     * When set to false, Now for GitHub will not deploy the given project regardless of the GitHub app being installed.
     */
    enabled?: boolean;
    /**
     * When set to false, Now for GitHub will not apply the alias upon merge.
     */
    autoAlias?: boolean;
    /**
     * When set to true, Now for GitHub will stop commenting on pull requests and commits.
     */
    silent?: boolean;
    /**
     * When set to false, Now for GitHub will always build pushes in sequence without cancelling a build for the most recent commit.
     */
    autoJobCancelation?: boolean;
    [k: string]: any;
  };
  [k: string]: any;
}