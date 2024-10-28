import { ChildrenProps, NavItemsProps } from '../../../common/types'
export function ServicesCard({ item }: Readonly<{ item: NavItemsProps }>
) {
    return (
        <div className='relative flex flex-col gap-4 p-4 py-8 mt-1 border-gray-200 shadow-sm border-y lg:flex-row lg:justify-center lg:p-0'>
            <div className="flex flex-col items-center justify-center px-8 lg:min-h-full w-fit">
                <h3 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
                    Made @DivaSoftware
                </h3>
            </div>
            {item?.children?.map((item: ChildrenProps, index: number) => (
                <div
                    key={index}
                    className='flex flex-col gap-8 max-w-[400px] group hover:bg-slate-100 hover:dark:bg-slate-500 transition-all duration-300 p-4 cursor-pointer'
                >
                    <div className='flex flex-col gap-2'>
                        <img src={item.websiteLogo} alt='product logo' width={40} />
                        <h3 className='text-xl font-semibold text-black capitalize dark:text-white '>{item.websiteTitle}</h3>
                    </div>

                    <p className='text-sm font-normal text-black dark:text-white '>{item.websiteDescription}</p>

                    <a href={item.link} className='inline-flex items-center text-sm font-medium text-blue-600 w-fit'>
                        <span>Switch Now</span>
                        <svg
                            className='w-3 h-3 ms-2 rtl:rotate-180'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 14 10'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 5h12m0 0L9 1m4 4L9 9'
                            />
                        </svg>
                    </a>
                </div>
            ))}

        </div>
    )
}
