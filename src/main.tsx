import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import YllwScreen from './pages/yllw/YllwScreen.tsx'
import PrivacyScreen from './pages/yllw/PrivacyScreen.tsx'
import YllwDataScreen from './pages/yllw/YllwDataScreen.tsx'
import YllwHowToScreen from './pages/yllw/YllwHowToScreen.tsx'
import IntroPage from './pages/intro/IntroPage.tsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/me',
        element: <IntroPage />,
    },
    {
        path: '/yllw-app',
        element: <YllwScreen />,
    },
    {
        path: '/yllw-app/privacy',
        element: <PrivacyScreen />,
    },
    {
        path: '/yllw-app/data',
        element: <YllwDataScreen />,
    },
    {
        path: '/yllw-app/how-to',
        element: <YllwHowToScreen />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)
