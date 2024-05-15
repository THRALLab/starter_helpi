import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import { Box, CircularProgress, CircularProgressProps } from '@mui/material';


import { Navigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import AdbIcon from '@mui/icons-material/Adb';

export function DetailedQuestionsPage(props: CircularProgressProps): JSX.Element {
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
    font-weight: 500;
    font-style: normal;
    `}
    `;

    const questions = [
        "What are you particularly good at?",
        "What are you most passionate about?",
        "What would make my life feel the most meaningful?",
        "What kind of impact would I want to have on the world with my work?",
        "What do I enjoy most in life? What do I enjoy so much that I lose track of time?",
        "What fields am I most interested in?",
        "How can I add value to the marketplace? With what skills?"
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Array<string>>(Array(questions.length).fill(''));
    const [submitted, setSubmitted] = React.useState<boolean>(false);
    const [response, setResponse] = useState<React.ReactNode | string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [goToHomePage, setGoToHomePage] = useState(false);
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);

   

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = e.target.value;
        setAnswers(newAnswers);
    };

    const handleSubmitAnswers = async () => {
        

        if (answers.some(answer => answer.trim() === "")) {
            setError("Please answer all questions before submitting.");
            return;
        }

        setSubmitted(true);

        setLoading(true);
        setError("");

        try {
            const messages = questions.map((question, index) => ({
                role: "system",
                content: question
            })).concat(answers.map(answer => ({
                role: "user",
                content: answer
            })));

            const prompt = "Based on the answers provided, suggest five suitable career options. For each option, provide a brief explanation of why it would be a good fit, a bulleted list of 3 potential companies that match the user's profile, and the general salary range for the role. Explain why each career and company would be well-suited to the user's skills and preferences.";
            let apiKey = localStorage.getItem('MYKEY');
            
            console.log('API Key:', apiKey);

            if (apiKey){
                apiKey = apiKey.replace(/^"(.*)"$/, '$1')
            }

            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [...messages, { role: "system", content: prompt }]
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Request Headers:', {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            });

            const formattedResponse = response.data.choices[0].message.content.split('\n').map((item: string, index: number) => (<p key={index}>{item}</p>));
            setResponse(formattedResponse);
        } catch (error) {
            console.error('Error fetching GPT-3 response:', error);
            setError("Failed to fetch response from OpenAI");
        }
        setLoading(false);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmitAnswers();
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };


    if (goToHomePage) {
        return <Navigate to="/" />;
    }


    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }
    return (
        <div>
            <AppBar position="static" style={{backgroundColor: '#f3e5f5'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
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
            

            <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }}onClick={() => {setGoToHomePage(true)}}>Home</Button>
            <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }}onClick={() => {setGoToBasicQuestionsPage(true)}}>Detailed Questions Page</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
            <h1 className='padding3'>Detailed Questions Page</h1>
            <main className="padding2">
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40vh', // Adjust this value according to your layout
                padding: '30vh'
            }}>
            <Card variant="plain" sx={{ width: 1000, height: 400}}>
            <CardContent>
  {!submitted && (
    <div>
      <Typography style={{ paddingTop: '20px' }} level="h4">
        <div className='poppins-regular'>Question {currentQuestion + 1} of {questions.length}</div>
      </Typography>
      <div style={{ paddingTop: '15px' }}>
        <ProgressBar
          min={0}
          now={(currentQuestion + 1) * (100 / questions.length)}
          max={100}
          label={`${Math.round(((currentQuestion + 1) * (100 / questions.length)))}%`}
          visuallyHidden={true}
          striped={currentQuestion >= 0}
          animated={currentQuestion >= 0}
          variant="info"
          style={{ width: '100%' }}
        />
      </div>
      <Typography style={{ alignItems: 'center', padding: '5vh' }}>
        <div className='poppins-regular'>{questions[currentQuestion]}</div>
      </Typography>
      <div style={{
        paddingBottom: '3vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Input
          sx={{
            width: '500px',
            height: '75px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '--Input-focusedInset': 'var(--any, )',
            '--Input-focusedThickness': '0.25rem',
            '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
            '&::before': {
              transition: 'box-shadow .15s ease-in-out',
            },
            '&::placeholder': {
              fontFamily: "Poppins",
              fontSize: 400,
            },
            '&:focus-within': {
              borderColor: '#86b7fe',
            }
          }}
          variant="outlined"
          placeholder="Type in here…"
          value={answers[currentQuestion]}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )}
  
  {!submitted && (
    <div style={{ padding: '4vh', display: 'flex', justifyContent: 'center' }}>
      {currentQuestion > 0 && (
        <StyledButton onClick={handlePreviousQuestion} style={{ margin: '0 auto' }}>PREVIOUS QUESTION</StyledButton>
      )}
      <StyledButton onClick={handleNextQuestion} style={{ margin: '0 auto' }}>
        {currentQuestion === questions.length - 1 ? 'SUBMIT ANSWERS' : 'NEXT QUESTION'}
      </StyledButton>
    </div>
  )}

  {loading && (
    <div className='padding8'>
      Loading...
      <div style={{ paddingTop: '10px' }}>
        <React.Fragment>
          <svg width={0} height={0}>
            <defs>
              <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e01cd5" />
                <stop offset="100%" stopColor="#1CB5E0" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </React.Fragment>
      </div>
    </div>
  )}

  {error && <Typography style={{ color: 'red' }}>{error}</Typography>}
  
  {!loading && response && Array.isArray(response) && (
    <div style={{ maxHeight: '370px', overflowY: 'auto' }}>
      {response.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )}
</CardContent>
            </Card>
            </div>
            </main>
        </div>

    );
}