/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JsonSchemaForPrismaPrismaYmlFiles {
  /**
   * Name of the Service
   */
  service?: string[];
  /**
   * Type definitions for database models, relations, enums and other types
   */
  datamodel: (string | any[])[];
  /**
   * Secret for securing the API Endpoint
   */
  secret?: string[];
  /**
   * Disable authentication for the endpoint
   */
  disableAuth?: boolean[];
  /**
   * Path to schema.graphql for usage in the Gateway
   */
  schema?: string[];
  /**
   * Stage to deploy to. Read more here https://goo.gl/J5k76y
   */
  stage?: string[];
  /**
   * Cluster used for deployment. Read more here https://goo.gl/J5k76y
   */
  cluster?: string[];
  /**
   * Database seed
   */
  seed?: {
    import?: string;
    run?: string;
    [k: string]: any;
  };
  /**
   * All server-side subscriptions
   */
  subscriptions?: {
    [k: string]: Subscription;
  };
  /**
   * Custom field to use in variable interpolations with ${self:custom.field}
   */
  custom?: {
    [k: string]: any;
  };
  /**
   * Command hooks. Current available hooks are: post-deploy.
   */
  hooks?: {
    [k: string]: any;
  };
  /**
   * Endpoint the service will be reachable at. This also determines the cluster the service will deployed to.
   */
  endpoint?: string[];
}
/**
 * A piece of code that you should run.
 */
export interface Subscription {
  query: string;
  webhook:
    | string
    | {
        url: string;
        headers?: {
          [k: string]: any;
        };
        [k: string]: any;
      };
  [k: string]: any;
}