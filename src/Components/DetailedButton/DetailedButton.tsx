import {Button} from 'react-bootstrap';
import './DetailedButton.css';
import React from 'react';


export default function DetailedButton({page, setPage}: {page:string; setPage: (newPage: string) => void}): JSX.Element {
    //passed state as props to button component so that detailed page could be rendered on click
    return (
        <div>
            <Button style={{borderColor: '#6923ff', backgroundColor: '#6923ff', margin: '1rem'}} onClick={() => setPage("Detailed")}>Take Quiz!</Button>
        </div>
    )
}
