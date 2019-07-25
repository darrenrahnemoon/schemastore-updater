/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Configuration file for unit test projects using xUnit.net
 */
export interface XUnitNetRunnerConfiguration {
  /**
   * The document schema
   */
  $schema?: string;
  /**
   * Determines whether the runner will use an app domain to discover and run tests. If you choose 'required', app domains will be required (only desktop tests can be run); if you choose 'denied', then tests will not use app domains; if you choose 'ifAvailable', then app domains use is left to the discretion of the runner. Defaults to 'ifAvailable'. Note that not all runners support app domains, so the 'required' value may not always be valid.
   */
  appDomain?: "required" | "ifAvailable" | "denied";
  /**
   * Enables or disables diagnostic information during test discovery and execution.
   */
  diagnosticMessages?: boolean;
  /**
   * Enables or disables internal diagnostic information during test discovery and execution.
   */
  internalDiagnosticMessages?: boolean;
  /**
   * Enables reporting of tests which take longer than the configured time to complete (set to 0 to disable).
   */
  longRunningTestSeconds?: number;
  /**
   * Configures the maximum number of threads to be used when parallelizing tests within this assembly.
   */
  maxParallelThreads?: number;
  /**
   * Configures the default display name for test cases. If you choose 'method', the display name will be just the method (without the class name); if you choose 'classAndMethod', the default display name will be the fully qualified class name and method name.
   */
  methodDisplay?: "method" | "classAndMethod";
  /**
   * Configures one or more automatic transformations of test names. Flag names should be combined with a comma (i.e., flag1,flag2). Valid flags are: 'replaceUnderscoreWithSpace', 'useOperatorMonikers', 'useEscapeSequences', 'replacePeriodWithComma'. There are special flags named 'all' and 'none'.
   */
  methodDisplayOptions?: string;
  /**
   * Instructs the test runner that this assembly is willing to run in parallel with other assemblies.
   */
  parallelizeAssembly?: boolean;
  /**
   * Enables or disables tests inside this assembly from running in parallel against each other. Tests in the same test collection will be run sequentially against each other, but tests in different test collections will be run in parallel against each other.
   */
  parallelizeTestCollections?: boolean;
  /**
   * Enables or disables pre-enumerate of theories so that there is an individual test case for each theory data row. Set this to 'false' to return a single test case for each theory without pre-enumerating the data ahead of time.
   */
  preEnumerateTheories?: boolean;
  /**
   * Enables or disables use of shadow copying when using app domains. Has no effect if app domains are not used.
   */
  shadowCopy?: boolean;
}
