import { useTranslation } from "react-i18next";
import { NavItemsProps } from "../../../common/types";
import { useMediaQuery } from "react-responsive";
import { MobileNavbar } from "./mobile";
import DesktopNavBar from "./desktop";



export default function NavBar() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const { t } = useTranslation()
    const navItems: NavItemsProps[] = t('navbar', { returnObjects: true }) as NavItemsProps[];
    return (
        isMobile ? <MobileNavbar navItems={navItems} /> : <DesktopNavBar navItems={navItems} />
    )

}