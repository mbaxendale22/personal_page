import { CSSProperties, useContext } from 'react'
import ScreenRoot from '../ScreenRoot.tsx'
import Subtitle from '../components/typography/Subtitle.tsx'
import TextRoot from '../components/typography/TextRoot.tsx'
import themeContext from '../context/ThemeContext.tsx'
import { useNavigate } from 'react-router-dom'

function YllwScreen() {
    const { colors } = useContext(themeContext)
    const navigate = useNavigate()
    return (
        <ScreenRoot>
            <div style={styles.container}>
                <section style={styles.topSection}>
                    <Subtitle content={'This is Yllw'} />
                    <div style={{ color: colors.textPrimary }}>
                        <p>
                            Yllw is a{' '}
                            <span style={{ color: colors.secondary }}>
                                {' '}
                                UTI Tracking App
                            </span>
                        </p>
                        <p>
                            Yllw is{' '}
                            <span
                                style={{
                                    color: colors.primary,
                                    cursor: 'pointer',
                                }}
                                onClick={() => navigate('/yllw-app/privacy')}
                            >
                                {' '}
                                privacy-focused
                            </span>
                        </p>
                        <p>
                            Yllw helps people
                            <span style={{ color: colors.accent }}>
                                {' '}
                                track contributors
                            </span>{' '}
                            to their symptoms
                        </p>
                    </div>
                </section>

                <section>
                    <Subtitle content={'Guides'} />
                    <ul style={{ paddingTop: '1rem' }}>
                        <li style={{ paddingBottom: '0.5rem' }}>
                            <a onClick={() => navigate('/yllw-app/how-to')}>
                                How to use Yllw
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/yllw-app/data')}>
                                Import / Export your data
                            </a>
                        </li>
                    </ul>
                </section>

                <section
                    style={{
                        textAlign: 'center',
                        padding: '6rem 0rem',
                        textWrap: 'balance',
                    }}
                >
                    <TextRoot
                        content={'Currently, Yllw is in closed beta testing'}
                    />
                    <TextRoot
                        content={`If you're interested in gaining access please email`}
                    />
                    <a href="mailto:yllw_app@proton.me">yllw_app@proton.me</a>
                </section>
            </div>
        </ScreenRoot>
    )
}

export default YllwScreen

const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    topSection: {
        alignSelf: 'start',
        paddingTop: '1rem',
    },
}
