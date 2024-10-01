import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NAVIGATION_ARRAY } from "../../../assets/data";

export default function NavBar() {

    const navItems = NAVIGATION_ARRAY;

    return (
        <Navbar className="w-full">
            <NavbarBrand>
                <Image src="/images/logo_white.png" alt="Logo" width={40} height={40} />
            </NavbarBrand>
            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                {
                    navItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link href={item.link}>{item.label}</Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
        </Navbar>
    )
}