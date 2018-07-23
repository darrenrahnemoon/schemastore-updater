/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SchemaForPrettierrc = OptionsDefinition & OverridesDefinition;

export interface OptionsDefinition {
  /**
   * Include parentheses around a sole arrow function parameter.
   */
  arrowParens?: "avoid" | "always";
  /**
   * Print spaces between brackets.
   */
  bracketSpacing?: boolean;
  /**
   * Print (to stderr) where a cursor at the given position would move to after formatting.
   * This option cannot be used with --range-start and --range-end.
   */
  cursorOffset?: number;
  /**
   * Specify the input filepath. This will be used to do parser inference.
   */
  filepath?: string;
  /**
   * Insert @format pragma into file's first docblock comment.
   */
  insertPragma?: boolean;
  /**
   * Put > on the last line instead of at a new line.
   */
  jsxBracketSameLine?: boolean;
  /**
   * Which parser to use.
   */
  parser?: "flow" | "babylon" | "typescript" | "css" | "less" | "scss" | "json" | "graphql" | "markdown" | "vue";
  /**
   * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
   */
  plugins?: string[];
  /**
   * The line length where Prettier will try wrap.
   */
  printWidth?: number;
  /**
   * How to wrap prose. (markdown)
   */
  proseWrap?: "always" | "never" | "preserve";
  /**
   * Format code ending at a given character offset (exclusive).
   * The range will extend forwards to the end of the selected statement.
   * This option cannot be used with --cursor-offset.
   */
  rangeEnd?: number;
  /**
   * Format code starting at a given character offset.
   * The range will extend backwards to the start of the first line containing the selected statement.
   * This option cannot be used with --cursor-offset.
   */
  rangeStart?: number;
  /**
   * Require either '@prettier' or '@format' to be present in the file's first docblock comment
   * in order for it to be formatted.
   */
  requirePragma?: boolean;
  /**
   * Print semicolons.
   */
  semi?: boolean;
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote?: boolean;
  /**
   * Number of spaces per indentation level.
   */
  tabWidth?: number;
  /**
   * Print trailing commas wherever possible when multi-line.
   */
  trailingComma?: "none" | "es5" | "all";
  /**
   * Indent with tabs instead of spaces.
   */
  useTabs?: boolean;
  [k: string]: any;
}
export interface OverridesDefinition {
  /**
   * Provide a list of patterns to override prettier configuration.
   */
  overrides?: {
    /**
     * Include these files in this override.
     */
    files: string | string[];
    /**
     * Exclude these files from this override.
     */
    excludeFiles?: string | string[];
    /**
     * The options to apply for this override.
     */
    options?: {
      /**
       * Include parentheses around a sole arrow function parameter.
       */
      arrowParens?: "avoid" | "always";
      /**
       * Print spaces between brackets.
       */
      bracketSpacing?: boolean;
      /**
       * Print (to stderr) where a cursor at the given position would move to after formatting.
       * This option cannot be used with --range-start and --range-end.
       */
      cursorOffset?: number;
      /**
       * Specify the input filepath. This will be used to do parser inference.
       */
      filepath?: string;
      /**
       * Insert @format pragma into file's first docblock comment.
       */
      insertPragma?: boolean;
      /**
       * Put > on the last line instead of at a new line.
       */
      jsxBracketSameLine?: boolean;
      /**
       * Which parser to use.
       */
      parser?: "flow" | "babylon" | "typescript" | "css" | "less" | "scss" | "json" | "graphql" | "markdown" | "vue";
      /**
       * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
       */
      plugins?: string[];
      /**
       * The line length where Prettier will try wrap.
       */
      printWidth?: number;
      /**
       * How to wrap prose. (markdown)
       */
      proseWrap?: "always" | "never" | "preserve";
      /**
       * Format code ending at a given character offset (exclusive).
       * The range will extend forwards to the end of the selected statement.
       * This option cannot be used with --cursor-offset.
       */
      rangeEnd?: number;
      /**
       * Format code starting at a given character offset.
       * The range will extend backwards to the start of the first line containing the selected statement.
       * This option cannot be used with --cursor-offset.
       */
      rangeStart?: number;
      /**
       * Require either '@prettier' or '@format' to be present in the file's first docblock comment
       * in order for it to be formatted.
       */
      requirePragma?: boolean;
      /**
       * Print semicolons.
       */
      semi?: boolean;
      /**
       * Use single quotes instead of double quotes.
       */
      singleQuote?: boolean;
      /**
       * Number of spaces per indentation level.
       */
      tabWidth?: number;
      /**
       * Print trailing commas wherever possible when multi-line.
       */
      trailingComma?: "none" | "es5" | "all";
      /**
       * Indent with tabs instead of spaces.
       */
      useTabs?: boolean;
      [k: string]: any;
    };
  }[];
  [k: string]: any;
}
