import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export function DetailedQuestionsPage(): JSX.Element {
    const [goToHomePage, setGoToHomePage] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleClearText = () => {
        setInputText('');
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <p>Detailed Questions Page</p>
            <p className="text-muted">The detailed career assessment goes in depth to plan out your professional preferences, skills, and motivators. Completing this assessment will provide you with a complex overview of career paths that align with your detailed profile. Coming soon. </p>
            <Form.Control
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button onClick={() => setGoToHomePage(true)}>Home</Button>
            <Button onClick={handleClearText}>Reset</Button>
        </div>
    );
}
