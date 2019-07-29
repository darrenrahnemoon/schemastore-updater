/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Icon = string;
/**
 * The format of the color values is 'RRGGBB' where RR is the hex value for red, GG for green, and BB for blue.
 */
export type Color = string;
/**
 * If set, then must be set to 'true' for this release
 */
export type Condition = "true";
/**
 * The numeric id of the icon layout element based on the predefined layout selected.
 */
export type ElementId = "1" | "2" | "3" | "11" | "12" | "21" | "22" | "31" | "32";

export interface JSONSchemaForMicrosoftBandManifests {
  /**
   * Defines the contract between the web tile developer and the Microsoft Health app. It must be set to 1 for the current release.
   */
  manifestVersion: 1;
  /**
   * Defines the name of the web tile.
   */
  name: string;
  /**
   * Provides description about the web tile.
   */
  description?: string;
  /**
   * Indicates the version number of the web tile which will not be shown to users.
   */
  version?: number;
  /**
   * Indicates the web tile version as shown to users. If not provided, it displays the version.
   */
  versionString?: string;
  /**
   * Specifies the author of the web tile.
   */
  author?: string;
  /**
   * Specifies the organization associated with the web tile.
   */
  organization?: string;
  /**
   * Provides contact info of the web tile author. Used for administrative purposes and analytics by Microsoft Band team.
   */
  contactEmail?: string;
  /**
   * Specifies the location of the large tile icon.
   */
  tileIcon: {
    "46": Icon;
    [k: string]: any;
  };
  /**
   * Specifies the location of the small tile icon. If not provided, the badging functionality is not enabled.
   */
  badgeIcon?: {
    "24": Icon;
    [k: string]: any;
  };
  /**
   * Specifies the custom theme colors for the web tile.
   */
  tileTheme?: {
    base?: Color;
    highlight?: Color;
    lowlight?: Color;
    secondary?: Color;
    highcontrast?: Color;
    muted?: Color;
    [k: string]: any;
  };
  /**
   * Specifies the desired data refresh interval, in minutes. Refresh intervals shorter than 15 will not be honored. If not provided, it defaults to 30.
   */
  refreshIntervalMinutes?: number;
  /**
   * Each web tile must refer to one or more web resources. Each resource object describes a web data from which content for the tile will be extracted.
   */
  resources: Resource[];
  /**
   * All PNG icons used by the tile within its pages must be provided here.
   */
  icons?: {
    [k: string]: Icon;
  };
  /**
   * Each tile consists of one or more pages, as described by the objects in this array. Each page object specifies the layout and content of the page.
   */
  pages: Page[];
  /**
   * Creates notification that gets delivered when certain conditions are detected in the new web data.
   */
  notifications?: Notification[];
  [k: string]: any;
}
export interface Resource {
  /**
   * The URL to be referenced. For resources that require authentication, the URL must be HTTPS.
   */
  url: string;
  /**
   * Specifies the kind of web resource being accessed. Permitted values are 'Simple' and 'Feed'.
   */
  style: string;
  /**
   * This member specifies how to extract content from the web response.
   */
  content: {
    [k: string]: string;
  };
  [k: string]: any;
}
export interface Page {
  /**
   * The name of the layout for the page. The layout name should refer to one of the predefined page layouts.
   */
  layout:
    | "MSBand_ScrollingText"
    | "MSBand_NoScrollingText"
    | "MSBand_SingleMetric"
    | "MSBand_SingleMetricWithIcon"
    | "MSBand_MetricsWithIcons"
    | "MSBand_SingleMetricWithSecondary";
  condition?: Condition;
  /**
   * Similar to textBindings, but used to select one of the web tile icons in icons list for each icon in the page. If there are no icon elements on the page, this member may be omitted.
   */
  iconBindings?: [IconBinding, ...(IconBinding)[]];;
  /**
   * An array of objects corresponding to each page element that contains string content. Each binding object provides the numeric id of the page element based on the predefined layout selected, and the string value that it should contain.
   */
  textBindings?: [TextBinding, ...(TextBinding)[]];;
  [k: string]: any;
}
export interface IconBinding {
  elementId: ElementId;
  /**
   * For this release, this must contain an array with a single 'condition' object whose 'condition' is true, and whose 'icon' member specifies the name of the icon to be used.
   */
  conditions: {
    condition?: Condition;
    /**
     * The name of the icon as specified in the 'icons' node.
     */
    icon?: string;
    [k: string]: any;
  }[];
  [k: string]: any;
}
export interface TextBinding {
  elementId: ElementId;
  value: string;
  [k: string]: any;
}
export interface Notification {
  /**
   * The condition to be evaluated to determine whether to trigger the notification. The conditional expression has the syntax '<Operand1> <Operator> <Operand2>' or 'true'.
   */
  condition: string;
  /**
   * The text to use for the notification title. If longer than 20 characters, it will be truncated.
   */
  title: string;
  /**
   * The text to use for the notification body. If longer than 20 characters, it will be truncated.
   */
  body?: string;
  [k: string]: any;
}
