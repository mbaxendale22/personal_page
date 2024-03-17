import {CSSProperties, useContext} from 'react';
import themeContext from "../../context/ThemeContext.tsx";

function TextRoot({content, inputStyles}: { content: string, inputStyles?: Record<string, CSSProperties> }) {
    const {colors} = useContext(themeContext)
    const additionalStyles = inputStyles ? inputStyles.main : {}

    return (
        <div style={{color: colors.textPrimary, ...additionalStyles}}>{content}</div>
    );
}

export default TextRoot;

