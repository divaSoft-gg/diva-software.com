import { IClient, ILanguages } from "../common/types";

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

// ***********************************
// *********** STATIC COPY ***********
// ***********************************

export const languages: ILanguages[] = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
    image: "https://flagcdn.com/fr.svg",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
    image: "https://flagcdn.com/gb.svg",
  },
];
