/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The configuration file of the SAP Cloud SDK Continuous Delivery Toolkit. For more information please visit https://github.com/SAP/cloud-s4-sdk-pipeline
 */
export interface SAPCloudSDKPipelineConfigJSONSchema {
  /**
   * The general configuration of the pipeline
   */
  general?: {
    [k: string]: any;
  } | null;
  /**
   * Configuration, which will modify the behaviour of stages in the SAP Cloud SDK Pipeline.
   */
  stages?: {
    [k: string]: any;
  } | null;
  steps?: {
    [k: string]: any;
  } | null;
  [k: string]: any;
}
