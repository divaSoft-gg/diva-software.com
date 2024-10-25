import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import ThemeToggler from "../../shared/ThemeSelector";
import LanguageDropdown from "../../shared/languageDropdown";
import { useTranslation } from "react-i18next";
import { NavBarItems } from "../../../common/types";
import React from "react";
import { scrollToTop } from "../../../common/utils";



export default function NavBar() {

    const { t } = useTranslation()
    const navItems: NavBarItems[] = t('navbar', { returnObjects: true }) as NavBarItems[];
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} position='sticky'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>



            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                {
                    navItems.map((item: NavBarItems, index: number) => (
                        <NavbarItem key={index}>
                            <Link href={item.link} onClick={() => { scrollToTop() }} color="foreground" className="font-semibold">{item.label}</Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarContent>

                <NavbarMenu className="flex items-start justify-start pt-20 ">
                    {navItems.map((item, index) => (
                        <NavbarMenuItem key={`${index}`} >
                            <Link color="foreground" href={item.link} onClick={() => { setIsMenuOpen() }}>{item.label}</Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>

            <ThemeToggler />
            <LanguageDropdown />
        </Navbar >
    )
}