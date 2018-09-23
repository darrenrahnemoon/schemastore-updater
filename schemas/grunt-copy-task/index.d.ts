/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JsonSchemaForTheGruntCleanTask {
  options?: Options;
  [k: string]: (
    | {
        files?:
          | {
              [k: string]: string[];
            }
          | {
              /**
               * Must be set to true to use properties other than 'src' and 'dest'
               */
              expand?: boolean;
              /**
               * All 'src' matches are relative to (but don't include) this path
               */
              cwd?: string;
              /**
               * Destination path prefix.
               */
              dest?: string;
              /**
               * Replace any existing extension with this value in generated 'dest' paths.
               */
              ext?: string;
              /**
               * Used to indicate where the period indicating the extension is located.
               */
              extDot?: "first" | "last";
              /**
               * The 'filter' property can help you target files with a greater level of detail
               */
              filter?:
                | "isFile"
                | "isDirectory"
                | "isBlockDevice"
                | "isCharacterDevice"
                | "isSymbolicLink"
                | "isFIFO"
                | "isSocket";
              /**
               * Remove all path parts from generated 'dest' paths
               */
              flatten?: boolean;
              /**
               * If set, patterns without slashes will be matched against the basename of the path if it contains slashes. For example, 'a?b' would match the path '/xyz/123/acb', but not '/xyz/acb/123'.
               */
              matchBase?: boolean;
              /**
               * If set to 'true' then the operation will include non-matching patterns. Combined with grunt's '--verbose' flag, this option can help debug file path issues.
               */
              nonull?: boolean;
              /**
               * This function is called for each matched 'src' file, (after extension renaming and flattening).
               */
              rename?: string;
              /**
               * Pattern(s) to match, relative to the 'cwd'.
               */
              src: string[];
              [k: string]: any;
            }[];
        [k: string]: any;
      }
    | {
        /**
         * Must be set to true to use properties other than 'src' and 'dest'
         */
        expand?: boolean;
        /**
         * All 'src' matches are relative to (but don't include) this path
         */
        cwd?: string;
        /**
         * Destination path prefix.
         */
        dest?: string;
        /**
         * Replace any existing extension with this value in generated 'dest' paths.
         */
        ext?: string;
        /**
         * Used to indicate where the period indicating the extension is located.
         */
        extDot?: "first" | "last";
        /**
         * The 'filter' property can help you target files with a greater level of detail
         */
        filter?:
          | "isFile"
          | "isDirectory"
          | "isBlockDevice"
          | "isCharacterDevice"
          | "isSymbolicLink"
          | "isFIFO"
          | "isSocket";
        /**
         * Remove all path parts from generated 'dest' paths
         */
        flatten?: boolean;
        /**
         * If set, patterns without slashes will be matched against the basename of the path if it contains slashes. For example, 'a?b' would match the path '/xyz/123/acb', but not '/xyz/acb/123'.
         */
        matchBase?: boolean;
        /**
         * If set to 'true' then the operation will include non-matching patterns. Combined with grunt's '--verbose' flag, this option can help debug file path issues.
         */
        nonull?: boolean;
        /**
         * This function is called for each matched 'src' file, (after extension renaming and flattening).
         */
        rename?: string;
        /**
         * Pattern(s) to match, relative to the 'cwd'.
         */
        src: string[];
        [k: string]: any;
      }) & {
    options?: Options;
    [k: string]: any;
  };
}
/**
 * Set the options for grunt-contrib-copy
 */
export interface Options {
  /**
   * This option is passed to grunt.file.copy as an advanced way to control which file contents are processed.
   */
  noProcess?: string;
  /**
   * The file encoding to copy files with.
   */
  encoding?: string;
  /**
   * Whether to copy or set the existing file permissions. Set to true to copy the existing file permissions. Or set to the mode, i.e.: 0644, that copied files will be set to.
   */
  mode?: boolean | number;
  [k: string]: any;
}