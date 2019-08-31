/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Layout =
  | "header"
  | "footer"
  | "diff"
  | "file"
  | "files"
  | "flag"
  | "flags"
  | "reach"
  | "sunburst"
  | "uncovered";

/**
 * Schema for codecov.yml files.
 */
export interface JSONSchemaForCodecovConfigurationFiles {
  /**
   * See https://docs.codecov.io/docs/codecov-yaml for details
   */
  codecov?: {
    url?: string;
    slug?: string;
    /**
     * Team bot. See https://docs.codecov.io/docs/team-bot for details
     */
    bot?: string;
    branch?: string;
    /**
     * Detecting CI services. See https://docs.codecov.io/docs/detecting-ci-services for details.
     */
    ci?: string[];
    assume_all_flags?: boolean;
    strict_yaml_branch?: string;
    max_report_age?: string | number | boolean;
    disable_default_path_fixes?: boolean;
    require_ci_to_pass?: boolean;
    allow_pseudo_compare?: boolean;
    archive?: {
      uploads?: boolean;
      [k: string]: any;
    };
    notify?: {
      after_n_builds?: number;
      countdown?: number;
      delay?: number;
      wait_for_ci?: boolean;
      [k: string]: any;
    };
    ui?: {
      hide_density?: string[];
      hide_complexity?: string[];
      hide_contextual?: boolean;
      hide_sunburst?: boolean;
      hide_search?: boolean;
      [k: string]: any;
    };
    [k: string]: any;
  };
  /**
   * Coverage configuration. See https://docs.codecov.io/docs/coverage-configuration for details.
   */
  coverage?: {
    precision?: number;
    round?: "down" | "up" | "nearest";
    range?: string;
    /**
     * Notifications. See https://docs.codecov.io/docs/notifications for details.
     */
    notify?: {
      irc?: {
        url?: string;
        branches?: string;
        threshold?: string;
        message?: string;
        flags?: string;
        base?: "parent" | "pr" | "auto";
        only_pulls?: boolean;
        paths?: string[];
        channel?: string;
        password?: string;
        nickserv_password?: string;
        notice?: boolean;
        [k: string]: any;
      };
      /**
       * Slack. See https://docs.codecov.io/docs/notifications#section-slack for details.
       */
      slack?: {
        url?: string;
        branches?: string;
        threshold?: string;
        message?: string;
        flags?: string;
        base?: "parent" | "pr" | "auto";
        only_pulls?: boolean;
        paths?: string[];
        attachments?: Layout;
        [k: string]: any;
      };
      /**
       * Gitter. See https://docs.codecov.io/docs/notifications#section-gitter for details.
       */
      gitter?: {
        url?: string;
        branches?: string;
        threshold?: string;
        message?: string;
        flags?: string;
        base?: "parent" | "pr" | "auto";
        only_pulls?: boolean;
        paths?: string[];
        [k: string]: any;
      };
      /**
       * Hipchat. See https://docs.codecov.io/docs/notifications#section-hipchat for details.
       */
      hipchat?: {
        url?: string;
        branches?: string;
        threshold?: string;
        message?: string;
        flags?: string;
        base?: "parent" | "pr" | "auto";
        only_pulls?: boolean;
        paths?: string[];
        card?: boolean;
        notify?: boolean;
        [k: string]: any;
      };
      webhook?: {
        url?: string;
        branches?: string;
        threshold?: string;
        message?: string;
        flags?: string;
        base?: "parent" | "pr" | "auto";
        only_pulls?: boolean;
        paths?: string[];
        [k: string]: any;
      };
      email?: {
        url?: string;
        branches?: string;
        threshold?: string;
        message?: string;
        flags?: string;
        base?: "parent" | "pr" | "auto";
        only_pulls?: boolean;
        paths?: string[];
        layout?: Layout;
        "+to"?: string[];
        [k: string]: any;
      };
      [k: string]: any;
    };
    /**
     * Commit status. See https://docs.codecov.io/docs/commit-status for details.
     */
    status?:
      | boolean
      | {
          [k: string]: any;
        };
    [k: string]: any;
  };
  /**
   * Ignoring paths. see https://docs.codecov.io/docs/ignoring-paths for details.
   */
  ignore?: string[];
  /**
   * Fixing paths. See https://docs.codecov.io/docs/fixing-paths for details.
   */
  fixes?: string[];
  /**
   * Flags. See https://docs.codecov.io/docs/flags for details.
   */
  flags?: Flag[];
  /**
   * Pull request comments. See https://docs.codecov.io/docs/pull-request-comments for details.
   */
  comment?: {
    layout?: Layout;
    require_changes?: boolean;
    require_base?: boolean;
    require_head?: boolean;
    branches?: string[];
    behavior?: "default" | "once" | "new" | "spammy";
    flags?: Flag[];
    paths?: string[];
    [k: string]: any;
  };
  [k: string]: any;
}
export interface Flag {
  joined?: boolean;
  required?: boolean;
  ignore?: string[];
  paths?: string[];
  assume?: string[];
  [k: string]: any;
}
