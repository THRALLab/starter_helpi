import React from 'react';
//import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css'; 


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import CareerFinder from '../images/CareerFinder.png';




/*export function Buttons(): JSX.Element {

  

    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
    }

    return (
        <div>
            <Button onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Button>
            <Button onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>
        </div>
    )
}*/

export function Buttons() {
  //const pages = ['Products', 'Pricing', 'Blog'];

    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);
    //const [goToHomePage, setGoToHomePage] = React.useState(false);

    
    /*if (goToHomePage) {
        return <Navigate to="/"/>
    }*/


  if (goToBasicQuestionsPage) {
    return <Navigate to="/BasicQuestionsPage"/>
}

if (goToDetailedQuestionsPage) {
    return <Navigate to="/DetailedQuestionsPage"/>
}


    return (
    <AppBar position="static" style={{backgroundColor: '#f3e5f5'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={CareerFinder} alt="CareerFinder4U Logo" style={{ height: 50, width: 50, paddingRight: '5px' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            CareerFinder4U
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            

            <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }}onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Button>
            <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }}onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
  
}