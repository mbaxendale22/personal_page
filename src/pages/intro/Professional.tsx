import { CSSProperties } from 'react'
import { kColors } from '../../kColors'
function Professional() {
    return (
        <div style={styles.container}>
            <ul>
                <li style={styles.listContent}>
                    Before becoming a software engineer, I did some other stuff.
                </li>
                <li style={styles.listContent}>
                    I have a PhD in Philosophy from{' '}
                    <a style={styles.links} href="https://ceu.edu">
                        Central European University
                    </a>
                    . When I was there it was based in Budapest. Since then
                    Orban kicked it out for being too liberal, so now its in
                    Vienna.
                </li>
                <li style={styles.listContent}>
                    As well as writting a Thesis on the structure of scientific
                    epistemic practices, I had some papers published which you
                    can check out
                    <a
                        style={styles.links}
                        href="https://link.springer.com/article/10.1007/s11229-018-1683-1"
                    >
                        {' '}
                        here{' '}
                    </a>{' '}
                    and
                    <a
                        style={styles.links}
                        href="https://link.springer.com/article/10.1007/s11023-018-9456-7"
                    >
                        {' '}
                        here{' '}
                    </a>
                </li>
                <li style={styles.listContent}>
                    I worked in coffee. I was an assistant manager at Caffe Nero
                    for several years. This included running the shop throughout
                    the COVID pandemic and therefore handling the Government's
                    batshit crazy vanity projects like{' '}
                    <em>Eat Out to Help Out</em>.
                </li>
                <li style={styles.listContent}>
                    For a short time I ran my own coffee shop stationed in a
                    well known gym brand. I made no money, sold very little
                    coffee, but learnt alot.
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
export default Professional
