import { CiMail } from "react-icons/ci";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FooterSiteMap, IClient, IContactUsMethods, IProduct } from "../common/types";

/**
 * @description
 * Array of navigation links used in the top bar
 */
export const NAVIGATION_ARRAY = [
  {
    label: "Accueil",
    link: "/",
  },
  {
    label: "Contactez-nous",
    link: "#contact-us",
  }
];

/**
 * @description
 * Array of Diva clients
 */
export const OUR_CLIENTS: IClient[] = [
  {
    logo: "images/clients/client1.svg",
    name: "Alsico",
  },
  {
    logo: "/images/clients/client2.svg",
    name: "Granjard",
  },
  {
    logo: "/images/clients/client3.svg",
    name: "Aubade",
  },
  {
    logo: "/images/clients/client4.svg",
    name: "Bleu Oceane",
  },
  {
    logo: "/images/clients/client5.svg",
    name: "NAFNAF",
  },
];

/**
 * @description
 * Array of Diva-owned products
 * The array groups the different tools and softwares created by
 * Diva on various platforms
 */
export const PRODUCTS_SECTION_ARRAY: IProduct[] = [
  {
    logo: "images/logo/logo.png",
    name: "Green Genius",
    slug: "Carbon Footprinting",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt porro minima, provident, iusto incidunt animi, aperiam quibusdam neque odio voluptates nam? Id harum animi quibusdam mollitia repellendus vel iusto!",
    preview: "images/products/schrollama-images/product_demo.gif",
    customStyles: {
      bgColor: "#83B435",
      rotation: "6deg",
    },
  },
  {
    logo: "images/products/diva-tex.png",
    name: "DivaTex",
    slug: "ERP for textile industry",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt porro minima, provident, iusto incidunt animi, aperiam quibusdam neque odio voluptates nam? Id harum animi quibusdam mollitia repellendus vel iusto!",
    preview: "images/products/schrollama-images/product_demo_02.gif",
    customStyles: {
      bgColor: "#1869DA",
      rotation: "-6deg",
    },
  },
];

/**
 * @description
 * Array of Diva contact methods
 */
export const CONTACT_US_METHODS: IContactUsMethods[] = [
  { icon: CiMail, value: "example@example.com", title: "Email" },
  {
    icon: FiMapPin,
    value: "4054 Av. de Yasser Arafat, Sousse",
    title: "Address",
  },
  { icon: FiPhone, value: "(+216) 53 333 850", title: "Phone" },
];

/**
 * @description
 * Array of navigation links used in the footer sections (site map, socials, etc.)
 */
export const FOOTER_SITEMAP: FooterSiteMap[] = [
  {
    title: "Site Map",
    sections: [
      { title: "Accueil", href: "#hero-section" },
      { title: "Nos Clients", href: "#our-clients" },
      { title: "Nos Produits", href: "#products-section" },
      { title: "Contactez-nous", href: "#contact-us" },
    ],
  },
  {
    title: "Socials",
    sections: [
      { title: "Facebook", href: "#" },
      { title: "Instagram", href: "#" },
      { title: "LinkedIn", href: "#" },
    ],
  },
];



// *********************************** 
// *********** STATIC COPY *********** 
// *********************************** 

/**
 * @description
 * Copy for the home page, mostly used to fill out the different sections titles
 */
export const HOME_PAGE_COPY = {
  ourClients: {
    title: "Our Clients",
    subTitle:
      "More than 140+ businesses have trusted DIVA-Software to grow using our design and technology expertise.",
  },
  contactUs: {
    title: "Contact Us",
    subTitle:
      "We would love to hear from you. Please fill out the form below and we will get back to you shortly.",
  },
};
