import {CSSProperties, useContext} from "react";
import themeContext from "../context/ThemeContext.tsx";
import {useNavigate} from "react-router-dom";
import LabelText from "./typography/LabelText.tsx";
import TextRoot from "./typography/TextRoot.tsx";

function PreviewCard({image}: { image: string }) {
    const {colors} = useContext(themeContext)
    // const boxShadowValue = `9px -12px 0 ${colors.mainBackground}`
    const boxShadowValue = `10px -12px 0 ${colors.mainBackground}`
    const navigate = useNavigate()

    return (
        <div style={styles.container} onClick={() => navigate('/yllw-app')}>
            <div style={{...styles.topCorner, backgroundColor: colors.mainBackground}}>
                <div style={{...styles.textContainer, backgroundColor: colors.neutral.shade500}}>
                    <LabelText content={'Yllw'}/>
                </div>
            </div>
            <div style={{...styles.leftCorner, boxShadow: boxShadowValue}}></div>
            <div style={{...styles.btmCorner, boxShadow: boxShadowValue}}></div>
            <img style={styles.image} src={image} alt={'sunny landscape with a few clouds in the sky'}/>
            <div style={{...styles.titleContainer, backgroundColor: colors.neutral.shade400}}>
                <TextRoot content={'Yllw'}/>
            </div>
            <div style={styles.badgeContainer}>
                <div style={{...styles.badge, backgroundColor: colors.neutral.shade500}}>
                    <LabelText content={'Health & Wellness'} color={colors.primary} />
                </div>
                <div style={{...styles.badge, backgroundColor: colors.neutral.shade500}}>
                    <LabelText content={'iOS & Android'} color={colors.accent}/>
                </div>
            </div>
        </div>
    )
}

const styles: Record<string, CSSProperties> = {
    container: {
        borderRadius: "1rem",
        height: 400,
        width: 250,
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
        height: 20,
        width: 26,
        left: 99,
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
        width: 80,
        borderRadius: '1rem',
    },

    titleContainer: {
        textAlign: 'center',
        padding: '8px 24px',
        borderRadius: '1rem',
        position: "absolute",
        top: '50%',
        left: '35%'
    },
    badgeContainer: {
        position: 'absolute',
        bottom: 5,
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        width: '100%',
    },
    badge: {
        padding: '0.2rem 0.5rem',
        borderRadius: '1rem'
    }
}

export default PreviewCard
