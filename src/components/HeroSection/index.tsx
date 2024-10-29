import { Button, Link } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../hooks/useTheme";


export default function HeroSection() {
    const { t } = useTranslation();
    const { theme } = useTheme()

    const handleScroll = () => {
        const contactUsSection = document.getElementById('contact-us');
        if (contactUsSection) contactUsSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero-section" className="">

            <CentredLayout>
                <div className="flex flex-row justify-between w-full gap-8 px-4 my-16 dark lg:p-0">
                    <div className="flex flex-col gap-8 ">
                        <h1 className="max-w-2xl text-6xl tracking-tight text-left lg:px-0 light:text-black">
                            {t('heroSection.h1')}
                        </h1>

                        <p className="max-w-2xl text-lg font-light text-justify lg:text-left lg:px-0 light:text-gray-300">
                            {t('heroSection.description')}
                        </p>

                        <div className="flex justify-center lg:justify-start">

                            <Button variant="shadow" color="default" size="lg" className="w-fit" as={Link}
                                onClick={() => { handleScroll() }}
                            >
                                {t('heroSection.button')}
                            </Button>
                        </div>
                    </div>
                    <img src="images/hero-section/project_roadmap.png" className={`!-z-10 pointer-events-none hidden lg:block grayscale w-72 ${theme === 'dark' ? 'invert' : ''}`} />
                </div>
            </CentredLayout>
        </section>
    )
}