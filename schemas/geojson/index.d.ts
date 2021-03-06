/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This object represents a geometry, feature, or collection of features.
 */
export type GeoJSONObject =
  | Point
  | MultiPointGeometry
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygonGeometry
  | GeometryCollection
  | Feature
  | FeatureCollection;
/**
 * For type `Point`, the `coordinates` member must be a single position.
 */
export type Point = Geometry;
/**
 * For type `MultiPoint`, the `coordinates` member must be an array of positions.
 */
export type MultiPointGeometry = Geometry;
/**
 * For type `LineString`, the `coordinates` member must be an array of two or more positions.
 *
 * A LinearRing is closed LineString with 4 or more positions. The first and last positions are equivalent (they represent equivalent points). Though a LinearRing is not explicitly represented as a GeoJSON geometry type, it is referred to in the Polygon geometry type definition.
 */
export type LineString = Geometry;
/**
 * For type `MultiLineString`, the `coordinates` member must be an array of LineString coordinate arrays.
 */
export type MultiLineString = Geometry;
/**
 * For type `Polygon`, the `coordinates` member must be an array of LinearRing coordinate arrays. For Polygons with multiple rings, the first must be the exterior ring and any others must be interior rings or holes.
 */
export type Polygon = Geometry;
/**
 * For type `MultiPolygon`, the `coordinates` member must be an array of Polygon coordinate arrays.
 */
export type MultiPolygonGeometry = Geometry;
/**
 * A GeoJSON object with type `GeometryCollection` is a geometry object which represents a collection of geometry objects.
 *
 * A geometry collection must have a member with the name `geometries`. The value corresponding to `geometries` is an array. Each element in this array is a GeoJSON geometry object.
 */
export type GeometryCollection = Geometry;
export type Geometry1 = Geometry | null;
export type Properties = {
  [k: string]: unknown;
} | null;
export type Features = Feature[];

/**
 * A geometry is a GeoJSON object where the type member's value is one of the following strings: `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`, or `GeometryCollection`.
 */
export interface Geometry {
  type?: "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection";
  [k: string]: unknown;
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
  id?: unknown;
  [k: string]: unknown;
}
/**
 * A GeoJSON object with the type `FeatureCollection` is a feature collection object.
 *
 * An object of type `FeatureCollection` must have a member with the name `features`. The value corresponding to `features` is an array. Each element in the array is a feature object as defined above.
 */
export interface FeatureCollection {
  type?: "FeatureCollection";
  features: Features;
  [k: string]: unknown;
}
