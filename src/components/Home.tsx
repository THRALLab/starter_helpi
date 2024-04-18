import React from 'react';
import { Buttons } from './Buttons';
//import Grid from '@mui/material/Grid'; // Grid version 1
//import Item from '@mui/material/ListItem';
//import 'App.css';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export function Home(): JSX.Element {
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);
    //const [goToHomePage, setGoToHomePage] = React.useState(false);

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
    }
    
    return (
        
        <div>
            <Buttons></Buttons>
        <p></p>
        <h1>Home Page</h1>
        <p></p>
        <main>
        <div className="box">
            <p></p>
            <h3>Basic Questions Page</h3>
            <p></p>
            <p className='padding'>The basic questions page is designed to provide concise and straightforward answers
                to common inquiries about your career. Dive in to find quick insights about your 
                interests and career. 
            </p>
            <p></p>
           
            <Button onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Button>
        </div>
        <div className="box">
            <p></p>
            <h3>Detailed Questions Page</h3>
            <p></p>
            <p className='padding'>The detailed questions page offers in-depth explanations to questions
                you have about your career pathway. Each response is  crafted to provide 
                thorough explanations. 
            </p>
            <p></p>
            <Button onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>
        </div>

        </main>
        </div>
    )
}