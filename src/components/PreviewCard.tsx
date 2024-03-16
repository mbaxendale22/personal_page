import {CSSProperties, useContext} from "react";
import themeContext from "../context/ThemeContext.tsx";
import {useNavigate} from "react-router-dom";
import LabelText from "./typography/LabelText.tsx";
import TextRoot from "./typography/TextRoot.tsx";

function PreviewCard({image}: { image: string }) {
    const {colors} = useContext(themeContext)
    const boxShadowValue = `9px -12px 0 ${colors.mainBackground}`
    const navigate = useNavigate()

    return (
        <div style={cardStyles.container} onClick={() => navigate('/yllw-app')}>
            <div style={{...cardStyles.topCorner, backgroundColor: colors.mainBackground}}>
                <div style={{...cardStyles.textContainer, backgroundColor: colors.neutral.shade500}}>
                    <LabelText content={'Yllw'}/>
                </div>
            </div>
            <div style={{...cardStyles.leftCorner, boxShadow: boxShadowValue}}></div>
            <div style={{...cardStyles.btmCorner, boxShadow: boxShadowValue}}></div>
            <img style={cardStyles.image} src={image} alt={'sunny landscape with a few clouds in the sky'}/>
            <div style={{...cardStyles.titleContainer, backgroundColor: colors.neutral.shade400}}>
                <TextRoot content={'Yllw'}/>
            </div>
        </div>
    )
}

const cardStyles: Record<string, CSSProperties> = {
    container: {
        borderRadius: "1rem",
        height: 300,
        width: 200,
        cursor: 'pointer',
        position: 'relative'
    },
    image: {
        maxWidth: '100%',
        height: '100%',
        borderRadius: "1rem",
    },
    mask: {
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
    },
    topCorner: {
        position: 'absolute',
        textAlign: 'center',
        borderRadius: '0rem 0rem 0rem 1rem',
        margin: '1 1 1 1',
        width: '50%',
        height: 25,
        right: 0,
    },
    leftCorner: {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: "transparent",
        height: 25,
        width: 25,
        left: 74,
    },
    btmCorner: {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: "transparent",
        height: 25,
        width: 25,
        right: 0,
        top: 25,
    },
    textContainer: {
        textAlign: 'center',
        margin: '0 auto',
        width: 70,
        borderRadius: '1rem',
    },

    titleContainer: {
        textAlign: 'center',
        padding: '8px 24px',
        borderRadius: '1rem',
        position: "absolute",
        top: '50%',
        left: '30%'
    }
}

export default PreviewCard
