import { Image, Link } from "@nextui-org/react";
import CenteredLayout from "../../ui/centredLayout";
import { Divider } from "@nextui-org/divider";
import { FooterItems, FooterSectionItems } from "../../../common/types";
import ThemeToggler from "../../shared/ThemeSelector";
import { useTranslation } from "react-i18next";


export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation()
    const footerSiteMap: FooterItems[] = t('footer.siteMap', { returnObjects: true }) as FooterItems[];

    return (
        <footer className="dark:bg-[#161616] px-4  bg-black mt-20 lg:mt-[200px]">
            <CenteredLayout>
                <div className="flex flex-col justify-between w-full py-12 lg:flex-row">
                    <div className="max-w-[500px] flex flex-col gap-4">
                        <Image
                            src="images/logo/logo.png"
                            className="relative w-12 -left-2 grayscale"
                        />
                        <p className="text-sm text-gray-300 hover:text-gray-100">
                            {t('footer.description')}
                        </p>

                        <ThemeToggler />
                    </div>

                    <div className="flex flex-row justify-around gap-8 pt-10 lg:pt-0">
                        {
                            footerSiteMap.map(
                                (element: FooterItems, index: number) => (
                                    <div key={index}>
                                        <h1 className="text-lg font-semibold text-white">{element.title}</h1>

                                        <ul className="mt-4 list-none">
                                            {
                                                element.sections.map(
                                                    (item: FooterSectionItems, index: number) => (
                                                        <li key={index}>
                                                            <Link href={item.href} className='text-gray-300 hover:text-gray-100'>{item.title}</Link>
                                                        </li>
                                                    )
                                                )
                                            }
                                        </ul>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </CenteredLayout>

            <Divider />

            <p className="w-full py-4 text-center text-white"> &copy; {currentYear} Diva Software. {t('footer.footerTitle')} </p>
        </footer>
    )
}