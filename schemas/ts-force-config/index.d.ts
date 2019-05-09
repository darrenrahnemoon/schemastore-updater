/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface TsForceConfig {
  /**
   * Authentication Method.  Choose one of three:
   * - You can either username/password oAuth configuration
   * - sfdx configuration (`username` only)
   * - `accessToken` & `instanceUrl`
   * See readme for examples.
   */
  auth?: {
    accessToken?: string;
    clientId?: string;
    clientSecret?: string;
    instanceUrl?: string;
    oAuthHost?: string;
    password?: string;
    /**
     * If using `sfdx-cli` auth, this is the only property needed to authenticate.
     * Otherwise, supply additional oAuth parameters
     */
    username?: string;
    version?: number;
    [k: string]: any;
  };
  /**
   * Make picklist fields strongly typed to generated enums. `generatePicklists` must also be `true`
   *   `ALL`: for all picklist fields, regardless of salesforce enforcement
   *   `RESTRICTED`: only on fields where the values are restricted on Salesforce
   */
  enforcePicklistValues?: "ALL" | "RESTRICTED" | false;
  /**
   * Flag to generate enums for picklist fields.  Defaulted to false
   */
  generatePicklists?: boolean;
  /**
   * The path to generate files to.
   *    If the destination is a folder, it will generate one file per object.
   *    If the destination is a `.ts` file, a single file will be generated.
   *    If not set, class output will be logged to `stdout`
   */
  outPath?: string;
  /**
   * The SObjects to generate classes for.  Can either be a string or an `SObjectConfig` object
   */
  sObjects?: (SObjectConfig | string)[];
  [k: string]: any;
}
/**
 * Object used to configure advanced settings on SObject generation
 */
export interface SObjectConfig {
  /**
   * The Target SObject API name
   */
  apiName: string;
  /**
   * Defaulted to true.  If set to false, names will NOT be auto-coverted to standard javascript conventions
   */
  autoConvertNames?: boolean;
  /**
   * The generated class name.  If not set, it will be automatically
   * converted to standard javascript Class convention
   */
  className?: string;
  /**
   * *Overrides Global Setting*
   * The path to generate files to.
   *    If the destination is a folder, it will generate one file per object.
   *    If the destination is a `.ts` file, a single file will be generated.
   *    If not set, class output will be logged to `stdout`
   */
  enforcePicklistValues?: "ALL" | "RESTRICTED" | false;
  /**
   * List of field mappings to override the auto-conversion
   */
  fieldMappings?: FieldMapping[];
  /**
   * *Overrides Global Setting*
   * Make picklist fields strongly typed to generated enums. `generatePicklists` must also be `true`
   *   `ALL`: for all picklist fields, regardless of salesforce enforcement
   *   `RESTRICTED`: only on fields where the values are restricted on Salesforce
   */
  generatePicklists?: boolean;
  [k: string]: any;
}
export interface FieldMapping {
  /**
   * The Target SObject API name
   */
  apiName: string;
  /**
   * The generated class property name
   */
  propName: string;
  [k: string]: any;
}