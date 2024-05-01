import { CSSProperties, useState } from 'react'
import ScreenRoot from '../ScreenRoot'
import Headline from '../../components/typography/Headline'
import Subtitle from '../../components/typography/Subtitle'
import TextRoot from '../../components/typography/TextRoot'
import { kColors } from '../../kColors'
import Personal from './Personal'
import Professional from './Professional'
import Software from './Software'
type DisplayType = 'init' | 'software' | 'professional' | 'personal'
function IntroPage() {
    const [displayType, setDisplayType] = useState<DisplayType>('init')

    const displayContent = () => {
        switch (displayType) {
            case 'software':
                return <Software />
            case 'professional':
                return <Professional />
            case 'personal':
                return <Personal />

            default:
                return null
        }
    }

    const handlePress = (value: DisplayType) => setDisplayType(value)

    return (
        <ScreenRoot>
            <section style={styles.container}>
                <section>
                    <Headline content={'Hello'} />
                    <Subtitle content={"I'm Matthew"} />
                    <TextRoot content={'What would you like to know?'} />
                </section>
                <section style={styles.gridContainer}>
                    <div
                        style={styles.gridCell}
                        onClick={() => handlePress('software')}
                    >
                        <p
                            style={{
                                color:
                                    displayType === 'software'
                                        ? kColors.accent
                                        : 'white',
                            }}
                        >
                            Software engineering
                        </p>
                    </div>
                    <div
                        style={styles.gridCell}
                        onClick={() => handlePress('professional')}
                    >
                        <p
                            style={{
                                color:
                                    displayType === 'professional'
                                        ? kColors.accent
                                        : 'white',
                            }}
                        >
                            Professional background
                        </p>
                    </div>
                    <div
                        style={styles.gridCell}
                        onClick={() => handlePress('personal')}
                    >
                        <p
                            style={{
                                color:
                                    displayType === 'personal'
                                        ? kColors.accent
                                        : 'white',
                            }}
                        >
                            Personal background
                        </p>
                    </div>

                    <section>{displayContent()}</section>
                </section>
            </section>
        </ScreenRoot>
    )
}

const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridCell: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 110,
        width: 110,
        borderRadius: 16,
        border: `1px solid ${kColors.grey}`,
        cursor: 'pointer',
    },

    gridContainer: {
        display: 'flex',
        paddingTop: 32,
        paddingBottom: 16,
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
}
export default IntroPage
