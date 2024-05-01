import { CSSProperties } from 'react'
import { kColors } from '../../kColors'
function Software() {
    return (
        <div style={styles.container}>
            <ul>
                <li style={styles.listContent}>
                    If you're looking for links here's my{' '}
                    <a
                        style={styles.links}
                        href="https://github.com/mbaxendale22"
                    >
                        GitHub
                    </a>{' '}
                    and{' '}
                    <a
                        style={styles.links}
                        href="https://www.linkedin.com/in/matthew-baxendale/"
                    >
                        LinkedIn.
                    </a>
                </li>
                <li style={styles.listContent}>
                    My primary commerical experience is as a cross-platform
                    mobile developer using{' '}
                    <span style={styles.skillRef}>React Native.</span>
                </li>
                <li style={styles.listContent}>
                    My primary programming language is{' '}
                    <span style={styles.skillRef}>Typescript / JavaScript</span>
                    . I can also program with{' '}
                    <span style={styles.skillRef}>Python,</span>{' '}
                    <span style={styles.skillRef}>Lua,</span> and{' '}
                    <span style={styles.skillRef}>Java</span>
                </li>
                <li style={styles.listContent}>
                    I have working knowledge of SQL (Sqlite, PostgreSQL) and
                    noSQL databases (MongoDB, DynamoDB). I understand RestFul
                    API Architecture, and security practices such as KDF
                    encryption.
                </li>
                <li style={styles.listContent}>
                    I'm interested in improving my native app development skills
                    for both iOS and Android. I have some knowledge of building
                    with SwiftUI and Jetpack Compose.
                </li>
                <li style={styles.listContent}>
                    I'm interested in DevOps and learning more about build,
                    test, and deployment piplines, as well code automation, and
                    cloud infrastructure (GCP, AWS, etc.,)
                </li>
            </ul>
        </div>
    )
}

const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 32,
    },
    listContent: {
        color: 'white',
        paddingBottom: 16,
    },
    links: {
        color: kColors.primary,
    },
    skillRef: { color: kColors.secondary },
}
export default Software
