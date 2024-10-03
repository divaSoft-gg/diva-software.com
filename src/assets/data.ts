import { CiMail } from "react-icons/ci";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { IContactUsMethods } from "../common/types";

export const NAVIGATION_ARRAY = [
    {
        label: 'Accueil',
        link: '/'
    },
    {
        label: 'A propos',
        link: '/about'
    },
    {
        label: 'brokenLink',
        link: '/something'
    }
]
export const PRODUCTS_SECTION_ARRAY = [
    {
        logo: "images/products/green-genius.png",
        name: "Green Genius",
        slug: "Carbon Footprinting",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt porro minima, provident, iusto incidunt animi, aperiam quibusdam neque odio voluptates nam? Id harum animi quibusdam mollitia repellendus vel iusto!",
        preview: "images/products/schrollama-images/product_demo.gif",
        customStyles: {
            bgColor: "#83B435",
            rotation: "6deg"
        }
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
            rotation: "-6deg"
        }
    },

];

export const OUR_CLIENTS = [
    {
        id: 1,
        logo: "images/clients/client1.svg",
        name: "Alsico"
    },
    {
        id: 2,
        logo: "/images/clients/client2.svg",
        name: "Granjard"
    },
    {
        id: 3,
        logo: "/images/clients/client3.svg",
        name: "Aubade"
    },
    {
        id: 4,
        logo: "/images/clients/client4.svg",
        name: "Bleu Oceane"
    },
    {
        id: 5,
        logo: "/images/clients/client5.svg",
        name: "NAFNAF"
    },
]

export const CONTACT_US_METHODS: IContactUsMethods[] = [
    { icon: CiMail, title: 'example@example.com' },
    { icon: FiMapPin, title: '4054 Av. de Yasser Arafat, Sousse' },
    { icon: FiPhone, title: '(+216)53 333 850' },

]

// STATIC COPY

export const HOME_PAGE_COPY = {
    ourClients: {
        title: "Our Clients",
        subTitle: "More than 140+ businesses have trusted Squareboat to grow using our design and technology expertise.",
    },
    contactUs: {
        title: "Contact Us",
        subTitle: "We would love to hear from you. Please fill out the form below and we will get back to you shortly.",
    }
}