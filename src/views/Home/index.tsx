import HeroSection from "../../components/HeroSection";
import OurClients from "../../components/ourClients";
import ProductsSection from "../../components/ourProducts";

export default function Home() {


    return (
        <>
            <HeroSection />
            <div className="bg-[#161616]">
                <OurClients />
            </div>
            <ProductsSection />


        </>
    )
}