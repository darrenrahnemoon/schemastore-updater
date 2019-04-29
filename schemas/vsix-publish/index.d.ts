/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A description for the extension. Required if the extension is not a VSIX.
 */
export type Description = string;
/**
 * A display name for the extension. Required if the extension is not a VSIX.
 */
export type DisplayName = string;
/**
 * An icon for the extension. Required if the extension is not a VSIX. Can be relative to the current json file's directory.
 */
export type Icon = string;
/**
 * The SKU name of the installation target.
 */
export type InstallTargetSKU =
  | "Microsoft.VisualStudio.Community"
  | "Microsoft.VisualStudio.Enterprise"
  | "Microsoft.VisualStudio.Express_All"
  | "Microsoft.VisualStudio.IntegratedShell"
  | "Microsoft.VisualStudio.Pro"
  | "Microsoft.VisualStudio.TestProfessional"
  | "Microsoft.VisualStudio.Ultimate"
  | "Microsoft.VisualStudio.Premium"
  | "Microsoft.VisualStudio.VBExpress"
  | "Microsoft.VisualStudio.VCExpress"
  | "Microsoft.VisualStudio.VCSExpress"
  | "Microsoft.VisualStudio.VPDExpress"
  | "Microsoft.VisualStudio.VSLS"
  | "Microsoft.VisualStudio.VSWinExpress"
  | "Microsoft.VisualStudio.VSWinDesktopExpress"
  | "Microsoft.VisualStudio.VWDExpress";
/**
 * The version range of the install target that the extension can be installed to.
 */
export type InstallTargetVersionRange = string;
/**
 * A list of install targets for the extension. At least one is required if the extension is not a VSIX.
 */
export type InstallTargets = InstallTarget[];
/**
 * The internal name of the extension. A marketplace extension is identified as 'publisherName'.'internalName'. Cannot contain spaces.
 */
export type InternalName = string;
/**
 * The default language the extension applies to. Must be a CLR locale code or an lcid code.
 */
export type Language = string | number;
/**
 * A tag for the extension.
 */
export type Tag = string;
/**
 * A list of tags for the extension.
 */
export type Tags = Tag[];
/**
 * The version of the extension. Required if the extension is not a VSIX.
 */
export type Version = string;
/**
 * The vsix identifier of the extension.
 */
export type VsixId = string;
/**
 * A path to the file to include in the package. Can be relative to the current json file's directory.
 */
export type PathOnDisk = string;
/**
 * The path to embed the file in the package. This can be referenced from your overview file via an image link, for example
 */
export type TargetPath = string;
/**
 * A list of assets to include in the package sent to the marketplace.
 */
export type AssetFiles = {
  pathOnDisk: PathOnDisk;
  targetPath: TargetPath;
  [k: string]: any;
}[];
/**
 * A valid category on the marketplace that the extension applies to.
 */
export type Category = string;
/**
 * A list of categories that the extension applies to.
 */
export type Categories = (
  | Category
  | (
      | "ajax"
      | "build"
      | "coding"
      | "connected services"
      | "data"
      | "database"
      | "documentation"
      | "extension sdk"
      | "framework and libraries"
      | "lightswitch"
      | "lightswitch controls"
      | "lightswitch templates"
      | "modelling"
      | "office"
      | "other"
      | "other templates"
      | "performance"
      | "process templates"
      | "programming languages"
      | "reporting"
      | "scaffolding"
      | "security"
      | "services"
      | "setup and deployment"
      | "sharepoint"
      | "sharepoint controls"
      | "sharepoint templates"
      | "silverlight controls"
      | "source control"
      | "start pages"
      | "team development"
      | "testing"
      | "visual studio extensions"
      | "wcf"
      | "web"
      | "windows forms templates"
      | "windows forms controls"
      | "workflow"
      | "wpf templates"
      | "wpf controls"
      | "xna"))[];
/**
 * A path to a markdown file that will be displayed on the extension's page in the marketplace. The path can be relative to the current json file's path.
 */
export type Overview = string;
/**
 * The pricing model for the extension.
 */
export type PriceCategory = "free" | "trial" | "paid";
/**
 * The publisher of the extension. Must not be a display name of the publisher.
 */
export type Publisher = string;
/**
 * If true, the extension will be uploaded as a private extension.
 */
export type Private = boolean;
/**
 * If true, the extension will have a Q&A page on the marketplace.
 */
export type QA = boolean;
/**
 * A URL that points to the GitHub repo for the extension.
 */
export type Repo = string;

export interface VsixPublish {
  identity: {
    description?: Description;
    displayName?: DisplayName;
    icon?: Icon;
    installTargets?: InstallTargets;
    internalName: InternalName;
    language?: Language;
    tags?: Tags;
    version?: Version;
    vsixId?: VsixId;
    [k: string]: any;
  };
  assetFiles?: AssetFiles;
  categories: Categories;
  overview: Overview;
  priceCategory?: PriceCategory;
  publisher: Publisher;
  private?: Private;
  qna?: QA;
  repo?: Repo;
  [k: string]: any;
}
/**
 * An installation target for the extension.
 */
export interface InstallTarget {
  sku: InstallTargetSKU;
  version: InstallTargetVersionRange;
  [k: string]: any;
}
