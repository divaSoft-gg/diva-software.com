import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NAVIGATION_ARRAY } from "../../../assets/data";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import React from 'react';
import { Switch } from '@nextui-org/react';
import { useTheme } from "../../../hooks/useTheme";


export default function NavBar() {

    const navItems = NAVIGATION_ARRAY;

    return (

        <Navbar maxWidth="full" position='sticky' className="max-w-[var(--max-content-width)] mx-auto">

            <NavbarBrand>
                <Image src="/images/logo/logo.png" alt="Logo" width={40} height={40} />
            </NavbarBrand>
            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                {
                    navItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link href={item.link} color="foreground" className="font-semibold">{item.label}</Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <ThemeToggle />
        </Navbar>
    )
}



const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Switch
            isSelected={theme === 'light' ? true : false}
            onChange={toggleTheme}
            size="lg"
            color="secondary"
            startContent={<CiSun />}
            endContent={<FaMoon />}
        />
    );
};