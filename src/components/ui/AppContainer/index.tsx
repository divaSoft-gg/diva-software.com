import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NextUIProvider, Spinner } from '@nextui-org/react'
import { cn } from '../../../common/utils'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/NavBar'
import HeroSection from '../../../views/HeroSection'
import CentredLayout from '../centredLayout'

export function AppContainer({ className = '' }) {
    const navigate = useNavigate()

    return (
        <NextUIProvider navigate={navigate}>

            {/* <NavBar /> */}

            <div className={cn('w-full h-screen', className)}>
                <React.Suspense
                    fallback={
                        <div className="flex items-center justify-center w-full h-full">
                            <Spinner />
                        </div>
                    }
                >
                    <CentredLayout>
                    <HeroSection/>

                    </CentredLayout>

                </React.Suspense>

                {/* <Footer /> */}
            </div>

        </NextUIProvider >
    )
}
