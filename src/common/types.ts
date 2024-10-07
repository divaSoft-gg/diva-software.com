import { IconType } from "react-icons/lib";


export interface IStep {
  index: number;
  element: HTMLElement;
  direction: string;
}

export interface IProduct {
  logo: string;
  name: string;
  slug: string;
  description: string;
  preview: string;
  customStyles: {
    bgColor: string;
    rotation: string;
  };
}

export interface IClient {
  logo: string;
  name: string;
}

export interface IContactUsMethods {
  icon: IconType;
  title: string;
  value: string;
}

export interface FooterSiteMap {
  title: string;
  sections: FooterSection[];
}

export interface FooterSection {
  title: string;
  href: string;
}
