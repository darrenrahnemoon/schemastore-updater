/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A conceptual entity or table in the conceptual model to which a linguistic schema object is bound
 */
export type ConceptualEntityBinding =
  | {
      /**
       * The name of the table.
       */
      Table: string;
    }
  | {
      /**
       * The name of the conceptual entity (e.g. table or pod)
       */
      ConceptualEntity: string;
    };
/**
 * A conceptual property, column, or measure in the conceptual model to which a linguistic schema object is bound.
 */
export type ConceptualPropertyBinding =
  | {
      /**
       * The name of the table containing the column or measure
       */
      Table: string;
      /**
       * The name of the property containing the variation set that contains the column or measure
       */
      VariationSource?: string;
      /**
       * The name of the variation set that contains the column or measure
       */
      VariationSet?: string;
      /**
       * The name of the column
       */
      Column: string;
    }
  | {
      /**
       * The name of the table containing the column or measure
       */
      Table: string;
      /**
       * The name of the property containing the variation set that contains the column or measure
       */
      VariationSource?: string;
      /**
       * The name of the variation set that contains the column or measure
       */
      VariationSet?: string;
      /**
       * The name of the measure
       */
      Measure: string;
    }
  | {
      /**
       * The name of the conceptual entity containing the property
       */
      ConceptualEntity: string;
      /**
       * The name of the property containing the variation set that contains the property
       */
      VariationSource?: string;
      /**
       * The name of the variation set that contains the property
       */
      VariationSet?: string;
      /**
       * The name of the property
       */
      ConceptualProperty: string;
    };
/**
 * A hierarchy in the conceptual model to which a linguistic schema object is bound
 */
export type HierarchyBinding =
  | {
      /**
       * The name of the table containing the hierarchy
       */
      Table: string;
      /**
       * The name of the property containing the variation set that contains the hierarchy
       */
      VariationSource?: string;
      /**
       * The name of the variation set that contains the hierarchy
       */
      VariationSet?: string;
      /**
       * The name of the hierarchy
       */
      Hierarchy: string;
    }
  | {
      /**
       * The name of the conceptual entity containing the hierarchy
       */
      ConceptualEntity: string;
      /**
       * The name of the property containing the variation set that contains the hierarchy
       */
      VariationSource?: string;
      /**
       * The name of the variation set that contains the hierarchy
       */
      VariationSet?: string;
      /**
       * The name of the hierarchy
       */
      Hierarchy: string;
    };
/**
 * A hierarchy level in the conceptual model to which a linguistic schema object is bound
 */
export type HierarchyLevelBinding =
  | {
      /**
       * The name of the table containing the hierarchy
       */
      Table: string;
      /**
       * The name of the property containing the variation set that contains the hierarchy
       */
      VariationSource?: string;
      /**
       * The name of the variation set that contains the hierarchy
       */
      VariationSet?: string;
      /**
       * The name of the hierarchy
       */
      Hierarchy: string;
      /**
       * The name of the hierarchy level
       */
      HierarchyLevel: string;
    }
  | {
      /**
       * The name of the conceptual entity containing the hierarchy
       */
      ConceptualEntity: string;
      /**
       * The name of the property containing the variation set that contains the hierarchy
       */
      VariationSource?: string;
      /**
       * The name of the variation set that contains the hierarchy
       */
      VariationSet?: string;
      /**
       * The name of the hierarchy
       */
      Hierarchy: string;
      /**
       * The name of the hierarchy level
       */
      HierarchyLevel: string;
    };
/**
 * A term in the linguistic schema
 */
export type Term = NonEmptyString | FullTerm;
export type NonEmptyString = string;
/**
 * Indicates the type of the creator of the object
 */
export type SourceType = "Default" | "User" | "Internal" | "External";
/**
 * A role in a linguistic relationship.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export type Role = Identifier | FullRole;
/**
 * Identifier for a linguistic schema object
 */
export type Identifier = string;
export type NullableTextValue = string | null;
export type NullableNumberValue = number | null;
export type NullableBooleanValue = boolean | null;
/**
 * One or more text values to use in a condition
 */
export type TextValues = NullableTextValue | [NullableTextValue];
/**
 * One or more number values to use in a condition
 */
export type NumberValues = NullableNumberValue | [NullableNumberValue];
/**
 * One or more Boolean values to use in a condition
 */
export type BooleanValues = NullableBooleanValue | [NullableBooleanValue];
/**
 * The phrasings on a linguistic relationship
 */
export type Phrasing =
  | AttributePhrasing
  | NamePhrasing
  | AdjectivePhrasing
  | DynamicAdjectivePhrasing
  | NounPhrasing
  | DynamicNounPhrasing
  | PrepositionPhrasing
  | VerbPhrasing;
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing = {
  Attribute: AttributePhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing = {
  Name: NamePhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing = {
  Adjective: AdjectivePhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * Properties of an adjective phrasing
 */
export type AdjectivePhrasingProperties =
  | {
      /**
       * The entity which is described via an adjective
       */
      Subject: Identifier | FullRoleReference;
      /**
       * Adjectives used to describe the Subject (with a high measurement)
       */
      Adjectives: [Term, ...Term[]];
      /**
       * Adjectives used to describe the Subject (with a low measurement)
       */
      Antonyms?: [Term, ...Term[]];
      /**
       * The entity which measures the extent to which the Adjectives apply
       */
      Measurement?: Identifier | FullRoleReference;
      /**
       * Additional prepositional phrases which apply to the phrasing
       */
      PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
    }
  | {
      /**
       * The entity which is described via an adjective
       */
      Subject: Identifier | FullRoleReference;
      /**
       * Adjectives used to describe the Subject (with a low measurement)
       */
      Antonyms: [Term, ...Term[]];
      /**
       * The entity which measures the extent to which the Adjectives apply
       */
      Measurement?: Identifier | FullRoleReference;
      /**
       * Additional prepositional phrases which apply to the phrasing
       */
      PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
    };
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing = {
  Noun: NounPhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing = {
  DynamicNoun: DynamicNounPhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing = {
  Preposition: PrepositionPhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing = {
  Verb: VerbPhrasingProperties;
  State?: any;
  Weight?: any;
  TemplateSchema?: any;
} & PhrasingProperties;
/**
 * This interface was referenced by `GlobalSubstitution`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export type GlobalSubstitutionProperties = string | FullGlobalSubstitutionProperties;
/**
 * An example utterance associated with the linguistic schema
 */
export type Example = NonEmptyString | FullExample;

/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema {
  /**
   * Version of LSDL
   */
  Version: "2.0.0";
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: "Default" | "Full" | "HighConfidence" | "None";
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: "Default" | "VeryHigh" | "High" | "Medium" | "Low";
  /**
   * Additional linguistic schemas referenced by objects within this linguistic schema
   */
  Namespaces?: {
    [k: string]: LsdlReference;
  };
  /**
   * The entities in the linguistic schema.
   */
  Entities?: {
    [k: string]: Entity;
  };
  /**
   * The relationships in the linguistic schema.
   */
  Relationships?: {
    [k: string]: Relationship;
  };
  /**
   * The global text substitutions in the linguistic schema.
   */
  GlobalSubstitutions?: [GlobalSubstitution, ...GlobalSubstitution[]];
  /**
   * Examples associated with the linguistic schema.
   */
  Examples?: [Example, ...Example[]];
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference {}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity {
  /**
   * The definition for the entity
   */
  Definition: {
    /**
     * The conceptual model object binding
     */
    Binding: ConceptualEntityBinding | ConceptualPropertyBinding | HierarchyBinding | HierarchyLevelBinding;
  };
  /**
   * The state of the entity
   */
  State?: "Authored" | "Generated" | "Suggested" | "Deleted";
  /**
   * Indicates the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Hidden?: boolean;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  /**
   * Terms which can be used to refer to this entity
   */
  Terms?: [Term, ...Term[]];
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: "Person" | "Animate" | "Inanimate" | "Location" | "Time" | "Duration";
  /**
   * Nouns which indicate the units represented in this numeric property entity.
   */
  Units?: [Term, ...Term[]];
  /**
   * Defines how instance values from the model are recognized
   */
  Instances?: {
    /**
     * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
     */
    Index?: "Default" | "None";
    /**
     * Indicates whether values that appear to be plural should match singular words in the utterance.
     */
    PluralNormalization?: "Default" | "Normalized" | "None";
    /**
     * Defines a set of values which are synonyms of instances of this entity.
     */
    Synonyms?: {
      /**
       * The conceptual model object which contains terms that can be used to refer to values of the entity
       */
      SynonymBinding:
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          };
      /**
       * The conceptual model object which contains the corresponding values of the entity
       */
      ValueBinding:
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          };
      /**
       * The state of the instance synonyms
       */
      State?: "Authored" | "Generated" | "Suggested" | "Deleted";
    };
    /**
     * Reference to property in the model which contains the weight to apply to instances of this entity.
     */
    Weights?: {
      /**
       * The conceptual model object which contains the instance weights corresponding to instances of the entity
       */
      Binding:
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          };
    };
  };
}
/**
 * A term in the linguistic schema
 */
export interface FullTerm {
  /**
   * Properties of the term
   *
   * This interface was referenced by `FullTerm`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: {
    /**
     * The part of speech of the term
     */
    Type?: "Noun" | "Verb" | "Adjective" | "Preposition";
    /**
     * The state of the term
     */
    State?: "Authored" | "Generated" | "Suggested" | "Deleted";
    /**
     * The source of the term
     */
    Source?: SourceType | FullSource;
    /**
     * The weight to apply to the term
     */
    Weight?: number;
    /**
     * Identifies the shared template schema from which the term is derived
     */
    TemplateSchema?: string;
    /**
     * Indicates the last date and time (in UTC) that this term was modified.
     */
    LastModified?: string;
  };
}
/**
 * Indicates who/what created the object in the linguistic schema.
 */
export interface FullSource {
  Type?: SourceType;
  /**
   * Specific name of the agent that created the object.
   */
  Agent?: string;
  [k: string]: any;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?: ConceptualEntityBinding;
  /**
   * The state of the relationship
   */
  State?: "Authored" | "Generated" | "Suggested" | "Deleted";
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this relationship is derived
   */
  TemplateSchema?: string;
  /**
   * References to linguistic entities which participate in the relationship
   */
  Roles?: {
    [k: string]: Role;
  };
  /**
   * Defines how roles fill common semantic slots in the relationship
   */
  SemanticSlots?: {
    /**
     * A role which indicates where the relationship takes place
     */
    Where?: Identifier | FullRoleReference;
    /**
     * A role which indicates when the relationship takes place
     */
    When?: Identifier | FullRoleReference;
    /**
     * A role which indicates how long the relationship occurred
     */
    Duration?: Identifier | FullRoleReference;
    /**
     * A role which indicates the number of times the relationship occurred
     */
    Occurrences?: Identifier | FullRoleReference;
  };
  /**
   * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
   */
  Conditions?: [Condition];
  /**
   * A set of syntactic frames which define the types of language used to describe the relationship
   */
  Phrasings?: [Phrasing, ...Phrasing[]];
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: Identifier | FullEntityReference;
  /**
   * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
   */
  Nouns?: [Term, ...Term[]];
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: Identifier | FullRoleReference;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: Identifier | FullRoleReference;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference {
  /**
   * The name of the entity
   */
  Entity: string;
  /**
   * The name of the namespace of the linguistic schema that contains the entity
   */
  Namespace?: string;
}
/**
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference {
  Role: Identifier;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition {
  /**
   * A role in the relationship to compare to the value
   */
  Target: Identifier | FullRoleReference;
  /**
   * An aggregate function applied to the role
   */
  Aggregation?: "None" | "Sum" | "Average" | "Count" | "Min" | "Max" | "Median" | "Variance" | "StandardDeviation";
  /**
   * The operator with which to compare the value and the role
   */
  Operator:
    | "Equals"
    | "NotEquals"
    | "GreaterThan"
    | "LessThan"
    | "GreaterThanOrEquals"
    | "LessThanOrEquals"
    | "Contains"
    | "NotContains"
    | "StartsWith"
    | "NotStartsWith";
  /**
   * The value to which the role is compared
   */
  Value:
    | {
        /**
         * A text value to use in a condition
         */
        Text: NullableTextValue | [NullableTextValue];
      }
    | {
        /**
         * A number value to use in a condition
         */
        Number: NullableNumberValue | [NullableNumberValue];
      }
    | {
        /**
         * A Boolean value to use in a condition
         */
        Boolean: NullableBooleanValue | [NullableBooleanValue];
      }
    | TextValues
    | NumberValues
    | BooleanValues
    | null;
}
/**
 * Properties of an attribute phrasing
 */
export interface AttributePhrasingProperties {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: Identifier | FullRoleReference;
  /**
   * The entity which is the object of the phrasing
   */
  Object: Identifier | FullRoleReference;
  /**
   * Additional prepositional phrases which apply to the phrasing
   */
  PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase {
  /**
   * Prepositions used in the prepositional phrase
   */
  Prepositions: [Term, ...Term[]];
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: Identifier | FullRoleReference;
}
export interface PhrasingProperties {
  /**
   * The state of the phrasing
   */
  State?: "Authored" | "Generated" | "Suggested" | "Deleted";
  /**
   * The weight to apply to the phrasing
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which the phrasing is derived
   */
  TemplateSchema?: string;
  [k: string]: any;
}
/**
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: Identifier | FullRoleReference;
  /**
   * The entity which is the name of the Subject
   */
  Name: Identifier | FullRoleReference;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties {
  /**
   * The entity which is described via an adjective
   */
  Subject: Identifier | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: Identifier | FullRoleReference;
  /**
   * Additional prepositional phrases which apply to the phrasing
   */
  PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties {
  /**
   * The entity which is described via a noun
   */
  Subject: Identifier | FullRoleReference;
  /**
   * Nouns used to describe the Subject
   */
  Nouns: [Term, ...Term[]];
  /**
   * Additional prepositional phrases which apply to the phrasing
   */
  PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties {
  /**
   * The entity which is described via a noun
   */
  Subject: Identifier | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: Identifier | FullRoleReference;
  /**
   * Additional prepositional phrases which apply to the phrasing
   */
  PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: Identifier | FullRoleReference;
  /**
   * Prepositions used in the prepositional phrase
   */
  Prepositions: [Term, ...Term[]];
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: Identifier | FullRoleReference;
  /**
   * Additional prepositional phrases which apply to the phrasing
   */
  PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: Identifier | FullRoleReference;
  /**
   * Verbs used to describe the relationship
   */
  Verbs: [Term, ...Term[]];
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: Identifier | FullRoleReference;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: Identifier | FullRoleReference;
  /**
   * Additional prepositional phrases which apply to the phrasing
   */
  PrepositionalPhrases?: [PrepPhrase, ...PrepPhrase[]];
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution {
  [k: string]: GlobalSubstitutionProperties;
}
export interface FullGlobalSubstitutionProperties {
  /**
   * The sequence of words to substitute into the utterance.
   */
  Substitute: string;
  /**
   * The state of the global substitution
   */
  State?: "Authored" | "Generated" | "Suggested" | "Deleted";
  /**
   * Identifies the shared template schema from which this global substitution is derived
   */
  TemplateSchema?: string;
}
/**
 * An example utterance associated with the linguistic schema
 */
export interface FullExample {
  [k: string]: ExampleProperties;
}
/**
 * Metadata properties about an example utterance
 *
 * This interface was referenced by `FullExample`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface ExampleProperties {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
}
