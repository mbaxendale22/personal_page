import {CSSProperties, useContext} from 'react';
import themeContext from "../../context/ThemeContext.tsx";

function TextRoot({content, inputStyles}: { content: string, inputStyles?: Record<string, CSSProperties> }) {
    const {colors} = useContext(themeContext)
    const additionalStyles = inputStyles ? inputStyles.main : {}

    return (
        <div style={{...additionalStyles, color: colors.textPrimary}}>{content}</div>
    );
}

export default TextRoot;

