import {CSSProperties} from 'react';
import TextRoot from "./TextRoot.tsx";

function Headline(props: { content: string }) {

    return (
        <TextRoot inputStyles={styles} content={props.content} />
    );
}

export default Headline;

const styles: Record<string, CSSProperties> = {
    main: {
        fontSize: '4rem',
        fontWeight: 'bold',

    }
}

