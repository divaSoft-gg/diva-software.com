import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <NextUIProvider>
        <I18nextProvider i18n={i18n}>

          <App />
        </I18nextProvider>
      </NextUIProvider>
    </ThemeProvider>
  </StrictMode>,
)
