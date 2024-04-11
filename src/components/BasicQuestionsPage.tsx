import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export function BasicQuestionsPage(): JSX.Element {
    const [goToHomePage, setGoToHomePage] = React.useState(false);
    const [inputText, setInputText] = React.useState("");

    const handleGoToHomePage = () => {
        setGoToHomePage(true);
    };

    const handleClearText = () => {
        setInputText("");
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <p>Basic Questions Page</p>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button onClick={handleGoToHomePage}>Home</Button>
            <Button onClick={handleClearText}>Reset</Button>
        </div>
    );
}