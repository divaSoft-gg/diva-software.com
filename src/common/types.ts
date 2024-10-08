import { IconType } from "react-icons/lib";

export interface IStep {
  index: number;
  element: HTMLElement;
  direction: string;
}

export interface IClient {
  logo: string;
  name: string;
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
export interface Products {
  button: string;
  imagePath: string;
  websiteDescription: string;
  websiteName: string;
  websiteTitle: string;
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
export interface NavBarItems {
  label: string;
  link: string;
}
export interface ILanguages {
  code: string;
  name: string;
  country_code: string;
  image: string;
}
