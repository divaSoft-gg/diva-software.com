import ContactUs from "../../components/contact-us";
import HeroSection from "../../components/HeroSection";
import OurClients from "../../components/ourClients";
import ProductsSection from "../../components/ourProducts";

export default function Home() {
    return (
        <>
            <div id="hero-section">
                <HeroSection />
            </div>
            <div id="our-clients">
                <OurClients />
            </div>
            <div id="products-section">
                <ProductsSection />
            </div>
            <div id="contact-us">
                <ContactUs />
            </div>
        </>
    )
}
