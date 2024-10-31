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
