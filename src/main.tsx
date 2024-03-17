import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import YllwScreen from "./YllwScreen.tsx";
import PrivacyScreen from "./PrivacyScreen.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/yllw-app',
        element: <YllwScreen/>
    },
    {
        path: '/yllw-app/privacy',
        element: <PrivacyScreen/>
    },


])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
