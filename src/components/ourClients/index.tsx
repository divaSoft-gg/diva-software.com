import { Image } from "@nextui-org/react"
import { HOME_PAGE_COPY, OUR_CLIENTS } from "../../assets/data"
import { IClient } from "../../common/types"
import SectionsTitle from "../shared/sectionTitle"
import CenteredLayout from "../ui/centredLayout"

export default function OurClients() {

    return (
        <div className="dark:bg-[#161616] bg-black" id="our-clients">
            <CenteredLayout>
                <div className="py-8 my-[200px]">

                    <SectionsTitle title={HOME_PAGE_COPY.ourClients.title} subtitle={HOME_PAGE_COPY.ourClients.subTitle} />
                    <div className="flex flex-wrap justify-center gap-4 mt-12 dark ">
                        {
                            OUR_CLIENTS.map((logo: IClient, index: number) =>
                                <div className="fill-black sm:p-5 group " key={index}>
                                    <Image src={logo.logo} width={100} height={60} alt={logo.name} className="w-auto duration-200 ease-linear opacity-50  h-7 sm:h-10 group-hover:opacity-100 group-hover:scale-105"
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

