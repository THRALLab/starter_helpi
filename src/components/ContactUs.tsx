import React from 'react';
import { Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import CareerFinder from '../images/CareerFinder.png';

export function ContactUs(): JSX.Element {
  //Contact us page

  //states to allow you to go to home page, basic questions page, detailed questions page
    const [goToHomePage, setGoToHomePage] = React.useState(false);
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);

    const handleGoToHomePage = () => {
        setGoToHomePage(true);
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
    }

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
    }

    return (
        <div>
          {/*Card layout for contact info */}
            <AppBar position="static" style={{backgroundColor: '#f3e5f5'}}>
              {/*Appbar with links to basic question page detailed questions page and home page */}
                <Toolbar disableGutters>
                <img src={CareerFinder} alt="CareerFinder4U Logo" style={{ height: 50, width: 50, paddingRight: '5px', marginLeft: '24px' }} />
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
                    <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }} onClick={handleGoToHomePage}>Home</Button>
                    <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }} onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Button>
                    <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }} onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>
                </Toolbar>
            </AppBar>


            {/*Contact info */}
            <p></p>
            <h1 className='padding3'>Contact Us</h1>
            <p></p>
            <main className='padding2'>
                <div className="box" style={{ width: '50%', margin: 'auto', padding: '20px', minHeight: '450px' }}>
                    <p></p>
                    <h3>Contact Information:</h3>
                    <div style={{ marginBottom: '70px' }}>
                        <strong>Email:</strong> gillad@udel.edu <br />
                    </div>

                    <div style={{ marginBottom: '70px' }}>
                        <strong>Email:</strong> rshaik@udel.edu <br />
                    </div>

                    <div style={{ marginBottom: '70px' }}>
                        <strong>Email:</strong> hbagga@udel.com <br />
                    </div>

                    <div style={{ marginBottom: '70px' }}>
                        <strong>Email:</strong> thernd@udel.edu <br />
                    </div>

                    <p></p>
                </div>
            </main>
        </div>
    );
};
