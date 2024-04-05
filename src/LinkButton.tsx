import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Button } from 'react-bootstrap';

//Special button made for navigating our webpages

function LinkButton(to: string, label: string) {
    const navigate = useNavigate();
    const handleButtonClick = (whereTo: string)=>{
        navigate(whereTo)
    }
    return (
        <Button onClick={() => handleButtonClick(to)}>{label}</Button>
    )
}