import {CSSProperties, useContext} from 'react';
import ScreenRoot from "./ScreenRoot.tsx";
import ThemeToggleSwitch from "./components/ToggleThemeSwitch.tsx";
import Headline from "./components/typography/Headline.tsx";
import Subtitle from "./components/typography/Subtitle.tsx";
import TextRoot from "./components/typography/TextRoot.tsx";
import themeContext from "./context/ThemeContext.tsx";
import {useNavigate} from "react-router-dom";
import BodyLarge from "./components/typography/BodyLarge.tsx";
import BackArrow from './assets/back-arrow.svg?react'


function YllwScreen() {
    const {colors} = useContext(themeContext)
    const navigate = useNavigate()
    return (
        <ScreenRoot>
            <div style={styles.container}>
                <section style={styles.header}>
                    <div style={{ display: 'flex', gap: '2rem'}}>
                    <div onClick={() => navigate('/yllw-app')}>
                        <BackArrow height={25} width={25} fill={colors.textPrimary} />
                    </div>
                    <div onClick={() => navigate('/')}>
                        <TextRoot content={'Home'}/>
                    </div>

                    </div>


                    <div style={{alignSelf: 'flex-end'}}>
                        <ThemeToggleSwitch/>
                    </div>


                </section>
                <section style={styles.topSection}>
                    <Headline content={"Hello"}/>
                    <Subtitle content={"This is a Privacy Policy"}/>
                    <div style={{color: colors.textPrimary}}>
                        <BodyLarge content={'Below is the privacy policy for Yllw. The main takeaways are:'}/>
                        <p>Your data will NEVER be <span style={{color: colors.primary}}>shared</span> with third
                            party.</p>
                        <p>Your data will NEVER be <span style={{color: colors.secondary}}>sold</span> to a third
                            party. </p>
                        <p>Your data will NEVER be used for<span style={{color: colors.accent}}> advertising.</span></p>
                        <p>I will not comply with legal requests (court order, subpoena, etc.) for data that
                            provides users' <span style={{color: colors.splash}}> health information</span>  (e.g.,
                            menstrual cycle tracking).</p>
                    </div>
                </section>
                <section style={{padding: '1rem 0rem', textWrap: 'balance', color: colors.textPrimary}}>
                    <p>This Privacy Policy governs the manner in which Yllw collects, uses, maintains and
                        discloses information collected from users of the application.</p>

                    <h2>User Provided Information</h2>
                    <p>The app may collect personal information from users such as:</p>
                    <ul>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Address</li>
                        <li>Other profile information</li>
                    </ul>
                    <p>This data is collected and used to provide services and improve the user experience.</p>

                    <h2>Automatically Collected Information</h2>
                    <p>The app may automatically collect certain information such as:</p>
                    <ul>
                        <li>Device information (type of device, operating system, etc.)</li>
                        <li>Log data (time/date of access, features used, etc.)</li>
                        <li>Location data</li>
                        <li>Other usage data</li>
                    </ul>
                    <p>This data allows the app to function properly and provide relevant content.</p>

                    <h2>Data Usage</h2>
                    <p>The collected data is used to:</p>
                    <ul>
                        <li>Provide and improve the app services</li>
                        <li>Develop new products and features</li>
                        <li>Send product updates and promotional materials</li>
                        <li>Respond to support inquiries</li>
                        <li>Comply with applicable laws and regulations</li>
                    </ul>

                    <h2>Data Sharing</h2>
                    <p>User data will not be shared with third parties</p>

                    <h2>Data Security</h2>
                    <p>Reasonable measures are taken to protect user data from unauthorized access or disclosure,
                        including physical, technical, and administrative safeguards. However, no method of transmission
                        or storage is 100% secure.</p>

                    <h2>Children's Privacy</h2>
                    <p>The app does not knowingly collect personal information from children under 13. If a parent or
                        guardian becomes aware that a child has provided personal information, please contact us so that
                        we can delete the information.</p>

                    <h2>Changes to This Policy</h2>
                    <p>This Privacy Policy may be updated periodically. Any changes will be posted on this page with
                        updates indicating when the latest revisions became effective. Continuing to access or use our
                        services after any changes constitutes acceptance of the updated policy.</p>

                    <h2>Contact Us</h2>
                    <p>For any questions regarding this Privacy Policy, please contact us at:</p>
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
