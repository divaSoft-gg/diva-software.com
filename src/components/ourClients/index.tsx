import { Image } from "@nextui-org/react"
import { OUR_CLIENTS } from "../../assets/data"
import { IClient } from "../../common/types"
import CenteredLayout from "../ui/centredLayout"
import { useTranslation } from "react-i18next"

export default function OurClients() {
    const { t } = useTranslation()

    return (
        <div className="dark:bg-[#161616] bg-black" id="our-clients">
            <CenteredLayout>
                <div className="py-8 lg:px-0 px-8 lg:my-[200px] my-20">

                    <h1 className="pb-3 text-4xl font-semibold leading-normal text-left text-white lg:text-6xl">{t('ourClients.title')}</h1>
                    <p className="mt-2 leading-8 text-white lg:text-lg text-md muted ">{t('ourClients.description')}</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-12 dark ">
                        {
                            OUR_CLIENTS.map(
                                (logo: IClient, index: number) =>
                                    <div className="fill-black sm:p-5 group " key={index}>
                                        <Image src={logo.logo} width={100} height={60} alt={logo.name} className="w-auto duration-200 ease-linear opacity-50 h-7 sm:h-10 group-hover:opacity-100 group-hover:scale-105"
                                        />
                                    </div>
                            )
                        }
                    </div>
                </div>
            </CenteredLayout>
        </div>
    )
}

