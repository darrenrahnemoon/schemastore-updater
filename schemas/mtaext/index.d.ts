/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * MTA extension descriptor schema v3.3
 */
export interface MtaextV33 {
  /**
   * Used to indicate to an MTA processing tool (e.g. a deployer), which schema version was taken as the base when authoring a descriptor.
   */
  "_schema-version": string;
  /**
   * A globally unique ID of this MTA extension descriptor. Unlimited string of unicode characters.
   */
  ID: string;
  /**
   * A globally unique ID of the MTA or the MTA extension which shall be extended by this descriptor.
   */
  extends: string;
  /**
   * A non-translatable description of this MTA extension. This is not a text for application users.
   */
  description?: string;
  /**
   * The provider or vendor.
   */
  provider?: string;
  /**
   * Global parameters that will be added to the application.
   */
  parameters?: {
    [k: string]: any;
  };
  /**
   * A list of the existing hooks that will be modified by the extension.
   */
  hooks?: {
    /**
     * The name of the existing hook that will be modified by this extension.
     */
    name: string;
    /**
     * Configuration parameters that are used when executing the hook to the target runtime environment.
     */
    parameters?: {
      [k: string]: any;
    };
    /**
     * List of the existing required dependencies that will be modified by this extension.
     */
    requires?: {
      /**
       * The name of the existing required dependencies that will be modified.
       */
      name: string;
      /**
       * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the hook at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
       */
      parameters?: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    [k: string]: any;
  }[];
  /**
   * List of the existing modules that will be modified by the extension.
   */
  modules?: {
    /**
     * The module name which must match an existing module defined by the deployment descriptor.
     */
    name: string;
    /**
     * A collection of key-value pairs that are available to the module at runtime.
     */
    properties?: {
      [k: string]: any;
    };
    /**
     * Configuration parameters that are used when deploying the module to the target runtime environment.
     */
    parameters?: {
      [k: string]: any;
    };
    /**
     * A list of the existing hooks that will be modified by the extension.
     */
    hooks?: {
      /**
       * The name of the existing hook that will be modified by this extension.
       */
      name: string;
      /**
       * Configuration parameters that are used when executing the hook to the target runtime environment.
       */
      parameters?: {
        [k: string]: any;
      };
      /**
       * List of the existing required dependencies that will be modified by this extension.
       */
      requires?: {
        /**
         * The name of the existing required dependencies that will be modified.
         */
        name: string;
        /**
         * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the hook at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
         */
        parameters?: {
          [k: string]: any;
        };
        [k: string]: any;
      }[];
      [k: string]: any;
    }[];
    /**
     * List of the existing required dependencies that will be modified by the extension.
     */
    requires?: {
      /**
       * The dependency name which must match an existing required dependency defined by the deployment descriptor.
       */
      name: string;
      /**
       * Required properties can be mapped from provided properties. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
       */
      properties?: {
        [k: string]: any;
      };
      /**
       * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the module at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
       */
      parameters?: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    /**
     * List of the existing provided dependencies that will be modified by the extension.
     */
    provides?: {
      /**
       * The dependency name which must match an existing provided dependency defined by the deployment descriptor.
       */
      name: string;
      /**
       * Property names and values make up the configuration data which is to be provided to requiring modules at runtime
       */
      properties?: {
        [k: string]: any;
      };
      /**
       * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the module at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
       */
      parameters?: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    [k: string]: any;
  }[];
  /**
   * List of the existing resources that will be modified by the extension.
   */
  resources?: {
    /**
     * The resource name which must match an existing resource defined by the deployment descriptor.
     */
    name: string;
    /**
     * If a resource is declared to be active, it is allocated and bound according to declared requirements. Default value is true.
     */
    active?: boolean;
    /**
     * Property names and values make up the configuration data which is to be provided to requiring modules at runtime.
     */
    properties?: {
      [k: string]: any;
    };
    /**
     * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to requiring modules at runtime. Untyped resources cannot have parameters.
     */
    parameters?: {
      [k: string]: any;
    };
    /**
     * List of existing hooks that will be modified by the extension.
     */
    hooks?: {
      /**
       * The name of the existing hook that will be modified by this extension.
       */
      name: string;
      /**
       * Configuration parameters that are used when executing the hook to the target runtime environment.
       */
      parameters?: {
        [k: string]: any;
      };
      /**
       * List of the existing required dependencies that will be modified by this extension.
       */
      requires?: {
        /**
         * The name of the existing required dependencies that will be modified.
         */
        name: string;
        /**
         * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the hook at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
         */
        parameters?: {
          [k: string]: any;
        };
        [k: string]: any;
      }[];
      [k: string]: any;
    }[];
    /**
     * List of the existing required dependencies that will be modified by the extension.
     */
    requires?: {
      /**
       * The name of the existing required dependency that will be modified.
       */
      name: string;
      /**
       * Required properties can be mapped from provided properties. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
       */
      properties?: {
        [k: string]: any;
      };
      /**
       * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the resource at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
       */
      parameters?: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    [k: string]: any;
  }[];
  /**
   * A list of existing module type definitions that will be modified by the extension.
   */
  "module-types"?: {
    /**
     * The name of the existing module type that will be modified.
     */
    name: string;
    /**
     * A collection of key-value pairs that will be inherited by all modules of this type.
     */
    properties?: {
      [k: string]: any;
    };
    /**
     * Configuration parameters that will be inherited in all modules of this type.
     */
    parameters?: {
      [k: string]: any;
    };
    [k: string]: any;
  }[];
  /**
   * A list of existing resource type definitions that will be modified by the extension.
   */
  "resource-types"?: {
    /**
     * The name of the existing resource type that will be modified.
     */
    name: string;
    /**
     * A collection of key-value pairs that will be inherited by all modules of this type.
     */
    properties?: {
      [k: string]: any;
    };
    /**
     * Configuration parameters that will be inherited in all resources of this type.
     */
    parameters?: {
      [k: string]: any;
    };
    [k: string]: any;
  }[];
  [k: string]: any;
}
