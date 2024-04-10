import react from 'react';
import {Button, Form} from 'react-bootstrap';
import './DetailedButton.css';


export default function DetailedButton({page, setPage}: {page:string; setPage: (newPage: string) => void}): JSX.Element {
    return (
        <div>
            <Button onClick={() => setPage("Detailed")}>Take Quiz!</Button>
        </div>
    )
}