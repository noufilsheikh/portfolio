import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AppProvider } from './hooks/contextAPI'
import './App.scss'
import { Auth0ProviderWithConfig } from "./auth0-provider-with-config";

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <Auth0ProviderWithConfig>
    <AppProvider>
    <App />
    </AppProvider>
    </Auth0ProviderWithConfig>
    </React.StrictMode>,
)
