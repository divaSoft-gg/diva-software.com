import { ServicesCard } from '../../../shared/card';
import { NavItemsProps } from '../../../../common/types';
import ThemeToggler from '../../../shared/TheleSelector';
import LanguageDropdown from '../../../shared/languageDropdown';

//  Compoenet Do Display Simple Link
function SimpleLink({ index, element }: Readonly<{ index: number, element: NavItemsProps }>) {
    return (
        <li key={index} className='py-4'>
            <a href={element.link} className='block text-gray-900 hover:text-blue-700' >
                {element.label}
            </a>
        </li>
    )
}

// Compoenet Do Display Link And MegaMenu
function NestedLink({ index, element }: Readonly<{ index: number; element: NavItemsProps }>) {

    return (
        <li
            key={index}
            className='flex items-center justify-between gap-1 py-4 font-medium text-gray-900 cursor-pointer md:hover:text-blue-600 group'
        >
            <span className='w-fit'>{element.label}</span>
            <svg
                className='w-2.5 h-2.5 ms-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
            >
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
            </svg>

            {/* ********************************************* */}
            {/* *** MEGA MENU TO BE DISPLAYED ON TRIGGER **** */}
            {/* ********************************************* */}

            <div
                id='megaMenu'
                className='absolute left-0 z-30 hidden w-full top-14 group-hover:block'
            >
                <ServicesCard item={element} />

            </div>
        </li>

    )
}

// Main Navbar Componenet 
export default function DesktopNavBar({ navItems }: Readonly<{ navItems: NavItemsProps[] }>) {
    return (
        <div className='sticky top-0 w-full bg-white border-gray-200'>
            <nav className='flex flex-row items-center justify-between max-w-[var(--max-content-width)] mx-auto'>
                <a href='https://diva.diva-dev.tn' className='flex items-center gap-3'>
                    <img src='https://ik.imagekit.io/divadev/DIVA/logo.png' alt='Website Logo' width={40} />
                    <span className='font-semibold text-left text-black uppercase package-dark:text-black ext-lg whitespace-nowrap'>Diva Software</span>
                </a>

                <ul className='flex flex-row items-center justify-between gap-4 font-medium'>
                    {
                        navItems.map((element: NavItemsProps, index: number) =>
                            element.hasChildren ?
                                <NestedLink key={index} element={element} index={index} />
                                :
                                <SimpleLink key={index} element={element} index={index} />
                        )
                    }
                    <li>
                        <ThemeToggler />
                    </li>
                    <li>
                        <LanguageDropdown />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
