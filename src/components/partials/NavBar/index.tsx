import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NAVIGATION_ARRAY } from "../../../assets/data";
import ThemeToggler from "../../shared/TheleSelector";



export default function NavBar() {

    const navItems = NAVIGATION_ARRAY;

    return (
        <Navbar position='sticky'>

            <NavbarBrand>
                <Image src="/images/logo/logo.png" alt="Logo" className="w-12 grayscale" />
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

            <ThemeToggler />
        </Navbar>
    )
}