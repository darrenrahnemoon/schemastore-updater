/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JSONSchemaForCoffeelintJsonFiles {
  /**
   * This rule checks to see that there is spacing before and after the arrow operator that declares a function. [default level: ignore]
   */
  arrow_spacing?: Base;
  /**
   * This rule checks to see that there is the proper spacing inside curly braces. The spacing amount is specified by `spaces`. The spacing amount for empty objects is specified by `empty_object_spaces`. [default level: ignore]
   */
  braces_spacing?: Base;
  /**
   * This rule mandates that all class names are CamelCased. Camel casing class names is a generally accepted way of distinguishing constructor functions - which require the `new` prefix to behave properly - from plain old functions. [default level: error]
   */
  camel_case_classes?: Base;
  /**
   * [default level: error]
   */
  coffeescript_error?: Base;
  /**
   * This rule checks to see that there is spacing before and after the colon in a colon assignment (i.e., classes, objects). [default level: ignore]
   */
  colon_assignment_spacing?: Base;
  /**
   * Examine the complexity of your application. [default level: ignore]
   */
  cyclomatic_complexity?: Base;
  /**
   * Prevents defining duplicate keys in object literals and classes. [default level: error]
   */
  duplicate_key?: Base;
  /**
   * Requires constructors with no parameters to include the parens. [default level: ignore]
   */
  empty_constructor_needs_parens?: Base;
  /**
   * This rule makes sure that parentheses are around comprehensions. [default level: warn]
   */
  ensure_comprehensions?: Base;
  /**
   * Checks that the file ends with a single newline. [default level: ignore]
   */
  eol_last?: Base;
  /**
   * This rule imposes a standard number of spaces to be used for indentation. Since whitespace is significant in CoffeeScript, it's critical that a project chooses a standard indentation format and stays consistent. Other roads lead to darkness. [default level: error]
   */
  indentation?: Base;
  /**
   * This rule ensures your project uses only windows or unix line endings. [default level: ignore]
   */
  line_endings?: Base;
  /**
   * This rule imposes a maximum line length on your code. [default level: error]
   */
  max_line_length?: Base;
  /**
   * Warns when you use `this` inside a function that wasn't defined with a fat arrow. This rule does not apply to methods defined in a class, since they have `this` bound to the class instance (or the class itself, for class methods). [default level: ignore]
   */
  missing_fat_arrows?: Base;
  /**
   * Checks the number of newlines between classes and other code. [default level: ignore]
   */
  newlines_after_classes?: Base;
  /**
   * Backticks allow snippets of JavaScript to be embedded in CoffeeScript. While some folks consider backticks useful in a few niche circumstances, they should be avoided because so none of JavaScript's 'bad parts', like with and eval, sneak into CoffeeScript. [default level: error]
   */
  no_backticks?: Base;
  /**
   * This rule detects the `debugger` statement. [default level: warn]
   */
  no_debugger?: Base;
  /**
   * Disallows declaring empty functions. The goal of this rule is that unintentional empty callbacks can be detected. [default level: ignore]
   */
  no_empty_functions?: Base;
  /**
   * This rule prohibits empty parameter lists in function definitions. [default level: ignore]
   */
  no_empty_param_list?: Base;
  /**
   * This rule prohibits implicit braces when declaring object literals. Implicit braces can make code more difficult to understand, especially when used in combination with optional parenthesis. [default level: ignore]
   */
  no_implicit_braces?: Base;
  /**
   * This rule prohibits implicit parens on function calls. [default level: ignore]
   */
  no_implicit_parens?: Base;
  /**
   * This rule prohibits string interpolation in a single quoted string. [default level: ignore]
   */
  no_interpolation_in_single_quotes?: Base;
  /**
   * This rule warns about nested string interpolation, as it tends to make code harder to read and understand. [default level: warn]
   */
  no_nested_string_interpolation?: Base;
  /**
   * This rule forbids the increment and decrement arithmetic operators. Some people believe the `++` and `--` to be cryptic and the cause of bugs due to misunderstandings of their precedence rules. [default level: ignore]
   */
  no_plusplus?: Base;
  /**
   * Warns when you use the fat arrow for a private function inside a class definition scope. It is not necessary and it does not do anything. [default level: warn]
   */
  no_private_function_fat_arrows?: Base;
  /**
   * This rule checks that no stand alone `@` are in use, they are discouraged. [default level: ignore]
   */
  no_stand_alone_at?: Base;
  /**
   * This rule forbids tabs in indentation. Enough said. [default level: error]
   */
  no_tabs?: Base;
  /**
   * This rule prohibits `this`. Use `@` instead. [default level: ignore]
   */
  no_this?: Base;
  /**
   * This rule forbids throwing string literals or interpolations. While JavaScript (and CoffeeScript by extension) allow any expression to be thrown, it is best to only throw `Error` objects, because they contain valuable debugging information like the stack trace. [default level: error]
   */
  no_throwing_strings?: Base;
  /**
   * This rule prohibits trailing semicolons, since they are needless cruft in CoffeeScript. [default level: error]
   */
  no_trailing_semicolons?: Base;
  /**
   * This rule forbids trailing whitespace in your code, since it is needless cruft. [default level: error]
   */
  no_trailing_whitespace?: Base;
  /**
   * This rule prohibits double quotes unless string interpolation is used or the string contains single quotes. [default level: ignore]
   */
  no_unnecessary_double_quotes?: Base;
  /**
   * Disallows defining functions with fat arrows when `this` is not used within the function.  [default level: warn]
   */
  no_unnecessary_fat_arrows?: Base;
  /**
   * Requires constructors with parameters to include the parens. [default level: ignore]
   */
  non_empty_constructor_needs_parens?: Base;
  /**
   * This rule prohibits `&&`, `||`, `==`, `!=` and `!`. Use `and`, `or`, `is`, `isnt`, and `not` instead. `!!` (for converting to a boolean) is ignored. [default level: ignore]
   */
  prefer_english_operator?: Base;
  /**
   * This rule enforces that operators have space around them.  [default level: ignore]
   */
  space_operators?: Base;
  /**
   * This rule checks to make sure you have a space after commas. [default level: ignore]
   */
  spacing_after_comma?: Base;
  /**
   * This rule detects when changes are made by transform function, and warns that line numbers are probably incorrect. [default level: warn]
   */
  transform_messes_up_line_numbers?: Base;
  [k: string]: unknown;
}
export interface Base {
  /**
   * Determines the error level
   */
  level?: "error" | "warn" | "ignore";
  [k: string]: unknown;
}
