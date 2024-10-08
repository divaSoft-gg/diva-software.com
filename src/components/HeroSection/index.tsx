import { Button, Image } from "@nextui-org/react";
import CentredLayout from "../ui/centredLayout";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();




    return (
        <CentredLayout>
            <section id="hero-section" className="flex flex-row justify-between gap-8 my-16 dark">
                <div className="flex flex-col gap-8">
                    <h1 className="max-w-2xl mb-4 text-6xl font-semibold tracking-tight text-left light:text-black">
                        {t('heroSection.h1')}
                    </h1>
                    <p className="max-w-2xl mb-6 text-lg font-light text-left light:text-gray-300 ">
                        {t('heroSection.description')}

                    </p>

                    <Button variant="shadow" color="default" size="lg" className="w-fit">                    {t('heroSection.button')}
                    </Button>
                </div>
                <Image src="images/hero-section/project_roadmap.png" className="w-40 grayscale" />
            </section>
        </CentredLayout>
    )
}



export default HeroSection;
