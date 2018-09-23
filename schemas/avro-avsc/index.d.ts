/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Json-Schema definition for Avro AVSC files.
 */
export type AvroSchemaDefinition = AvroSchema;
/**
 * Root Schema
 */
export type AvroSchema = AvroTypes;
/**
 * Allowed Avro types
 */
export type AvroTypes = PrimitiveType | CustomType | Record | Enum | Array | Map | Fixed | Union;
/**
 * Basic type primitives.
 */
export type PrimitiveType = "null" | "boolean" | "int" | "long" | "float" | "double" | "bytes" | "string";
/**
 * Reference to a ComplexType
 */
export type CustomType = string;
export type Name = string;
export type Namespace = string;
/**
 * A Union of types
 */
export type Union = AvroSchema[];

/**
 * A Record
 */
export interface Record {
  type: "record";
  name: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  fields: Field[];
  [k: string]: any;
}
/**
 * A field within a Record
 */
export interface Field {
  name: Name;
  type: AvroTypes;
  doc?: string;
  default?: any;
  order?: "ascending" | "descending" | "ignore";
  aliases?: Name[];
  [k: string]: any;
}
/**
 * An enumeration
 */
export interface Enum {
  type: "enum";
  name: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  symbols: Name[];
  [k: string]: any;
}
/**
 * An array
 */
export interface Array {
  type: "array";
  name?: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  items: AvroTypes;
  [k: string]: any;
}
/**
 * A map of values
 */
export interface Map {
  type: "map";
  name?: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  values: AvroTypes;
  [k: string]: any;
}
/**
 * A fixed sized array of bytes
 */
export interface Fixed {
  type: "fixed";
  name: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  size: number;
  [k: string]: any;
}