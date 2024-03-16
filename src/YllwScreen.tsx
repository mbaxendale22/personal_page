import {CSSProperties, useContext} from 'react';
import ScreenRoot from "./ScreenRoot.tsx";
import ThemeToggleSwitch from "./components/ToggleThemeSwitch.tsx";
import Headline from "./components/typography/Headline.tsx";
import Subtitle from "./components/typography/Subtitle.tsx";
import TextRoot from "./components/typography/TextRoot.tsx";
import themeContext from "./context/ThemeContext.tsx";
import {useNavigate} from "react-router-dom";


function YllwScreen() {
    const {colors} = useContext(themeContext)
    const navigate = useNavigate()
    return (
        <ScreenRoot>
            <div style={styles.container}>
                <section style={styles.header}>
                    <div onClick={() => navigate('/')}>
                        <TextRoot content={'Home'}/>
                    </div>
                    <div style={{alignSelf: 'flex-end'}}>
                        <ThemeToggleSwitch/>
                    </div>

                </section>
                <section style={styles.topSection}>
                    <Headline content={"Hello"}/>
                    <Subtitle content={"This is Yllw"}/>
                    <div style={{color: colors.textPrimary}}>
                        <p>Yllw is a <span style={{color: colors.secondary}}> UTI Tracking App</span></p>
                        <p>Yllw is <span style={{color: colors.primary}}> privacy-focused</span></p>
                        <p>Yllw helps people<span style={{color: colors.accent}}> track contributors</span> to their
                            symptoms</p>
                        <p>Yllw provides<span style={{color: colors.splash}}> personalised insights</span> over time</p>
                    </div>
                </section>
                <section style={{textAlign: 'center', padding: '4rem'}}>
                    <TextRoot content={'Currently, Yllw is in closed beta testing'}/>
                    <TextRoot content={`If you're interested in gaining access please email`}/>
                    <a href="mailto:yllw_app@proton.me">yllw_app@proton.me</a>
                </section>
            </div>
        </ScreenRoot>
    );
}

export default YllwScreen;


const styles: Record<string, CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: 'column',
        marginBottom: 36,
    },
    header: {
        display: 'flex', justifyContent: 'space-between', cursor: "pointer"
    },
    topSection: {
        alignSelf: 'start'
    }


}
