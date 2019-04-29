/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DescriptionSchema = string;
export type EnrollSchema = boolean;
/**
 * Specifies the expiration date of the barcode sequence. Device date must be synchronized/configured for expiration date to work properly.
 */
export type ValidUntilSchema = string;
/**
 * Padlock key to be used. If value doesn't match the device, the barcode is rejected. Empty string means no key.
 */
export type KeySchema = string;
/**
 * Configures the padlock state
 */
export type StateSchema = "locked" | "unlocked";
/**
 * Indicates if Scan2Deploy should be disabled after staging is complete. Once disabled, factory reset required to reenable.
 */
export type HideFromLauncherSchema = boolean;
/**
 * Base destination folder where any archive/fill will be inflated/written. Default is device internal SD-card root
 */
export type TargetPathSchema = string;
/**
 * Folder where the application expects auto-installed/auto-updated APKs to be found. Default is value specified in 'target path'.
 */
export type InstallPathSchema = string;
/**
 * Folder where the application expects auto-updated OTA packages to be found. Default is value specified in 'target path'.
 */
export type UpdatePathSchema = string;
/**
 * Indicates if target specified in 'target-path' needs to be purged (deleted) prior to inflation of the deployment archive
 */
export type PurgeTargetPathSchema = boolean;
/**
 * Enables/Disables the auto-update of APKs and OTA packages
 */
export type AutoScanSchema = boolean;
/**
 * Used to force the downgrade of pre-installed application (even System app), if required
 */
export type DownloadPreinstalledSchema = boolean;
export type ItemsSchema = string;
/**
 * A string specifying the absolute/relative path of a file, or a JSON array of strings describing the file content line-by-line. The script file will be interpreted last in staging process.
 */
export type ScriptSchema = ItemsSchema[];
/**
 * Specifies the final action performed by the application at the end of the staging process.
 */
export type ActionSchema = "none" | "close" | "enterprise-reset" | "factory-reset" | "reset";
/**
 * Activates the enterprise backup persistence for the staging data, resulting in both the staging script and archive being copied to the enterprise partition
 */
export type BackupToEnterpriseSchema = boolean;
/**
 * String representation in RFC-1123 format of the date to be set
 */
export type DateTimeSchema = string;
/**
 * Controls the 'Date & Time' automatic date-time adjustment setting
 */
export type AutoTimeSchema = boolean;
/**
 * Controls the 'Date & Time' automatic time-zone adjustment setting
 */
export type AutoTimeZoneSchema = boolean;
/**
 * Address of the NTP server to be used for date-time syncronizaiton
 */
export type AutoTimeServerSchema = string;
/**
 * Controls the state of 'Android Debug Bridge'
 */
export type DebugBridgeSchema = boolean;
/**
 * Controls the state of Android's lock-screen, requiring the user to swipe the display to unlock the device
 */
export type LockScreenSchema = boolean;
/**
 * Controls the display of the top status-bar. Note: hiding the status-bar will make notification disappear.
 */
export type StatusBarSchema = boolean;
/**
 * Controls the display of the bottom navigation-bar
 */
export type NavigationBarSchema = boolean;
/**
 * Indicates the charge threshold a battery exhausted device needs to reach to automatically boot when recharging
 */
export type ChargeThresholdSchema = number;
/**
 * USB communication profile in use
 */
export type UsbProfileSchema = "NONE" | "BOTH" | "DATA" | "CHARGE";
/**
 * USB communication function in use
 */
export type UsbFunctionSchema = "MTP" | "PTP" | "CHARGING";
/**
 * Wireless network ESSID
 */
export type EssidSchema = string;
/**
 * Indicates if the wireless network is using a hidden ESSID
 */
export type HiddenSchema = boolean;
/**
 * Wireless connection mode
 */
export type ModeSchema = "open" | "wep-40" | "wep-104" | "wpa-psk" | "wpa2-psk" | "wpa-eap" | "wpa2-eap";
/**
 * Wireless network key, if needed
 */
export type ModeKeySchema = string;
/**
 * Indicates if 'mode-key' is written in plain-text or encrypted with a custom encryption algorithm
 */
export type ModeKeyEncryptedSchema = boolean;
/**
 * Configures the EAP authentication method
 */
export type EapMethodSchema = "none" | "peap" | "tls" | "ttls" | "pwd" | "sim" | "aka" | "aka-prime";
/**
 * Configures the EAP phase 2 authentication method
 */
export type EapPhase2Schema = "none" | "pap" | "mschap" | "mschapv2" | "gtc";
/**
 * Indicates the EAP identity
 */
export type EapIdentitySchema = string;
/**
 * Indicates the EAP anonymous identity, used as the unencrypted identity with certain EAP types
 */
export type EapAnonymousIdentitySchema = string;
/**
 * EAP password, if needed
 */
export type EapPasswordSchema = string;
/**
 * Indicates if the 'eap-password' is encrypted with a custom encryption alogrithm
 */
export type EapPasswordEncryptedSchema = boolean;
/**
 * Base64 representation of the EAP certificate to use
 */
export type EapCertificateSchema = string;
/**
 * Server name or IP address of the proxy to be used for HTTP/HTTPS communications
 */
export type ProxyHostSchema = string;
/**
 * Server IP port of the proxy for HTTP/HTTPS communications
 */
export type ProxyPortSchema = number;
/**
 * Indicates if any currently configured wireless network needs to be removed. Can be useful to avoid profile roaming.
 */
export type PurgeSchema = boolean;
/**
 * If true, will reconfigure any existing and matching network. If false, will leave existing network untouched. Setting used when 'purge' is set to false.
 */
export type ReconfigureSchema = boolean;
/**
 * Wireless sleep policy for Android's Settings.Global parameter (0-WIFI_SLEEP_POLICY_DEFAULT, 1-WIFI_SLEEP_POLICY_NEVER_WHILE_PLUGGED, 2-WIFI_SLEEP_POLICY_NEVER)
 */
export type SleepPolicySchema = number;
/**
 * Controls the frequency bands supported by the device
 */
export type FrequencyBandSchema = "auto" | "5ghz" | "2ghz";
/**
 * Absolute path to the file where the current network configuration will be saved, empty string indicates network configuration won't be serialized to a file
 */
export type SaveToFileSchema = string;
/**
 * If true, wireless connection profile will be used during staging process, then deleted after staging. If false, wireless connection profile will still be present after staging process.
 */
export type EphemeralSchema = boolean;
/**
 * Indicates whether a valid Wi-Fi connection has to be waited once the network configuration is complete. Can be useful when device needs to be configured but a valid Wi-Fi connection is not ready yet.
 */
export type WaitForConnectionSchema = boolean;
/**
 * Deployment download scheme to use
 */
export type SchemeSchema = "http" | "https";
/**
 * Host-name or internet-protocol address of the server from which the resource is to be fetched
 */
export type HostSchema = string;
/**
 * TCP/IP port to be used to contact the server
 */
export type PortSchema = number;
/**
 * Path to the server resource to download, complete with query string if needed
 */
export type PathSchema = string;
/**
 * The timeout value used when fetching resource from host
 */
export type FetchTimeoutSchema = number;
/**
 * The timeout value used when attempting to reach the host server
 */
export type CheckTimeoutSchema = number;
/**
 * String representation of the archive path-file name, once downloaded
 */
export type WorkingArchiveSchema = string;
/**
 * Instructs the application not to inflate the deployment archive once downloaded, can be useful to speed the OTA update process up
 */
export type SkipInflationSchema = boolean;
/**
 * Path to the file to be created. Can be either absolute or relative to the global/target-path parameter value. During file de-serialization, any required (parent) path is automatically created.
 */
export type FileSchema = string;
/**
 * Base64 representation of the actual file content
 */
export type ContentSchema = string;
/**
 * Section used to transfer binary data to newly created file on device
 */
export type BlobsSchema = ItemsSchema1[];

/**
 * Schema to validate Android JSON files given as input to DL-Config to generate Scan2Deploy barcodes
 */
export interface AndroidScan2DeploySchema {
  layout?: LayoutSchema;
  padlock?: PadlockSchema;
  global?: GlobalSchema;
  settings?: SettingsSchema;
  network?: NetworkSchema;
  deployment?: DeploymentSchema;
  blobs?: BlobsSchema;
  [k: string]: any;
}
export interface LayoutSchema {
  description?: DescriptionSchema;
  enroll?: EnrollSchema;
  [k: string]: any;
}
/**
 * Section used to configure the staging locking feature
 */
export interface PadlockSchema {
  "valid-until"?: ValidUntilSchema;
  key?: KeySchema;
  state?: StateSchema;
  "hide-from-launcher"?: HideFromLauncherSchema;
  [k: string]: any;
}
/**
 * Section used to configure application scoped settings
 */
export interface GlobalSchema {
  "target-path"?: TargetPathSchema;
  "install-path"?: InstallPathSchema;
  "update-path"?: UpdatePathSchema;
  "purge-target-path"?: PurgeTargetPathSchema;
  "auto-scan"?: AutoScanSchema;
  "download-preinstalled"?: DownloadPreinstalledSchema;
  script?: ScriptSchema;
  action?: ActionSchema;
  "backup-to-enterprise"?: BackupToEnterpriseSchema;
  [k: string]: any;
}
/**
 * Section used to control inner device settings that typically need to be changed from the Android defaults
 */
export interface SettingsSchema {
  "date-time"?: DateTimeSchema;
  "auto-time"?: AutoTimeSchema;
  "auto-time-zone"?: AutoTimeZoneSchema;
  "auto-time-server"?: AutoTimeServerSchema;
  "debug-bridge"?: DebugBridgeSchema;
  "lock-screen"?: LockScreenSchema;
  "status-bar"?: StatusBarSchema;
  "navigation-bar"?: NavigationBarSchema;
  "charge-threshold"?: ChargeThresholdSchema;
  "usb-profile"?: UsbProfileSchema;
  "usb-function"?: UsbFunctionSchema;
  [k: string]: any;
}
/**
 * Section used to configure the device Wi-Fi network
 */
export interface NetworkSchema {
  essid?: EssidSchema;
  hidden?: HiddenSchema;
  mode?: ModeSchema;
  "mode-key"?: ModeKeySchema;
  "mode-key-encrypted"?: ModeKeyEncryptedSchema;
  "eap-method"?: EapMethodSchema;
  "eap-phase2"?: EapPhase2Schema;
  "eap-identity"?: EapIdentitySchema;
  "eap-anonymous-identity"?: EapAnonymousIdentitySchema;
  "eap-password"?: EapPasswordSchema;
  "eap-password-encrypted"?: EapPasswordEncryptedSchema;
  "eap-certificate"?: EapCertificateSchema;
  "proxy-host"?: ProxyHostSchema;
  "proxy-port"?: ProxyPortSchema;
  purge?: PurgeSchema;
  reconfigure?: ReconfigureSchema;
  "sleep-policy"?: SleepPolicySchema;
  "frequency-band"?: FrequencyBandSchema;
  "save-to-file"?: SaveToFileSchema;
  ephemeral?: EphemeralSchema;
  "wait-for-connection"?: WaitForConnectionSchema;
  [k: string]: any;
}
/**
 * Section can be used to download a ZIP archive from a server and inflate it to the 'target-path' folder
 */
export interface DeploymentSchema {
  scheme?: SchemeSchema;
  host: HostSchema;
  port?: PortSchema;
  path?: PathSchema;
  "fetch-timeout"?: FetchTimeoutSchema;
  "check-timeout"?: CheckTimeoutSchema;
  "working-archive"?: WorkingArchiveSchema;
  "skip-inflation"?: SkipInflationSchema;
  [k: string]: any;
}
export interface ItemsSchema1 {
  file: FileSchema;
  content: ContentSchema;
  [k: string]: any;
}
