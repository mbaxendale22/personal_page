import {CSSProperties} from 'react';
import TextRoot from "./TextRoot.tsx";

function Subtitle(props: { content: string }) {

    return (
        <TextRoot inputStyles={styles} content={props.content} />
    );
}

export default Subtitle;

const styles: Record<string, CSSProperties> = {
    main: {
        fontSize: '3rem',
    }
}

