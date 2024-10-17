import { Button, Image, Link } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../hooks/useTheme";

const HeroSection = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const handleScroll = () => {
        const contactUsSection = document.getElementById('contact-us');
        contactUsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <CentredLayout>
            <section id="hero-section" className="flex flex-row justify-between gap-8 my-16 dark">
                <div className="flex flex-col w-1/2 gap-8 mx-auto md:justify-center lg:w-full">
                    <h1 className="max-w-2xl mb-4 text-6xl tracking-tight text-left light:text-black">
                        {t('heroSection.h1')}
                    </h1>
                    <p className="max-w-2xl px-4 mb-6 text-lg font-light text-justify lg:text-left lg:px-0 light:text-gray-300">
                        {t('heroSection.description')}
                    </p>
                    <Button
                        variant="shadow"
                        color="default"
                        size="lg"
                        className="mx-auto w-fit"
                        as={Link}
                        onClick={handleScroll}
                    >
                        {t('heroSection.button')}
                    </Button>
                </div>
                <Image
                    src="images/hero-section/project_roadmap.png"
                    className={`hidden lg:block w-40 grayscale ${theme === 'dark' ? 'invert' : ''}`}
                />
            </section>
        </CentredLayout>
    );
};

export default HeroSection;
