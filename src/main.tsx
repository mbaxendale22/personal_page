import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import YllwScreen from './pages/YllwScreen.tsx'
import PrivacyScreen from './pages/PrivacyScreen.tsx'
import YllwDataScreen from './pages/YllwDataScreen.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)
