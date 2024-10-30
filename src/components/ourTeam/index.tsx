import { useTranslation } from "react-i18next";
import CenteredLayout from "../ui/centredLayout";
import { OUR_TEAM } from "../../assets/data";
import { Image } from "@nextui-org/react";


export default function OurTeam() {
    const { t } = useTranslation();
    return (
        <section id="our-team">
            <CenteredLayout>
                <h1 className="px-8 pb-3 text-4xl font-semibold leading-normal text-left lg:text-6xl lg:px-0">{t('aboutUs.ourTeam')}</h1>

                {OUR_TEAM.map((element) => (
                    <div className="flex flex-col gap-10">
                        <h2 className="py-10 text-xl font-bold tracking-wider text-black dark:text-white">{element.title}
                        </h2>
                        <div className="grid gap-4 p-4 responsiveGrid">
                            {
                                element.data.map((item) => (
                                    <div>
                                        <Image
                                            className="object-cover object-center w-full h-full transition duration-300 ease-in-out rounded-lg -z-10"
                                            src={item.imagePath}
                                            alt={`${item.name} Image`}
                                        />
                                        <div className="flex items-end justify-center">
                                            <div className="w-full p-1 text-center text-black dark:text-white">
                                                <h4 className="text-lg font-bold">{item.name}</h4>
                                                <small className="text-sm">{item.jobTitle}</small>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                ))}
            </CenteredLayout>
        </section>
    )
}
