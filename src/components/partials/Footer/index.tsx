import { Image } from "@nextui-org/react";
import { FOOTER_SITEMAP } from "../../../assets/data";
import CenteredLayout from "../../ui/centredLayout";
import { Divider } from "@nextui-org/divider";
import { FooterSection, FooterSiteMap } from "../../../common/types";


export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#161616] mt-[200px]">
            <CenteredLayout>
                <div className="flex flex-row justify-between w-full py-12">
                    <div className="max-w-[500px]">
                        <Image
                            src="images/logo/logo.png"
                            className="w-14 "
                        />
                        <p className="mt-4 text-sm text-gray-300 hover:text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum consectetur obcaecati natus consequatur architecto fugit! Temporibus, vero minima sapiente veniam ad neque pariatur laboriosam, possimus ea, tempora numquam reprehenderit?</p>

                    </div>
                    <div className="flex flex-row gap-8">

                        {
                            FOOTER_SITEMAP.map((element: FooterSiteMap, index: number) => (

                                <div key={index}>
                                    <h1 className="text-lg font-semibold text-white">{element.title}</h1>
                                    <ul className="mt-4 list-none">
                                        {element.sections.map((item: FooterSection, index: number) => (
                                            <li key={index} >
                                                <a
                                                    href={item.href}
                                                    className='text-gray-300 hover:text-gray-100'
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}


                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </CenteredLayout>

            <Divider />

            <p className="w-full py-4 text-center"> &copy; {currentYear} UnifyUI. All right reserved </p>
        </footer>
    )
}