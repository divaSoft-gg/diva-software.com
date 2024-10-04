import { IconType } from "react-icons/lib";

/**
 * @description
 * Interface for Scrollama step
 */
export interface IStep {
  index: number;
  element: HTMLElement;
  direction: string;
}

/**
 * @description
 * Interface for product
 * Used in the Scrollama component (our products section)
 */
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

/**
 * @description
 * Interface for DivaSoftware clients
 * Used in the home component to show most popular clients
 */
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
