import Headline from './components/typography/Headline.tsx'
import ScreenRoot from './ScreenRoot.tsx'
import Subtitle from './components/typography/Subtitle.tsx'
import { CSSProperties } from 'react'
import TextRoot from './components/typography/TextRoot.tsx'
import yllwImage2 from './assets/yllw-card-2.jpeg'
import PreviewCard from './components/PreviewCard.tsx'

function App() {
    return (
        <ScreenRoot>
            <div style={styles.container}>
                <section>
                    <Headline content={'Hello'} />
                    <Subtitle content={"I'm Matthew"} />
                    <TextRoot
                        content={
                            "I'm a developer who makes cross-platform mobile apps and web apps. Here they are..."
                        }
                    />
                </section>
                <section style={styles.cardsSection}>
                    <PreviewCard image={yllwImage2} />
                </section>
            </div>
        </ScreenRoot>
    )
}

export default App

const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardsSection: {
        paddingTop: '2rem',
        alignSelf: 'center',
    },
}
