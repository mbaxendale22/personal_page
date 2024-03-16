import {useContext} from "react";
import themeContext from "../context/ThemeContext.tsx";
import {Theme} from "../types.ts";
import ReactSwitch from "react-switch";
import SunIcon from '../assets/sun.svg?react'
import MoonIcon from '../assets/moon-2.svg?react'


const ThemeToggleSwitch = () => {
    const { mode, updateTheme, colors } = useContext(themeContext)
    const handleChange = (nextChecked: boolean) => {
        if (nextChecked){
            updateTheme(Theme.light)
            return
        }
        updateTheme(Theme.dark)

    };
    const checked = mode === Theme.light

    return (
        <div>
                <ReactSwitch
                    onChange={handleChange}
                    checked={checked}
                    className="react-switch"
                    onColor={colors.grey}
                    checkedIcon={ <SunIcon style={{height: 24, width: 24, margin: '1 0  0 4'}}/>}
                    uncheckedIcon={ <MoonIcon style={{height: 24, width: 24, margin: '1 0  0 4'}}/>}
                />
        </div>
    );
};

export default ThemeToggleSwitch
