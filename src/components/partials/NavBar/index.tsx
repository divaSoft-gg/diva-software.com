import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import ThemeToggler from "../../shared/ThemeSelector";
import LanguageDropdown from "../../shared/languageDropdown";
import { useTranslation } from "react-i18next";
import { NavBarItems } from "../../../common/types";



export default function NavBar() {

    const { t } = useTranslation()
    const navItems: NavBarItems[] = t('navbar', { returnObjects: true }) as NavBarItems[];



    return (
        <Navbar position='sticky'>

            <NavbarBrand>
                <Image src="/images/logo/logo.png" alt="Logo" className="w-12 grayscale" />
            </NavbarBrand>

            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                {
                    navItems.map((item: NavBarItems, index: number) => (
                        <NavbarItem key={index}>
                            <a href={item.link} color="foreground" className="font-semibold">{item.label}</a>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <ThemeToggler />
            <LanguageDropdown />
        </Navbar>
    )
}