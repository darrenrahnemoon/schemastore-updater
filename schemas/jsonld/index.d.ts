/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SchemaForJsonLd = Context & Graph & Common;

export interface Context {
  /**
   * Used to define the short-hand names that are used throughout a JSON-LD document.
   */
  "@context"?:
    | {
        [k: string]: any;
      }
    | string
    | any[]
    | null;
  [k: string]: any;
}
export interface Graph {
  /**
   * Used to express a graph.
   */
  "@graph"?:
    | any[]
    | {
        [k: string]: any;
      };
  [k: string]: any;
}
export interface Common {
  /**
   * Used to uniquely identify things that are being described in the document with IRIs or blank node identifiers.
   */
  "@id"?: string;
  /**
   * Used to specify the data that is associated with a particular property in the graph.
   */
  "@value"?: string | boolean | number | null;
  /**
   * Used to specify the language for a particular string value or the default language of a JSON-LD document.
   */
  "@language"?: string | null;
  /**
   * Used to set the data type of a node or typed value.
   */
  "@type"?: string | null | any[];
  /**
   * Used to set the default container type for a term.
   */
  "@container"?: "@language" | "@list" | "@index" | "@set";
  /**
   * Used to express an ordered set of data.
   */
  "@list"?: {
    [k: string]: any;
  };
  /**
   * Used to express an unordered set of data and to ensure that values are always represented as arrays.
   */
  "@set"?: {
    [k: string]: any;
  };
  /**
   * Used to express reverse properties.
   */
  "@reverse"?:
    | string
    | {
        [k: string]: any;
      }
    | null;
  /**
   * Used to set the base IRI against which relative IRIs are resolved
   */
  "@base"?: string | null;
  /**
   * Used to expand properties and values in @type with a common prefix IRI
   */
  "@vocab"?: string | null;
  [k: string]: Common;
}