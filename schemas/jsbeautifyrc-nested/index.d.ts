/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type JsonSchemaForBeautifyrc = {
  /**
   * Indent size. [JS,CSS,HTML]
   */
  indent_size?: number;
  /**
   * Indentation character. [JS,CSS,HTML]
   */
  indent_char?: string;
  /**
   * Character(s) to use as line terminators. [JS,CSS,HTML]
   */
  eol?: string;
  /**
   * Indent with tabs, overrides 'indent_size' and 'indent_char' [JS,CSS,HTML]
   */
  indent_with_tabs?: boolean;
  /**
   * Ensure newline at end of file. [JS,CSS,HTML]
   */
  end_with_newline?: boolean;
  /**
   * Preserve line-breaks. [JS,CSS,HTML]
   */
  preserve_newlines?: boolean;
  [k: string]: any;
} & {
  /**
   * Number of line-breaks to be preserved in one chunk. [JS,HTML]
   */
  max_preserve_newlines?: number;
  /**
   * [collapse|expand|end-expand|none][,preserve-inline]  [JS,HTML]
   */
  brace_style?:
    | "collapse"
    | "expand"
    | "end-expand"
    | "none"
    | "collapse,preserve-inline"
    | "expand,preserve-inline"
    | "end-expand,preserve-inline"
    | "none,preserve-inline";
  /**
   * Wrap lines at next opportunity after N characters. [JS,HTML]
   */
  wrap_line_length?: number;
  [k: string]: any;
} & {
  /**
   * Add a newline between multiple selectors. [CSS]
   */
  selector_separator_newline?: boolean;
  /**
   * Add a newline between CSS rules. [CSS]
   */
  newline_between_rules?: boolean;
  /**
   * (Deprecated: use space_around_combinator) [CSS]
   */
  space_around_selector_separator?: boolean;
  /**
   * Ensure space around selector separators (>+~). [CSS]
   */
  space_around_combinator?: boolean;
  [k: string]: any;
} & {
  /**
   * HTLM void elements - aka self-closing tags. [HTML]
   */
  void_elements?: string[];
  /**
   * Wrap attributes to new lines. [HTML]
   */
  wrap_attributes?: "auto" | "force" | "force-aligned" | "force-expand-multiline";
  /**
   * Indent wrapped attributes to after N characters. Defaults to 'indent_size'. [HTML]
   */
  wrap_attributes_indent_size?: number;
  /**
   * Indent <head> and <body> sections. [HTML]
   */
  indent_inner_html?: boolean;
  /**
   * [keep|separate|normal] [HTML]
   */
  indent_scripts?: "keep" | "separate" | "normal";
  /**
   * List of tags that should not be reformatted. [HTML]
   */
  unformatted?: string[];
  /**
   * List of tags whose content should not be reformatted. [HTML]
   */
  content_unformatted?: string[];
  /**
   * List of tags that should have an extra newline before them. [HTML]
   */
  extra_liners?: string[];
  /**
   * Indent elements within html <body> element. [HTML]
   */
  indent_body_inner_html?: boolean;
  /**
   * Indent elements within html <head> element. [HTML]
   */
  indent_head_inner_html?: boolean;
  /**
   * format and indent {{#foo}} and {{/foo}}. [HTML]
   */
  indent_handlebars?: boolean;
  [k: string]: any;
} & {
  /**
   * Initial indentation level. [JS]
   */
  indent_level?: number;
  /**
   * Add padding spaces within parentheses, ie. f( a, b ). [JS]
   */
  space_in_paren?: boolean;
  /**
   * Leave space in empty parentheses, ie. f( ). [JS]
   */
  space_in_empty_paren?: boolean;
  /**
   * Enable jslint-stricter mode. (Forces 'space_after_anon_function') [JS]
   */
  jslint_happy?: boolean;
  /**
   * Add a space before an anonymous function's parens, ie. function (). [JS]
   */
  space_after_anon_function?: boolean;
  /**
   * Break chained method calls across subsequent lines. [JS]
   */
  break_chained_methods?: boolean;
  /**
   * Preserve array indentation. [JS]
   */
  keep_array_indentation?: boolean;
  /**
   * Preserve function indentation. [JS]
   */
  keep_function_indentation?: boolean;
  /**
   * Ensure a space before conditional statement. [JS]
   */
  space_before_conditional?: boolean;
  /**
   * Decode printable characters encoded in xNN notation. [JS]
   */
  unescape_strings?: boolean;
  /**
   * Put commas at the beginning of new line instead of end. [JS]
   */
  comma_first?: boolean;
  /**
   * Move operators to before or after a new line, or keep as is. [JS]
   */
  operator_position?: "before-newline" | "after-newline" | "preserve-newline";
  /**
   * Pass E4X xml literals through untouched. [JS]
   */
  e4x?: boolean;
  /**
   * Unindent chained methods. [JS]
   */
  unindent_chained_methods?: boolean;
  [k: string]: any;
} & {
  css?: {
    /**
     * Indent size. [JS,CSS,HTML]
     */
    indent_size?: number;
    /**
     * Indentation character. [JS,CSS,HTML]
     */
    indent_char?: string;
    /**
     * Character(s) to use as line terminators. [JS,CSS,HTML]
     */
    eol?: string;
    /**
     * Indent with tabs, overrides 'indent_size' and 'indent_char' [JS,CSS,HTML]
     */
    indent_with_tabs?: boolean;
    /**
     * Ensure newline at end of file. [JS,CSS,HTML]
     */
    end_with_newline?: boolean;
    /**
     * Preserve line-breaks. [JS,CSS,HTML]
     */
    preserve_newlines?: boolean;
    [k: string]: any;
  } & {
    /**
     * Add a newline between multiple selectors. [CSS]
     */
    selector_separator_newline?: boolean;
    /**
     * Add a newline between CSS rules. [CSS]
     */
    newline_between_rules?: boolean;
    /**
     * (Deprecated: use space_around_combinator) [CSS]
     */
    space_around_selector_separator?: boolean;
    /**
     * Ensure space around selector separators (>+~). [CSS]
     */
    space_around_combinator?: boolean;
    [k: string]: any;
  };
  js?: {
    /**
     * Indent size. [JS,CSS,HTML]
     */
    indent_size?: number;
    /**
     * Indentation character. [JS,CSS,HTML]
     */
    indent_char?: string;
    /**
     * Character(s) to use as line terminators. [JS,CSS,HTML]
     */
    eol?: string;
    /**
     * Indent with tabs, overrides 'indent_size' and 'indent_char' [JS,CSS,HTML]
     */
    indent_with_tabs?: boolean;
    /**
     * Ensure newline at end of file. [JS,CSS,HTML]
     */
    end_with_newline?: boolean;
    /**
     * Preserve line-breaks. [JS,CSS,HTML]
     */
    preserve_newlines?: boolean;
    [k: string]: any;
  } & {
    /**
     * Number of line-breaks to be preserved in one chunk. [JS,HTML]
     */
    max_preserve_newlines?: number;
    /**
     * [collapse|expand|end-expand|none][,preserve-inline]  [JS,HTML]
     */
    brace_style?:
      | "collapse"
      | "expand"
      | "end-expand"
      | "none"
      | "collapse,preserve-inline"
      | "expand,preserve-inline"
      | "end-expand,preserve-inline"
      | "none,preserve-inline";
    /**
     * Wrap lines at next opportunity after N characters. [JS,HTML]
     */
    wrap_line_length?: number;
    [k: string]: any;
  } & {
    /**
     * Initial indentation level. [JS]
     */
    indent_level?: number;
    /**
     * Add padding spaces within parentheses, ie. f( a, b ). [JS]
     */
    space_in_paren?: boolean;
    /**
     * Leave space in empty parentheses, ie. f( ). [JS]
     */
    space_in_empty_paren?: boolean;
    /**
     * Enable jslint-stricter mode. (Forces 'space_after_anon_function') [JS]
     */
    jslint_happy?: boolean;
    /**
     * Add a space before an anonymous function's parens, ie. function (). [JS]
     */
    space_after_anon_function?: boolean;
    /**
     * Break chained method calls across subsequent lines. [JS]
     */
    break_chained_methods?: boolean;
    /**
     * Preserve array indentation. [JS]
     */
    keep_array_indentation?: boolean;
    /**
     * Preserve function indentation. [JS]
     */
    keep_function_indentation?: boolean;
    /**
     * Ensure a space before conditional statement. [JS]
     */
    space_before_conditional?: boolean;
    /**
     * Decode printable characters encoded in xNN notation. [JS]
     */
    unescape_strings?: boolean;
    /**
     * Put commas at the beginning of new line instead of end. [JS]
     */
    comma_first?: boolean;
    /**
     * Move operators to before or after a new line, or keep as is. [JS]
     */
    operator_position?: "before-newline" | "after-newline" | "preserve-newline";
    /**
     * Pass E4X xml literals through untouched. [JS]
     */
    e4x?: boolean;
    /**
     * Unindent chained methods. [JS]
     */
    unindent_chained_methods?: boolean;
    [k: string]: any;
  };
  html?: {
    /**
     * Indent size. [JS,CSS,HTML]
     */
    indent_size?: number;
    /**
     * Indentation character. [JS,CSS,HTML]
     */
    indent_char?: string;
    /**
     * Character(s) to use as line terminators. [JS,CSS,HTML]
     */
    eol?: string;
    /**
     * Indent with tabs, overrides 'indent_size' and 'indent_char' [JS,CSS,HTML]
     */
    indent_with_tabs?: boolean;
    /**
     * Ensure newline at end of file. [JS,CSS,HTML]
     */
    end_with_newline?: boolean;
    /**
     * Preserve line-breaks. [JS,CSS,HTML]
     */
    preserve_newlines?: boolean;
    [k: string]: any;
  } & {
    /**
     * Number of line-breaks to be preserved in one chunk. [JS,HTML]
     */
    max_preserve_newlines?: number;
    /**
     * [collapse|expand|end-expand|none][,preserve-inline]  [JS,HTML]
     */
    brace_style?:
      | "collapse"
      | "expand"
      | "end-expand"
      | "none"
      | "collapse,preserve-inline"
      | "expand,preserve-inline"
      | "end-expand,preserve-inline"
      | "none,preserve-inline";
    /**
     * Wrap lines at next opportunity after N characters. [JS,HTML]
     */
    wrap_line_length?: number;
    [k: string]: any;
  } & {
    /**
     * HTLM void elements - aka self-closing tags. [HTML]
     */
    void_elements?: string[];
    /**
     * Wrap attributes to new lines. [HTML]
     */
    wrap_attributes?: "auto" | "force" | "force-aligned" | "force-expand-multiline";
    /**
     * Indent wrapped attributes to after N characters. Defaults to 'indent_size'. [HTML]
     */
    wrap_attributes_indent_size?: number;
    /**
     * Indent <head> and <body> sections. [HTML]
     */
    indent_inner_html?: boolean;
    /**
     * [keep|separate|normal] [HTML]
     */
    indent_scripts?: "keep" | "separate" | "normal";
    /**
     * List of tags that should not be reformatted. [HTML]
     */
    unformatted?: string[];
    /**
     * List of tags whose content should not be reformatted. [HTML]
     */
    content_unformatted?: string[];
    /**
     * List of tags that should have an extra newline before them. [HTML]
     */
    extra_liners?: string[];
    /**
     * Indent elements within html <body> element. [HTML]
     */
    indent_body_inner_html?: boolean;
    /**
     * Indent elements within html <head> element. [HTML]
     */
    indent_head_inner_html?: boolean;
    /**
     * format and indent {{#foo}} and {{/foo}}. [HTML]
     */
    indent_handlebars?: boolean;
    [k: string]: any;
  };
  [k: string]: any;
};