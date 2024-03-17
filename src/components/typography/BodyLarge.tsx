import {CSSProperties} from 'react';
import TextRoot from "./TextRoot.tsx";

function BodyLarge(props: { content: string }) {

    return (
        <TextRoot inputStyles={styles} content={props.content} />
    );
}


const styles: Record<string, CSSProperties> = {
    main: {
        fontSize: '1.5rem',
    }
}

export default BodyLarge;
