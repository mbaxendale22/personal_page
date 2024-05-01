import React, { CSSProperties, useContext } from 'react'
import themeContext from '../context/ThemeContext.tsx'
import NavBar from '../components/Nav/NavBar.tsx'

function ScreenRoot({ children }: { children: React.ReactNode }) {
    const { colors } = useContext(themeContext)
    return (
        <main
            style={{
                ...styles.container,
                backgroundColor: colors.mainBackground,
            }}
        >
            <div style={styles.content}>
                <NavBar />
                {children}
            </div>
        </main>
    )
}

export default ScreenRoot

const styles: Record<string, CSSProperties> = {
    container: {
        minHeight: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
    },
    content: {
        margin: '0 auto',
        maxWidth: 1000,
        minHeight: '100%',
        padding: '1rem 2rem',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
}
