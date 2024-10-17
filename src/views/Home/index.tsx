import { useMediaQuery } from "react-responsive";
import ContactUs from "../../components/contact-us";
import HeroSection from "../../components/HeroSection";
import OurClients from "../../components/ourClients";
import ProductsSection from "../../components/ourProducts";
import ProductsSectionMobile from "../../components/ourProducts/ProductSectionMobile";

export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            <HeroSection />
            <OurClients />
            {isMobile ? <ProductsSectionMobile /> : <ProductsSection />}
            <ContactUs />
        </>
    )
}
