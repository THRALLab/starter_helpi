import { useNavigate } from 'react-router-dom';
//import React from 'react';
import { Button } from 'react-bootstrap';

interface LinkButtonProps{
    to: string;
    label: string;
}

//Special button made for navigating our webpages

function LinkButton(props: LinkButtonProps) {
    const navigate = useNavigate();
    const handleButtonClick = (whereTo: string)=>{
        navigate(whereTo)
    }
    return (
        <Button onClick={() => handleButtonClick(props.to)}>{props.label}</Button>
    )
} export default LinkButton;