import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { AppContainer } from './components/ui/AppContainer'
import { ErrorFallback } from './components/ui/ErrorFallback'

// VIEWS
import Home from './views/Home'
import About from './views/About'

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: '/about',
        element: <AppContainer />,
        errorElement: <ErrorFallback />,
        children: [{ index: true, element: <About /> }],
    }
]

export const router = createBrowserRouter([...publicRoutes])