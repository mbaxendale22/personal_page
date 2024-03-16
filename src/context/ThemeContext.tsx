import React, {createContext, useState} from 'react';
import {Theme} from "../types.ts";
import {kColors} from "../kColors.ts";

interface Colors {
    mainBackground: string,
    textPrimary: string,
    grey: string,
    neutral: Record<string, string>
    primary : string,
    secondary : string,
    accent : string,
   splash : string,
}

interface ThemeContext {
    mode: Theme,
    colors: Colors,
    updateTheme: (newVal: Theme) => void,
}

const initColors = {
    mainBackground: '', textPrimary: '', grey: '', neutral: {}, primary: '', secondary: '', accent : '', splash : ''
}


const ThemeContext = createContext<ThemeContext>({
    mode: Theme.dark, colors: initColors, updateTheme: () => {
    }
});

export function ThemeProvider({children}: { children: React.ReactNode }) {

    const [mode, setMode] = useState(Theme.dark)
    const colors: Colors = {
        mainBackground: mode === Theme.light ? kColors.mainBackgroundLight.shade400 : kColors.mainBackgroundDark.shade400,
        textPrimary: mode === Theme.light ? kColors.textPrimaryLight : kColors.textPrimaryDark,
        grey: kColors.grey,
        neutral: mode === Theme.light ? kColors.mainBackgroundLight: kColors.mainBackgroundDark,
        primary: kColors.primary,
        secondary : kColors.secondary,
        accent: kColors.accent,
        splash : kColors.splash,
    }

    const updateTheme = (newVal: Theme) => setMode(newVal)

    return (
        <ThemeContext.Provider value={{mode, colors, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
