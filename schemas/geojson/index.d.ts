/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This object represents a geometry, feature, or collection of features.
 */
export type GeoJsonObject = Point | Feature | FeatureCollection;
/**
 * For type `Point`, the `coordinates` member must be a single position.
 */
export type Point = Geometry;
export type Geometry1 = Geometry | null;
export type Properties = {
  [k: string]: any;
} | null;
export type Features = Feature[];

/**
 * A geometry is a GeoJSON object where the type member's value is one of the following strings: `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`, or `GeometryCollection`.
 */
export interface Geometry {
  type?: "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection";
  [k: string]: any;
}
/**
 * A GeoJSON object with the type `Feature` is a feature object.
 *
 * * A feature object must have a member with the name `geometry`. The value of the geometry member is a geometry object as defined above or a JSON null value.
 *
 * * A feature object must have a member with the name `properties`. The value of the properties member is an object (any JSON object or a JSON null value).
 *
 * * If a feature has a commonly used identifier, that identifier should be included as a member of the feature object with the name `id`.
 */
export interface Feature {
  type?: "Feature";
  geometry: Geometry1;
  properties: Properties;
  id?: any;
  [k: string]: any;
}
/**
 * A GeoJSON object with the type `FeatureCollection` is a feature collection object.
 *
 * An object of type `FeatureCollection` must have a member with the name `features`. The value corresponding to `features` is an array. Each element in the array is a feature object as defined above.
 */
export interface FeatureCollection {
  type?: "FeatureCollection";
  features: Features;
  [k: string]: any;
}
