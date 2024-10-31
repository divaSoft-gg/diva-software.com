import { Image } from "@nextui-org/react"
import { OUR_CLIENTS } from "../../assets/data"
import CenteredLayout from "../ui/centredLayout"
import { useTranslation } from "react-i18next"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useState } from "react";
import { IClient } from "../../common/types";
import { shuffleArray } from "../../common/utils";

const globalSettings: Settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
};



export default function OurClients() {
    const [sliderSettings] = useState<Settings[]>([
        { ...globalSettings, rtl: false },
        { ...globalSettings, rtl: true }
    ]);
    const { t } = useTranslation()
    return (
        <section className="dark:bg-[#161616] py-2 bg-black lg:px-0 lg:py-8 px-4" id="our-clients">
            <CenteredLayout>
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div>
                        <h1 className="pb-3 text-4xl font-semibold leading-normal text-left text-white lg:text-6xl">
                            {t('ourClients.title')}
                        </h1>
                        <p className="mt-2 font-thin text-white text-md muted">
                            {t('ourClients.description')}
                        </p>
                    </div>
                    <div className="w-full lg:w-[60%] flex flex-col gap-10 self-center">
                        {sliderSettings.map((settings: Settings, index: number) => (
                            <AutoPlay key={index}
                                settings={settings}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </CenteredLayout>
        </section>

    )

}

function AutoPlay(
    { settings, index }: Readonly<{ settings: Settings, index: number }>
) {
    const ourClientsLogo = index == 0 ? OUR_CLIENTS : shuffleArray(OUR_CLIENTS)
    return (
        <div>
            <Slider {...settings} >
                {ourClientsLogo.map((client: IClient, idx: number) => (
                    <div key={idx} className="w-full px-2 lg:px-6">
                        <Image
                            src={client.logo}
                            width={100}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}


