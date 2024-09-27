import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export function BasicQuestionsPage(): JSX.Element {
    const [goToHomePage, setGoToHomePage] = React.useState(false);

    if (goToHomePage){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <p>Basic Questions Page</p>
            <Button onClick={() => {setGoToHomePage(true)}}>Home</Button>
        </div>
    )
}