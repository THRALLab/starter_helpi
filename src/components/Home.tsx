import React from 'react';
import { Buttons } from './Buttons';
//import Grid from '@mui/material/Grid'; // Grid version 1
//import Item from '@mui/material/ListItem';
//import 'App.css';
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

export function Home(): JSX.Element {
    const customTheme = createTheme({
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(','),
        },
        palette: {
          primary: {
            main: '#ce93d8',
          }, text: {
            primary: '#000', // Change text color to white
          }, secondary: {
            main: '#ab47bc'
          }
        },
      });
      
      const StyledButton = styled(Button)`
        ${({ theme }) => `
        cursor: pointer;
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.text.primary};
        transition: ${theme.transitions.create(['background-color', 'transform'], {
          duration: theme.transitions.duration.standard,
        })};
        &:hover {
          background-color: ${theme.palette.secondary.main};
          transform: scale(1.3);
        }
        `}
      `;

    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);
    //const [goToHomePage, setGoToHomePage] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

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
        <h1 className='padding3'>Home Page</h1>
        <p></p>
        <main className='padding2'>
        <div className="box">
            <p></p>
            <h3>Basic Questions Page</h3>
            <p></p>
            <p className='padding'>The basic questions page is designed to provide concise and straightforward answers
                to common inquiries about your career. Dive in to find quick insights about your 
                interests and career. 
            </p>
            <p></p>
            <ThemeProvider theme={customTheme}>
                <StyledButton onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</StyledButton>
            </ThemeProvider>
            {/*<Button className={`animated-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} color="primary" variant='solid' onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Button>*/}
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
            {/*<Button color="primary" variant="solid" onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>*/}
            <ThemeProvider theme={customTheme}>
                <StyledButton onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</StyledButton>
            </ThemeProvider>
        </div>

        </main>
        </div>
    )
}