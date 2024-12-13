export interface IStep {
  index: number;
  element: HTMLElement;
  direction: string;
}

export interface IClient {
  logo: string;
  name: string;
  description: string;
  websiteLink: string;
}

export interface FooterSiteMap {
  title: string;
  sections: FooterSection[];
}

export interface FooterSection {
  title: string;
  href: string;
}

export interface Socials {
  question: string;
  answer: string;
}
export interface Solutions {
  button: string;
  buttonHref: string;
  imagePath: string;
  websiteDescription: string;
  websiteName: string;
  websiteTitle: string;
  invert: boolean;
  preview: string;
  customStyles: {
    bgColor: string;
    rotation: string;
  };
}
export interface FooterSectionItems {
  title: string;
  href: string;
}
export interface FooterItems {
  title: string;
  sections: FooterSectionItems[];
}
export interface ILanguages {
  code: string;
  name: string;
  country_code: string;
  image: string;
}
export interface ITeam {
  title: string;
  data: TeamInformations[];
}
export interface TeamInformations {
  imagePath: string;
  name: string;
  jobTitle: string;
  image: string;
}
// Interface for Children Props of nav items
export interface ChildrenProps {
  label: string;
  link: string;
  websiteLogo: string;
  websiteTitle: string;
  websiteDescription: string;
}
// Interface for  Props of nav items

export interface NavItemsProps {
  label: string;
  link?: string;
  hasChildren: boolean;
  children?: ChildrenProps[];
}
export interface Format {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: string | null;
  size?: number;
  width?: number;
  height?: number;
  sizeInBytes?: number;
}

export interface Cover {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    large?: Format;
    small?: Format;
    medium?: Format;
    thumbnail?: Format;
  };
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
export interface SliderProps {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Block {
  __component?: string;
  id?: number;
  title?: string;
  body?: string;
  file?: {
    id?: number;
    documentId?: string;
    name?: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: string;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: string | null;
    provider?: string;
    provider_metadata?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
  };
  files?: SliderProps[];
}

export interface DataItem {
  id?: number;
  documentId?: string;
  title?: string;
  description?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  cover: Cover;
  blocks: Block[];
}

export interface Pagination {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
}

export interface Meta {
  pagination?: Pagination;
}

export interface ApiResponse {
  data?: DataItem[];
  meta?: Meta;
}
