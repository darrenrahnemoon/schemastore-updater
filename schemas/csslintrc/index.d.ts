/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * CSS Lint rule
 *
 * 'false' means rule is off
 * 'true' means it is a warning
 * '2' means the rule is an error
 */
export type Rule = 2 | true | false;

export interface JSONSchemaForCSSLintConfigurationFiles {
  "adjoining-classes"?: Rule;
  "box-model"?: Rule;
  "box-sizing"?: Rule;
  "bulletproof-font-face"?: Rule;
  "compatible-vendor-prefixes"?: Rule;
  "display-property-grouping"?: Rule;
  "duplicate-background-images"?: Rule;
  "duplicate-properties"?: Rule;
  "empty-rules"?: Rule;
  "fallback-colors"?: Rule;
  floats?: Rule;
  "font-faces"?: Rule;
  "font-sizes"?: Rule;
  gradients?: Rule;
  ids?: Rule;
  import?: Rule;
  important?: Rule;
  "known-properties"?: Rule;
  "outline-none"?: Rule;
  "overqualified-elements"?: Rule;
  "qualified-headings"?: Rule;
  "regex-selectors"?: Rule;
  shorthand?: Rule;
  "star-property-hack"?: Rule;
  "text-indent"?: Rule;
  "underscore-property-hack"?: Rule;
  "unique-headings"?: Rule;
  "universal-selector"?: Rule;
  "unqualified-attributes"?: Rule;
  "vendor-prefix"?: Rule;
  "zero-units"?: Rule;
  [k: string]: any;
}
