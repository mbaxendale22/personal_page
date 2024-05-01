import { CSSProperties } from 'react'
import { kColors } from '../../kColors'
function Personal() {
    return (
        <div style={styles.container}>
            <ul>
                <li style={styles.listContent}>
                    I'm a substantially typical millennial, therefore I enjoy
                    speciality coffee, avo toast, walking my poorly socialised
                    Ridgeback Aya, and explaining to people why{' '}
                    <em>The Wire</em> is the greatest TV show of all time (yes,
                    better than Breaking Bad).
                </li>
                <li style={styles.listContent}>
                    After making cancer research a major case study in my PhD
                    thesis, I was then diagnosed with it at 33. The treatment
                    was brutal but effective and now I'm mounting a comeback. I
                    did not photoshop myself into any family pictures whilst
                    undergoing treatment.
                </li>
                <li style={styles.listContent}>
                    My side projects are focused around replacing capitalist
                    marketplaces with quid pro quo exchanges of services and I
                    care alot about online privacy and ownership of data. So far
                    I've built one app with these goals in mind, but I'm working
                    on more!
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
}
export default Personal
