import { useMediaQuery } from "react-responsive";
import ContactUs from "../../components/contact-us";
import HeroSection from "../../components/HeroSection";
import OurClients from "../../components/ourClients";
import ProductsSection from "../../components/ourProducts";
import ProductsSectionMobile from "../../components/ourProducts/ProductSectionMobile";
import ContactUsCard from "../../components/ContactUsCard";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <OurClients />
      {isMobile ? <ProductsSectionMobile /> : <ProductsSection />}
      <ContactUsCard />
      <ContactUs />
    </div>
  );
}
