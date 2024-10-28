import React from 'react'
import { ServicesCard } from '../../../shared/card';
import { NavItemsProps } from '../../../../common/types';
import ThemeToggler from '../../../shared/TheleSelector';
import LanguageDropdown from '../../../shared/languageDropdown';

//  Compoenet Do Display Simple Link

function SimpleLink({ index, element }: Readonly<{ index: number; element: NavItemsProps }>) {
    return (
        <li key={index}>
            <a
                href={element.link}
                className='block px-3 py-2 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
            >
                {element.label}
            </a>

        </li>
    )
}
// Compoenet Do Display Link And MegaMenu

function NestedLink({ index, element }: Readonly<{ index: number; element: NavItemsProps }>) {
    const [hoveredItem, setHoveredItem] = React.useState(false)

    return (
        <li
            key={index}
            className='px-3'
            onMouseOver={() => {
                setHoveredItem(true)
            }}
        >
            <button
                aria-controls='megaMenu'
                aria-haspopup='menu'
                aria-expanded='false'
                id='w-dropdown'
                tabIndex={0}
                style={{ zIndex: 999 }}
                className='flex items-center justify-between w-full px-3 py-2 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0'
            >
                {element.label}
                <svg
                    className='w-2.5 h-2.5 ms-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                >
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                </svg>
            </button>


            {/* ********************************************* */}
            {/* *** MEGA MENU TO BE DISPLAYED ON TRIGGER **** */}
            {/* ********************************************* */}
            {hoveredItem && (
                <div
                    onMouseLeave={() => { setHoveredItem(false) }}
                    id='megaMenu'
                    aria-labelledby='w-dropdown'
                    className='absolute left-0 w-full top-16 group-hover:block'
                    style={{ zIndex: 999 }}
                >
                    <ServicesCard item={element} />

                </div>
            )}
        </li>

    )
}


// Main Navbar Componenet 


export default function DesktopNavBar({ navItems }: Readonly<{ navItems: NavItemsProps[] }>
) {
    return (
        <div className='sticky top-0 w-full p-4 bg-white border-gray-200'>

            <nav className='flex flex-row items-center justify-between max-w-[var(--max-content-width)] mx-auto '>
                <a href='https://diva.diva-dev.tn' className='flex items-center gap-3'>
                    <img src='https://ik.imagekit.io/divadev/DIVA/logo.png' alt='Website Logo' width={40} />
                    <span className='font-semibold text-left text-black uppercase package-dark:text-black ext-lg whitespace-nowrap'>Diva Software</span>
                </a>

                <ul className='z-50 flex-row items-center justify-center w-full gap-6 font-medium lg:flex'>
                    {navItems.map((element: NavItemsProps, index: number) =>
                        element.hasChildren ? (
                            <>
                                <NestedLink key={index} element={element} index={index} />
                                <li>
                                    <ThemeToggler />

                                </li>
                                <li className='w-1/4 ' >
                                    <LanguageDropdown />
                                </li>



                            </>
                        ) : (
                            <SimpleLink key={index} element={element} index={index} />
                        ),
                    )}
                </ul>
            </nav>
        </div>
    )
}
