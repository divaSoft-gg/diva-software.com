import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry failed queries up to 3 times
      refetchOnWindowFocus: false, // Avoid refetching on window focus
      staleTime: 300000, // Cache data for 5 minutes
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NextUIProvider>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </NextUIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
