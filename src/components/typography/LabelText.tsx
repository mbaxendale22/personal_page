import {CSSProperties, useContext} from 'react';
import TextRoot from "./TextRoot.tsx";
import themeContext from "../../context/ThemeContext.tsx";

function LabelText(props: { content: string, color? : string }) {
    const {colors} = useContext(themeContext)
    const textColor = props.color ? props.color : colors.textPrimary

    const styles: Record<string, CSSProperties> = {
        main: {
            fontSize: '0.8rem',
            color: textColor,
        }
    }

    return (
        <TextRoot inputStyles={styles} content={props.content} />
    );
}

export default LabelText;



