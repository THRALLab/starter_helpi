import {Button} from 'react-bootstrap';
import './BasicButton.css';
import React from 'react';


export default function BasicButton({page, setPage}: {page:string; setPage: (newPage: string) => void}
//passed state as props so that the basic page could be rendered on click
): JSX.Element {
    return (
        <div>
            <Button style={{borderColor: '#6923ff', backgroundColor: '#6923ff', margin: '1rem'}} onClick={() => setPage("Basic")}>Take Quiz!</Button>
        </div>
    )
}


