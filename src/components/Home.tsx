import React from 'react';
import { Buttons } from './Buttons';
import gif from "../images/cab.gif"
//import Grid from '@mui/material/Grid'; // Grid version 1
//import Item from '@mui/material/ListItem';
//import 'App.css';

import { Navigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import { styled } from '@mui/material/styles';

export function Home(): JSX.Element {

    //button styles  
    const StyledButton = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: #ce93d8;
    color: #FFF;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: #ab47bc;
      transform: scale(1.3);
    }
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    `}
  `;

    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
    }



    //Basic layout that consists of two boxes one for basic questions button and description and another for detailed questions button and description.
    return (
        
        <div>
            <div className="cab">
                <img src={gif} alt='moving cab'/>
            </div>
            <Buttons></Buttons>
        <p></p>
        <h1 className='padding6'>Home Page</h1>

        <p></p>
        <main className='padding2' style={{ display: 'flex', justifyContent: 'center' }} >
        <div className="box" style={{paddingTop: '50px'}}>
            <p></p>
            <h3 className='h3-box'>Basic Questions Page</h3>
            <p></p>
            <p className='padding-text'>The basic questions page is designed to provide concise and straightforward answers
                to common inquiries about your career. Dive in to find quick insights about your 
                interests and career. 
            </p>
            <p></p>

                <StyledButton onClick={() => {setGoToBasicQuestionsPage(true)}}>BASIC QUESTIONS PAGE</StyledButton>

        </div>
        <div className="box">
            <p></p>
            <h3 className='h3-box'>Detailed Questions Page</h3>
            <p></p>
            <p className='padding-text'>The detailed questions page offers in-depth explanations to questions
                you have about your career pathway. Each response is  crafted to provide 
                thorough explanations. 
            </p>
            <p></p>
            <StyledButton onClick={() => {setGoToDetailedQuestionsPage(true)}}>DETAILED QUESTIONS PAGE</StyledButton>
        </div>

        </main>
        </div>
    )
}