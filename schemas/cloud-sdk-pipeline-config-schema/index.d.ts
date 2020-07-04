/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cloud Foundry organization.
 */
export type Org = string;
/**
 * Cloud Foundry space.
 */
export type Space = string;
/**
 * Name of the application.
 */
export type AppName = string;
/**
 * Manifest file that needs to be used.
 */
export type Manifest = string;
/**
 * ID to the credentials that will be used.
 */
export type CredentialsId = string;
/**
 * URL to the Cloud Foundry endpoint.
 */
export type ApiEndpoint = string;
/**
 * (Only for MTA-projects) Path to the mta extension description file. For more information on how to use those extension files please visit the SAP HANA Developer Guide.
 */
export type MtaExtensionDescriptor = string;
/**
 * (Only for MTA-projects) Map of credentials that need to be replaced in the mtaExtensionDescriptor. This map needs to be created as value-to-be-replaced:id-of-a-credential-in-jenkins
 */
export type MtaExtensionCredentials = string;
/**
 * The image used in the step or stage.
 */
export type DockerImage = string;
export type AppUrls = {
  /**
   * The URLs under which the app is available after deployment. Each appUrl can be a string with the URL or a map containing a property url and a property credentialId.
   */
  url: string;
  /**
   * ID to the credentials that will be used to connect to the SAP Cloudplatform account.
   */
  credentialId: string;
  /**
   * Additional parameters can be passed for each end-to-end test deployment by specifying optional parameters for an application URL. These parameters are appended to the npm command during execution.
   */
  parameters?: string;
}[];
/**
 * Host of the region you want to deploy to, see Regions.
 */
export type Host = string;
/**
 * Identifier of the subaccount.
 */
export type Account = string;
/**
 * Name of the application in your account.
 */
export type Application = string;
/**
 * String of VM arguments passed to the JVM.
 */
export type VmArguments = string;
/**
 * Size of the JVM, e.g. lite, pro, prem, prem-plus.
 */
export type Size = string;
/**
 * Name of the runtime: neo-java-web, neо-javaee6-wp, neо-javaee7-wp. See the runtime for more information.
 */
export type Runtime = string;
/**
 * Version of the runtime. See runtime-version for more information.
 */
export type RuntimeVersion = string;
export type NeoTargets = {
  host: Host;
  account: Account;
  application: Application;
  credentialsId?: CredentialsId;
  environment?: Environment;
  vmArguments?: VmArguments;
  size?: Size;
  runtime: Runtime;
  runtimeVersion: RuntimeVersion;
}[];
export type CfTargets = {
  org?: Org;
  space?: Space;
  appName?: AppName;
  manifest?: Manifest;
  credentialsId?: CredentialsId;
  apiEndpoint?: ApiEndpoint;
  mtaExtensionDescriptor?: MtaExtensionDescriptor;
  mtaExtensionCredentials?: MtaExtensionCredentials;
}[];

/**
 * The configuration file of the SAP Cloud SDK Continuous Delivery Toolkit. For more information please visit https://github.com/SAP/cloud-s4-sdk-pipeline
 */
export interface SAPCloudSDKPipelineConfigJSONSchema {
  /**
   * The general configuration of the pipeline
   */
  general?: {
    /**
     * The name of your default branch. This branch will be used for deploying your application. Other branches will skip deployment.
     */
    productiveBranch?: string;
    /**
     * Name of the project. Will be used as identifier e.g. when creating a hdi container or executing code scans.
     */
    projectName?: string;
    /**
     * No personal data is collected. For details, consult the analytics documentation.
     */
    collectTelemetryData?: boolean;
    /**
     * Enable unsafe mode to skip checking environment variables for insecure elements. Only use this for demo purposes, never for productive usage.
     */
    unsafeMode?: boolean;
    /**
     * Apply automated versioning scheme. To disable this feature, set the value to false.
     */
    automaticVersioning?: boolean;
    /**
     * Path to a shared configuration file, which is merged with the project's configuration file.
     */
    sharedConfiguration?: string;
    /**
     * Allows enabling or disable certain optional features.
     */
    features?: {
      /**
       * Run E2E Tests in parallel. This feature is disabled by default because it is not supported in Blue Ocean. If this feature is enabled, we suggest not using the Blue Ocean interface and rely on the classic UI instead.
       */
      parallelTestExecution?: "on" | "off";
      [k: string]: unknown;
    };
    /**
     * If the Jenkins is running on a kubernetes cluster as a pod, we can use the dynamic scaling feature in the pipeline. In order to enable this, an environment variable ON_K8S has to be set to true on the jenkins.
     */
    jenkinsKubernetes?: {
      /**
       * Docker image for jnlp agent to be used.
       */
      jnlpAgent?: string;
      [k: string]: unknown;
    };
  } | null;
  /**
   * Configuration, which will modify the behaviour of stages in the SAP Cloud SDK Pipeline.
   */
  stages?: {
    staticCodeChecks?: {
      /**
       * A comma-separated list of exclusions (.java source files) expressed as an Ant-style pattern relative to the sources root folder, i.e. application/src/main/java for maven projects and srv/src/main/java for MTA projects.
       * Example: generated/** /*.java. Please find more details in the maven plugin documentation for pmd.
       */
      pmdExcludes?: string;
      /**
       * Path to a FindBugs XML exclusion file relative to the application folder.
       */
      findbugsExcludesFile?: string;
    };
    backendIntegrationTests?: {
      /**
       * The number of times that integration tests will retry before aborting the build. Note: This will consume more time for the jenkins build.
       */
      retry?: number;
      /**
       * The number of JVM processes that are spawned to run the tests in parallel in case of using a maven based project structure. For more details visit the surefire documentation.
       */
      forkCount?: string;
      /**
       * The list of system credentials to be injected during integration tests. The following example will provide the username and password for the systems with the aliases ERP and SFSF. For this, it will use the Jenkins credentials entries erp-credentials and successfactors-credentials. You have to ensure that corresponding credential entries exist in your Jenkins configuration.
       */
      credentials?: {
        alias: string;
        credentialId: string;
      }[];
      /**
       * Activates the creation of a HDI containers in CAP projects. The name of the container will contain the project name and a random id.
       */
      createHdiContainer?: boolean;
      cloudFoundry?: CloudFoundry;
      /**
       * Name of the Docker image that should be used.
       */
      sidecarImage?: string;
      /**
       * On Docker: Name of the container in the local network. On Kubernetes: Name of the container.
       */
      sidecarName?: string;
      /**
       * Command executed inside the container, which returns exit code 0 when the container is ready to be used.
       */
      sidecarReadyCommand?: string;
      /**
       * Environment variables to set in the container.
       */
      sidecarEnvVars?: {
        [k: string]: unknown;
      };
    };
    frontEndIntegrationTests?: {
      dockerImage?: DockerImage;
    };
    frontEndUnitTests?: {
      dockerImage?: DockerImage;
    };
    endToEndTests?: {
      /**
       * It is possible to activate zero downtime deployment in end-to-end tests with the option enableZeroDowntimeDeployment. This will lead to a blue-green-deployment on SCP Cloud Foundry respectively to a rolling update on SCP Neo. By default, this feature is turned off.
       */
      enableZeroDowntimeDeployment?: boolean;
      /**
       * Running end-to-end tests can be restricted to the productiveBranch with the option onlyRunInProductiveBranch. This might be useful when the end-to-end tests slow down development, and build failure on the productiveBranch is acceptable. By default, this feature is turned off.
       */
      onlyRunInProductiveBranch?: boolean;
      appUrls?: AppUrls;
      [k: string]: unknown;
    };
    /**
     * This stage uses the npm audit command to check for known vulnerabilities in dependencies.
     */
    npmAudit?: {
      /**
       * In case you audited an advisory, and it turns out to be a false positive, you can mark it as audited by adding its id to the auditedAdvisories in the stage configuration. A false positive in this case is when you are confident your application is not affected in any way by the underlying bug or vulnerability.
       */
      auditedAdvisories?: (number | string)[];
    };
    performanceTests?: {
      neoTargets?: NeoTargets;
      cfTargets?: CfTargets;
      [k: string]: unknown;
    };
    s4SdkQualityChecks?: {
      /**
       * A list of exclusions expressed as an Ant-style pattern relative to the application folder. An example can be found below.
       */
      jacocoExcludes?: string[];
      /**
       * We recommend only using OData services listed in the in SAP API Business Hub. Despite that for using custom business objects you can add those APIs here.
       */
      customOdataServices?: string[];
      /**
       * List of destination names that do not refer to ERP systems. Use this parameter to exclude specific destinations from being checked in context of ERP API whitelists.
       */
      nonErpDestinations?: string[];
      /**
       * List of URLs that are not defined as destinations. Use this parameter to exclude specific URLs from being checked in context of ERP API whitelists.
       */
      nonErpUrls?: string[];
      /**
       * A map containing the thresholds unstable and failing. If the code coverage is lower than what is configured in unstable, the pipeline result is unstable. If it is lower than what is configured in failing, the pipeline will fail.
       */
      codeCoverageFrontend?: {
        [k: string]: unknown;
      };
      /**
       * This setting allows the code coverage to be stricter compared to the default values. By default, the pipeline will fail if the coverage is below 65% line coverage (unstableCoverage), and will be unstable if it is less than 70% (successCoverage). If lower numbers are configured, or this configuration is left out, the default values are applied.
       */
      threshold?: {
        successCoverage: number;
        unstableCoverage: number;
      };
      /**
       * A list of checks which should not be executed. Possible values are: checkDeploymentDescriptors (Check for insecure options, such as ALLOW_MOCKED_AUTH_HEADER in deployment descriptors), checkResilience(Check that application is resilient to faults in the network), checkServices (Check that only official APIs are used), checkFrontendCodeCoverage (Ensures high frontend code coverage), checkBackendCodeCoverage (Ensures high backend code coverage)
       */
      disabledChecks?: (
        | "checkDeploymentDescriptors"
        | "checkResilience"
        | "checkServices"
        | "checkFrontendCodeCoverage"
        | "checkBackendCodeCoverage"
      )[];
    };
    /**
     * Checkmarx is one of the security analysis tools which is supported by the pipeline.
     */
    checkmarxScan?: {
      /**
       * Checkmarx Group ID
       */
      groupId: string;
      /**
       * Name of the project on Checkmarx server.
       */
      checkMarxProjectName?: string;
      /**
       * Files which needs to be skipped during scanning.
       */
      filterPattern?: string;
      /**
       * Toggle to enable or disable full scan on a certain schedule.
       */
      fullScansScheduled?: boolean;
      /**
       * Perform incremental scan with every run. If turned false, complete project is scanned on every submission.
       */
      incremental?: boolean;
      /**
       * The threshold for medium level threats. If the findings are greater than this value, pipeline execution will result in failure.
       */
      vulnerabilityThresholdMedium?: number;
      /**
       * The threshold for low level threats. If the findings are greater than this value, pipeline execution will result in failure.
       */
      vulnerabilityThresholdLow?: number;
      /**
       * Name or numerical ID of Checkmarx preset to be used when scanning this project. When a name (string) is specified, the pipeline will try to discover the corresponding numerical ID via the Checkmarx API. Please also make sure to specify checkmarxCredentialsId and checkmarxServerUrl in such a case. For determining available presets in your Checkmarx webclient, go to Checkmarx -> Management -> Scan Settings -> Preset Manager. Alternatively, you can determine the numerical ID of your targeted preset by following those guides: Token-based Authentication and Get All Preset Details.
       */
      preset?: number | string;
      /**
       * The Credential ID to connect to Checkmarx server. The credentials must be type username with password. This property becomes mandatory if the credentials are not configured in the Jenkins plugin itself.
       */
      checkmarxCredentialsId?: string;
      /**
       * An URL to Checkmarx server. This property becomes mandatory if the URL to the Checkmarx server is not configured in the Jenkins plugin itself or if the checkmarxCredentialsId is configured.
       */
      checkmarxServerUrl?: string;
      /**
       * Possibility to generate PDF reports of the scan.
       */
      generatePdfReport?: boolean;
    };
    productionDeployment?: {
      appUrls?: AppUrls;
      neoTargets?: NeoTargets;
      cfTargets?: CfTargets;
      [k: string]: unknown;
    };
    /**
     * The deployment of artifacts to nexus can be configured with a map containing the following properties.
     */
    artifactDeployment?: {
      nexus?: {
        /**
         * Version of nexus. Can be nexus2 or nexus3.
         */
        version?: "nexus2" | "nexus3";
        /**
         * URL of the nexus. The scheme part of the URL will not be considered, because only http is supported.
         */
        url: string;
        /**
         * Name of the nexus repository for Maven and MTA artifacts. Ignored if the project does not contain pom.xml or mta.yml in the project root.
         */
        mavenRepository?: string;
        /**
         * Name of the nexus repository for NPM artifacts. Ignored if the project does not contain a package.json in the project root directory.
         */
        npmRepository?: string;
        credentialsId?: CredentialsId;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Configure credentials for WhiteSource scans. The minimum required Maven WhiteSource plugin version is 18.6.2, ensure this in the plugins section of the project pom.xml file.
     *
     * Pipeline will execute npx whitesource run for npm projects. Please ensure that all package.json files have a name and version configured so that it is possible to distinguish between the different packages.
     */
    whitesourceScan?: {
      /**
       * Name of your product in WhiteSource.
       */
      product: string;
      /**
       * Overwrites the respective version in the whitesource UI per scan with the staticVersion. Per default for every new version of a pom/package.json a new project will be created in the whitesource UI. To deactivate the creation of new projects and always have a fixed version for each project in the whitesource UI, configure the staticVersion.
       */
      staticVersion?: string;
      credentialsId: CredentialsId;
      /**
       * Unique identifier of the Secret Text on Jenkins server that stores WhiteSource userKey of a user. This is required only if the administrator of the WhiteSource service has enabled additional access level control. More details can be found here.
       */
      whitesourceUserTokenCredentialsId?: string;
      [k: string]: unknown;
    };
    /**
     * Configure SourceClear scans.Note: Please note that the SourceClear stage of this pipeline is not actively maintained anymore. In case of issues, feel free to contribute to this project by opening a pull request.
     */
    sourceClearScan?: {
      credentialsId: CredentialsId;
      /**
       * Additional configuration for the SourceClear agent. The key-value pairs will be added to srcclr.yml.
       */
      config?: {
        vuln_methods_extra_ignored_directories?: string;
        scope?: string;
        [k: string]: unknown;
      };
    };
    /**
     * Configure Fortify scans.
     */
    fortifyScan?: {
      /**
       * URL how your Fortify Software Security Center client can be reached.
       */
      sscUrl: string;
      /**
       * ID of the credentials (username, password) you want to use for the Fortify Software Security Center. Can be configured in executeFortifyScan or here.
       */
      fortifyCredentialId: string;
      /**
       * Name of your project in Fortify.
       */
      fortifyProjectName: string;
      /**
       * ID of your project in Fortify.
       */
      projectVersionId: string;
      [k: string]: unknown;
    };
    /**
     * Configure SonarQube (https://www.sonarqube.org/) scans.
     */
    sonarQubeScan?: {
      /**
       * Define whether the scan should also happen in non productive branches, i.e. if your SonarQube instance supports that.
       */
      runInAllBranches?: boolean;
      /**
       * The project is used to refer your project.
       */
      projectKey: string;
      /**
       * This property refers to a sonarqube instance, which needs to be defined in the Jenkins.
       */
      instance: string;
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      [k: string]: unknown;
    };
    /**
     * The lint stage can enforce common coding guidelines within a team.It supports the SAPUI5 best practices linter which operates on SAPUI5 components. A component is identified by a Component.js file in the directory.
     */
    lint?: {
      ui5BestPractices?: {
        esLanguageLevel?: string;
        failThreshold?: {
          error?: number;
          warning?: number;
          info?: number;
        };
      };
    };
    [k: string]: unknown;
  } | null;
  steps?: {
    /**
     * The mavenExecute step is used for all invocations of the mvn build tool. It is either used directly for executing specific maven phases such as test, or indirectly for steps that execute maven plugins such as checkPmd.
     */
    mavenExecute?: {
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      /**
       * The project settings.xml to be used for maven builds. You can specify a relative path to your project root or a URL starting with http or https.
       */
      projectSettingsFile?: string;
      [k: string]: unknown;
    };
    /**
     * The executeNpm step is used for all invocations of the npm build tool. It is, for example, used for building the frontend and for executing end to end tests.
     */
    executeNpm?: {
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      /**
       * The default npm registry url to be used as the remote mirror. Bypasses the local download cache if specified.
       */
      defaultNpmRegistry?: string;
      /**
       * The default npm registry url to be used as the remote mirror for the SAP npm packages. Bypasses the local download cache if specified.
       */
      sapNpmRegistry?: string;
      [k: string]: unknown;
    };
    executeSourceClearScan?: {
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      [k: string]: unknown;
    };
    /**
     * A step configuration regarding Cloud Foundry deployment. This is required by stages like end-to-end tests, performance tests, and production deployment.
     */
    cloudFoundryDeploy?: {
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      /**
       * Expected return code for smoke test success.
       */
      smokeTestStatusCode?: number;
      /**
       * In case of a blue-green deployment the old instance will be stopped and will remain in the Cloud Foundry space by default. If this option is set to false, the old instance will be deleted.
       */
      keepOldInstance?: boolean;
      cloudFoundry?: CloudFoundry;
      [k: string]: unknown;
    };
    neoDeploy?: {
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      /**
       * The map for neo.
       */
      neo?: {
        host: Host;
        account: Account;
        application: Application;
        credentialsId?: CredentialsId;
        environment?: Environment;
        vmArguments?: VmArguments;
        size?: Size;
        runtime: Runtime;
        runtimeVersion: RuntimeVersion;
      };
      [k: string]: unknown;
    };
    /**
     * SpotBugs static code analysis is executed as part of the static code checks.
     */
    checkFindBugs?: {
      /**
       * Bug definition filter file.
       */
      includeFilterFile?: string;
      [k: string]: unknown;
    };
    /**
     * Gatling is used as one of the performance tests tool.
     */
    checkGatling?: {
      /**
       * You can enable Gatling tests by turning the flag to true.
       */
      enabled?: boolean;
      [k: string]: unknown;
    };
    /**
     * Apache JMeter is executed as part of performance tests of the application. The user is free to choose between JMeter and Gatling or both.
     */
    checkJMeter?: {
      /**
       * Options such as proxy.
       */
      options?: string;
      /**
       * The directory where the test plans reside. Should reside in a subdirectory under performance-tests directory if both JMeter and Gatling are enabled.
       */
      testPlan?: string;
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      /**
       * Marks build as FAILURE if the value exceeds the threshold.
       */
      failThreshold?: number;
      /**
       * Marks build as UNSTABLE if the value exceeds the threshold.
       */
      unstableThreshold?: number;
      [k: string]: unknown;
    };
    executeFortifyScan?: {
      dockerImage: DockerImage;
      /**
       * Sends the verbose out put to the Jenkins log.
       */
      verbose?: boolean;
      /**
       * Java version of the source code that needs to be scanned
       */
      sourceVersion?: string;
      /**
       * The build ID for the Fortify scan.
       */
      buildId?: string;
      /**
       * Runs Fortify SCA inside the 64-bit JRE.
       */
      use64BitVersion?: string;
      /**
       * Maximum heap size of the JVM which runs Fortify SCA.
       */
      maximumMemoryUsage?: string;
      /**
       * File and directories that needs to excluded from the scanning.
       */
      exclude?: string;
      /**
       * Skip the node modules from the scanning.
       */
      skipNgComponents?: string;
      /**
       * Additional Fortify options such as thread count, alias usage etc.
       */
      additionalScanOptions?: string;
      [k: string]: unknown;
    };
    mtaBuild?: {
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      /**
       * The target platform to which the mtar can be deployed.
       */
      buildTarget?: string;
      /**
       * Choose which tool is used to build your mta project. The default option is `cloudMbt` which is not backwards compatible with the `classic` tool. For more information on migrating from `classic` to `cloudMbt`, please refer to https://sap.github.io/cloud-mta-build-tool/migration/.
       */
      mtaBuildTool?: string;
      /**
       * The name of the application which is being built. If the parameter has been provided and no mta.yaml exists, the mta.yaml will be automatically generated using this parameter and the information (name and version) from package.json before the actual build starts.
       */
      applicationName?: string;
      /**
       * Url to the npm registry that should be used for installing npm dependencies.
       */
      defaultNpmRegistry?: string;
      /**
       * Docker options to be set when starting the container (List or String).
       */
      dockerOptions?: unknown[] | string;
      /**
       * The path to the extension descriptor file.
       */
      extension?: string;
      /**
       * Path or url to the mvn settings file that should be used as global settings file.
       */
      globalSettingsFile?: string;
      /**
       * Path or url to the mvn settings file that should be used as project settings file.
       */
      projectSettingsFile?: string;
      /**
       * The location of the SAP Multitarget Application Archive Builder jar file, including file name and extension. If it is not provided, the SAP Multitarget Application Archive Builder is expected on PATH.
       */
      mtaJarLocation?: string;
      [k: string]: unknown;
    };
    createHdiContainer?: {
      /**
       * The image used in the step or stage.
       */
      dockerImage?: string;
      [k: string]: unknown;
    };
    /**
     * The debugReportArchive configuration can be used to create confidential (instead of redacted) debug reports. The difference between the redacted and the confidential debug report is that potentially confidential information, such as the GitHub repository and branch, global extension repository and shared libraries, are included in the confidential debug report. It is the user's responsibility to make sure that the debug report does not contain any confidential information.
     */
    debugReportArchive?: {
      /**
       * If set to true, a confidential debug report is being generated with each build.
       */
      shareConfidentialInformation?: boolean;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  } | null;
  [k: string]: unknown;
}
/**
 * A map specifying the Cloud Foundry specific parameters.
 */
export interface CloudFoundry {
  org?: Org;
  space?: Space;
  appName?: AppName;
  manifest?: Manifest;
  credentialsId?: CredentialsId;
  apiEndpoint?: ApiEndpoint;
  mtaExtensionDescriptor?: MtaExtensionDescriptor;
  mtaExtensionCredentials?: MtaExtensionCredentials;
}
/**
 * Map of environment variables in the form of KEY: VALUE.
 */
export interface Environment {
  [k: string]: unknown;
}
