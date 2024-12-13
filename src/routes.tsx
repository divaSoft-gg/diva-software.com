import { createBrowserRouter, type RouteObject } from "react-router-dom";

import { AppContainer } from "./components/ui/AppContainer";
import { ErrorFallback } from "./components/ui/ErrorFallback";

// VIEWS
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";
import BlogPost from "./components/BlogPost";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <ErrorFallback />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/about",
    element: <AppContainer />,
    errorElement: <ErrorFallback />,
    children: [{ index: true, element: <About /> }],
  },
  {
    path: "/blog",
    element: <AppContainer />,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: <Blog /> },

      { path: ":id", element: <BlogPost /> },
    ],
  },
];

export const router = createBrowserRouter([...publicRoutes]);
