import react from 'react';
import {Button, Form} from 'react-bootstrap';
import './BasicButton.css';


export default function BasicButton({page, setPage}: {page:string; setPage: (newPage: string) => void}
): JSX.Element {
    return (
        <div>
            <Button onClick={() => setPage("Basic")}>Take Quiz!</Button>
        </div>
    )
}


