/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This is the collection of prevalue fields
 */
export type Fields = {
  /**
   * A unique key for the prevalue field
   */
  key?: string;
  /**
   * The user friendly label for the prevalue
   */
  label?: string;
  /**
   * A more detailed description for the user
   */
  description?: string;
  /**
   * The type of editor to use for this prevalue field
   */
  view?: string;
  validation?: {
    type?: string;
    [k: string]: any;
  }[];
  [k: string]: any;
}[];

export interface ASchemaForUmbracoSPackageManifestFiles {
  /**
   * A list of Javascript files with full path to load for your property editor
   */
  javascript?: string[];
  /**
   * A list of CSS files with full path to load for your property editor
   */
  css?: string[];
  /**
   * Returns an array of editor objects, each object specifies an editor to make available to data types as an editor component. These editors are primarily property editors for content, media and members, but can also be made available as a macro parameter editor.
   */
  propertyEditors?: (Editors & PreValues)[];
  /**
   * Returns an array of editor objects, each object specifies an editor to make available to macro parameters as an editor component. These editors work solely as parameter editors, and will not show up on the property editors list.
   */
  parameterEditors?: Editors[];
  /**
   * Returns an array of grid editor objects, each object specifies a grid editor to make available in the Grid Layout property editor.
   */
  gridEditors?: GridEditor[];
  /**
   * V8: Returns an array of dashboards, each object sepcifies a dashboard to make available in the backoffice.
   */
  dashboards?: Dashboard[];
  /**
   * V8: Returns an array of sections/applications to add to the Umbraco backoffice.
   */
  sections?: Section[];
  [k: string]: any;
}
export interface Editors {
  /**
   * This must be a unique alias to your property editor
   */
  alias: string;
  /**
   * Provides a collection of default configuration values, in cases the property editor is not configured or is used a parameter editor, which doesnt allow configuration. The object is a key/value collection and must match the prevalue fields keys.
   */
  defaultConfig?: {
    [k: string]: any;
  };
  editor: Editor;
  /**
   * Enables the property editor as a macro parameter editor can be true/false
   */
  isParameterEditor?: boolean;
  /**
   * The friendly name of the property editor, shown in the Umbraco backoffice
   */
  name: string;
  /**
   * A CSS class for the icon to be used in the 'Select Editor' dialog eg: icon-autofill
   */
  icon?: string;
  /**
   * The group to place this editor in within the 'Select Editor' dialog. Use a new group name or alternatively use an existing one such as 'Pickers'
   */
  group?: string;
  [k: string]: any;
}
/**
 * This describes details about the editor
 */
export interface Editor {
  /**
   * This is the full path to the HTML view for your property editor
   */
  view?: string;
  /**
   * If set to true this hides the label for the property editor when used in Umbraco on a document type
   */
  hideLabel?: boolean;
  /**
   * This is the type of data you want your property editor to save to Umbraco
   */
  valueType?: "STRING" | "JSON" | "DATETIME" | "TEXT" | "INT";
  /**
   * Object describing required validators on the editor
   */
  validation?: {
    [k: string]: any;
  };
  /**
   * If set to true this makes the property editor read only
   */
  isReadOnly?: boolean;
}
export interface PreValues {
  /**
   * This is an object that stores an array of prevalue fields or options to configure yout property editor
   */
  prevalues?: {
    fields?: Fields;
    [k: string]: any;
  };
  [k: string]: any;
}
export interface GridEditor {
  /**
   * The friendly name of the grid editor, shown in the Umbraco backoffice
   */
  name: string;
  /**
   * This must be a unique alias to your grid editor
   */
  alias: string;
  /**
   * A CSS class for the icon to be used in the 'Select Editor' dialog eg: icon-autofill
   */
  icon?: string;
  /**
   * This is backoffice HTML view for your grid editor. Either refers to one of the built-in view (textstring, rte, embed, macro, media) or the full path to a custom view eg.: '~/App_Plugins/FolderName/editor.html'
   */
  view: string;
  /**
   * This is front end razor view for your grid editor. Accepts full path to a custom view eg.: '~/App_Plugins/FolderName/editor.cshtml
   */
  render?: string;
  /**
   * Configuration for the grid editor. Can be used with textstring and media views or for custom configuration properties
   */
  config?: {
    /**
     * If used with the textstring view this accepts inline css to style the textstring box eg.: font-size: 30px; line-height: 40px; font-weight: bold
     */
    style?: string;
    /**
     * If used with the textstring view this allows wrapping the value in custom markup eg.: <h2>#value#</h2>
     */
    markup?: string;
    /**
     * If used with the media view this accepts hight and width key/value pairs for cropping
     */
    size?: {
      /**
       * Height of image in pixels
       */
      height?: number;
      /**
       * Width of image in pixels
       */
      width?: number;
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}
/**
 * An Umbraco dashboard to display contextual information when in a section/application
 */
export interface Dashboard {
  /**
   * The alias of the dashboard which can be queried via Dashboard Service API
   */
  alias: string;
  /**
   * This is the full path to the HTML view for your dashboard
   */
  view: string;
  /**
   * A list of section/application aliases that the dashboard should be visible in
   */
  sections: string[];
  /**
   * The weight (sort order) of the dashboard. Defaults to 100 if not specified.
   */
  weight?: number;
  /**
   * A list of what user groups aliases are granted or denied permission to see the dashboard. This is optional. If not specifed all users will have grant access
   */
  access?: (
    | {
        [k: string]: any;
      }
    | {
        [k: string]: any;
      })[];
}
/**
 * An Umbraco section/application to extend the backoffice
 */
export interface Section {
  /**
   * The friendly name of the section/application, shown in the Umbraco backoffice
   */
  name: string;
  /**
   * The alias of the section/application which can be queried via Section Service API
   */
  alias: string;
}
