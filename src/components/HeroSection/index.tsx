import { Button, Image, Link } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../hooks/useTheme";


const HeroSection = () => {
    const { t } = useTranslation();
    const { theme } = useTheme()

    const handleScroll = () => {
        const contactUsSection = document.getElementById('contact-us');
        if (contactUsSection) {
            contactUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <CentredLayout>
            <section id="hero-section" className="flex flex-row justify-between gap-8 my-16 dark">
                <div className="flex flex-col gap-8 ">
                    <h1 className="max-w-2xl px-8 mb-4 text-6xl tracking-tight text-left lg-px-0 light:text-black">
                        {t('heroSection.h1')}
                    </h1>

                    <p className="max-w-2xl px-8 mb-6 text-lg font-light text-justify lg:text-left lg:px-0 light:text-gray-300 ">
                        {t('heroSection.description')}
                    </p>

                    <div className="flex justify-center">

                        <Button variant="shadow" color="default" size="lg" className="w-fit" as={Link}

                            onClick={() => { handleScroll() }}
                        > {t('heroSection.button')}
                        </Button>
                    </div>
                </div>
                <Image src="images/hero-section/project_roadmap.png" className={`hidden lg:block w-40 grayscale ${theme === 'dark' ? 'invert' : ''}`} />
            </section>
        </CentredLayout>
    )
}



export default HeroSection;
