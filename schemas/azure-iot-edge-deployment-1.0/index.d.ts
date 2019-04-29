/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ModuleType = "docker";
export type CreateOptions = string;
export type Status = "running" | "stopped";
export type RestartPolicy = "never" | "on-failure" | "on-unhealthy" | "always";

export interface JSONSchemaForAzureIoTEdgeDeploymentVersion10 {
  modulesContent: TheConfigurationForAllTheModules;
  [k: string]: any;
}
export interface TheConfigurationForAllTheModules {
  $edgeAgent: ConfigurationForTheEdgeAgentModule;
  $edgeHub: ConfigurationForTheEdgeHubModule;
  /**
   * This interface was referenced by `TheConfigurationForAllTheModules`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
   */
  [k: string]: {
    "properties.desired": {
      [k: string]: any;
    };
    [k: string]: any;
  };
}
export interface ConfigurationForTheEdgeAgentModule {
  "properties.desired": {
    schemaVersion: string;
    runtime: {
      type: ModuleType;
      settings: {
        minDockerVersion?: string;
        loggingOptions?: string;
        registryCredentials?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^.+$".
           */
          [k: string]: {
            username: string;
            password: string;
            address: string;
            [k: string]: any;
          };
        };
        [k: string]: any;
      };
      [k: string]: any;
    };
    systemModules: {
      edgeAgent: {
        type: ModuleType;
        settings: ModuleSettings;
        env?: Env;
        [k: string]: any;
      };
      edgeHub: TheEdgehubSchema;
    };
    modules: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
       */
      [k: string]: {
        version?: string;
        type: ModuleType;
        status: Status;
        restartPolicy: RestartPolicy;
        env?: Env;
        settings: ModuleSettings;
        [k: string]: any;
      };
    };
    [k: string]: any;
  };
  [k: string]: any;
}
export interface ModuleSettings {
  image: string;
  createOptions?: CreateOptions;
  [k: string]: any;
}
export interface Env {
  /**
   * This interface was referenced by `Env`'s JSON-Schema definition
   * via the `patternProperty` "^[^\+#$\s\.]+$".
   */
  [k: string]: {
    value: number | string | boolean;
    [k: string]: any;
  };
}
export interface TheEdgehubSchema {
  type: ModuleType;
  settings: ModuleSettings;
  env?: Env;
  status: Status;
  restartPolicy: RestartPolicy;
  [k: string]: any;
}
export interface ConfigurationForTheEdgeHubModule {
  "properties.desired": {
    schemaVersion: string;
    routes: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string;
    };
    storeAndForwardConfiguration?: {
      timeToLiveSecs: number;
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}
