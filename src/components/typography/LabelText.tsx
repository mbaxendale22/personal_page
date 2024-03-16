import {CSSProperties} from 'react';
import TextRoot from "./TextRoot.tsx";

function LabelText(props: { content: string }) {

    return (
        <TextRoot inputStyles={styles} content={props.content} />
    );
}

export default LabelText;

const styles: Record<string, CSSProperties> = {
    main: {
        fontSize: '0.8rem',
    }
}

