/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ResumeSchema {
  basics?: {
    name?: string;
    /**
     * e.g. Web Developer
     */
    label?: string;
    /**
     * URL (as per RFC 3986) to a picture in JPEG or PNG format
     */
    picture?: string;
    /**
     * e.g. thomas@gmail.com
     */
    email?: string;
    /**
     * Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
     */
    phone?: string;
    /**
     * URL (as per RFC 3986) to your website, e.g. personal homepage
     */
    url?: string;
    /**
     * Write a short 2-3 sentence biography about yourself
     */
    summary?: string;
    location?: {
      /**
       * To add multiple address lines, use
       * . For example, 1234 Glücklichkeit Straße
       * Hinterhaus 5. Etage li.
       */
      address?: string;
      postalCode?: string;
      city?: string;
      /**
       * code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
       */
      countryCode?: string;
      /**
       * The general region where you live. Can be a US state, or a province, for instance.
       */
      region?: string;
      [k: string]: any;
    };
    /**
     * Specify any number of social networks that you participate in
     */
    profiles?: {
      /**
       * e.g. Facebook or Twitter
       */
      network?: string;
      /**
       * e.g. neutralthoughts
       */
      username?: string;
      /**
       * e.g. http://twitter.com/neutralthoughts
       */
      url?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  work?: {
    /**
     * e.g. Facebook
     */
    company?: string;
    /**
     * e.g. Software Engineer
     */
    position?: string;
    /**
     * e.g. http://facebook.com
     */
    url?: string;
    /**
     * resume.json uses the ISO 8601 date standard e.g. 2014-06-29
     */
    startDate?: string;
    /**
     * e.g. 2012-06-29
     */
    endDate?: string;
    /**
     * Give an overview of your responsibilities at the company
     */
    summary?: string;
    /**
     * Specify multiple accomplishments
     */
    highlights?: string[];
    [k: string]: any;
  }[];
  volunteer?: {
    /**
     * e.g. Facebook
     */
    organization?: string;
    /**
     * e.g. Software Engineer
     */
    position?: string;
    /**
     * e.g. http://facebook.com
     */
    url?: string;
    /**
     * resume.json uses the ISO 8601 date standard e.g. 2014-06-29
     */
    startDate?: string;
    /**
     * e.g. 2012-06-29
     */
    endDate?: string;
    /**
     * Give an overview of your responsibilities at the company
     */
    summary?: string;
    /**
     * Specify multiple accomplishments
     */
    highlights?: string[];
    [k: string]: any;
  }[];
  education?: {
    /**
     * e.g. Massachusetts Institute of Technology
     */
    institution?: string;
    /**
     * e.g. Arts
     */
    area?: string;
    /**
     * e.g. Bachelor
     */
    studyType?: string;
    /**
     * e.g. 2014-06-29
     */
    startDate?: string;
    /**
     * e.g. 2012-06-29
     */
    endDate?: string;
    /**
     * grade point average, e.g. 3.67/4.0
     */
    gpa?: string;
    /**
     * List notable courses/subjects
     */
    courses?: string[];
    [k: string]: any;
  }[];
  /**
   * Specify any awards you have received throughout your professional career
   */
  awards?: {
    /**
     * e.g. One of the 100 greatest minds of the century
     */
    title?: string;
    /**
     * e.g. 1989-06-12
     */
    date?: string;
    /**
     * e.g. Time Magazine
     */
    awarder?: string;
    /**
     * e.g. Received for my work with Quantum Physics
     */
    summary?: string;
    [k: string]: any;
  }[];
  /**
   * Specify your publications through your career
   */
  publications?: {
    /**
     * e.g. The World Wide Web
     */
    name?: string;
    /**
     * e.g. IEEE, Computer Magazine
     */
    publisher?: string;
    /**
     * e.g. 1990-08-01
     */
    releaseDate?: string;
    /**
     * e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
     */
    url?: string;
    /**
     * Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.
     */
    summary?: string;
    [k: string]: any;
  }[];
  /**
   * List out your professional skill-set
   */
  skills?: {
    /**
     * e.g. Web Development
     */
    name?: string;
    /**
     * e.g. Master
     */
    level?: string;
    /**
     * List some keywords pertaining to this skill
     */
    keywords?: string[];
    [k: string]: any;
  }[];
  /**
   * List any other languages you speak
   */
  languages?: {
    /**
     * e.g. English, Spanish
     */
    name?: string;
    /**
     * e.g. Fluent, Beginner
     */
    level?: string;
    [k: string]: any;
  }[];
  interests?: {
    /**
     * e.g. Philosophy
     */
    name?: string;
    keywords?: string[];
    [k: string]: any;
  }[];
  /**
   * List references you have received
   */
  references?: {
    /**
     * e.g. Timothy Cook
     */
    name?: string;
    /**
     * e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.
     */
    reference?: string;
    [k: string]: any;
  }[];
}
