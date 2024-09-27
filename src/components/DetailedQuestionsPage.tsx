import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export function DetailedQuestionsPage(): JSX.Element {
    const [goToHomePage, setGoToHomePage] = React.useState(false);

    if (goToHomePage){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <p>Detailed Questions Page</p>
            <Button onClick={() => {setGoToHomePage(true)}}>Home</Button>
        </div>
    )
}