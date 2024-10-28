import {
    Accordion,
    AccordionItem,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react'
import React from 'react'
import { NavItemsProps } from '../../../../common/types'
import { ServicesCard } from '../../../shared/card'
import { useMediaQuery } from 'react-responsive'
import ThemeToggler from '../../../shared/ThemeSelector'
import LanguageDropdown from '../../../shared/languageDropdown'


export function MobileNavbar({ navItems }: Readonly<{ navItems: NavItemsProps[] }>) {
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} position='sticky'>
            <NavbarContent justify='start'>
                <NavbarBrand>
                    <img src='https://ik.imagekit.io/divadev/DIVA/logo.png' alt='Website Logo' width={40} />
                </NavbarBrand>
            </NavbarContent>
            {isMobile &&
                (
                    <>
                        <NavbarContent justify='start'>
                            <ThemeToggler />
                        </NavbarContent>
                        <NavbarContent>
                            <LanguageDropdown />
                        </NavbarContent>
                    </>

                )}
            <NavbarContent justify='end'>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
            </NavbarContent>

            <NavbarMenu style={{ zIndex: 999 }}>
                {navItems.map((item: NavItemsProps, index: number) =>
                    !item.hasChildren ? (
                        <NavbarMenuItem key={`${index}`} style={{ zIndex: 999 }}>
                            <Link
                                title={item.label}
                                size='lg'
                                className='pl-3'
                                color='foreground'
                                href={item.link}
                                onClick={() => {
                                    setIsMenuOpen()
                                }}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ) : (
                        <Accordion key={index}>
                            <AccordionItem title={item.label}>
                                <ServicesCard item={item} />
                            </AccordionItem>
                        </Accordion>
                    ),
                )}
            </NavbarMenu>
        </Navbar>
    )
}
