import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import AdbIcon from '@mui/icons-material/Adb';

export function BasicQuestionsPage(): JSX.Element {
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
    {
        questionText: 'How do you prefer to spend your spare time??',
        answerOptions: [
            { answerText: 'Reading books or articles 📚' },
            { answerText: 'Exploring nature or traveling 🌲' },
            { answerText: 'Solving puzzles or playing strategy games ♟️' },
            { answerText: 'Creating art or DIY projects 🖌️' },
            { answerText: 'Volunteering or helping at community events 🤝' },
        ],
    },
    {
        questionText: 'Choose a school subject you excelled in or enjoyed the most.',
        answerOptions: [
            { answerText: 'Literature or languages 📖' },
            { answerText: 'Biology or environmental science 🌱' },
            { answerText: 'Mathematics or computer science 💻' },
            { answerText: 'Art or music 🎨🎵' },
            { answerText: 'Social studies or psychology 🧠' },
        ],
    },
    {
        questionText: 'What kind of problems do you enjoy solving?',
        answerOptions: [
            { answerText: 'Ones that involve words or communication issues 📝' },
            { answerText: 'Practical, hands-on challenges 🔧' },
            { answerText: 'Logical or complex theoretical problems 🧩' },
            { answerText: 'Creative challenges that require an artistic solution 🎭' },
            { answerText: 'Social issues or conflicts between people 🌍' },
        ],
    },
    {
        questionText: 'Which type of work environment do you prefer?',
        answerOptions: [
            { answerText: 'Quiet, solitary, and focused 🤫' },
            { answerText: 'Outdoors and variable 🌤️' },
            { answerText: 'Structured, with clear rules and goals 🏢' },
            { answerText: 'Flexible and creative 🎨' },
            { answerText: 'Collaborative and team-oriented 🤝' },
        ],
    },
    {
        questionText: 'How do you prefer to contribute to a team?',
        answerOptions: [
            { answerText: 'By writing, editing, or documenting 📄' },
            { answerText: 'By leading or managing resources 🚀' },
            { answerText: 'By analyzing data or designing systems 🔍' },
            { answerText: 'By generating ideas or creating visuals ✒️' },
            { answerText: 'By mediating conflicts or organizing group efforts 🕊️' },
        ],
    },
    {
        questionText: 'What motivates you the most in a job?',
        answerOptions: [
            { answerText: 'The opportunity to learn and apply new information 📘' },
            { answerText: 'The chance to make a tangible impact 🌍' },
            { answerText: 'Challenges that push your intellectual limits 🚀' },
            { answerText: 'The ability to express yourself creatively 🎭' },
            { answerText: 'Working with diverse groups of people 🌐' },
        ],
    },
    {
        questionText: 'What role do you naturally find yourself taking in group settings?',
        answerOptions: [
            { answerText: 'The researcher or the one who gathers information 🔎' },
            { answerText: 'The hands-on practical problem solver 🛠️' },
            { answerText: 'The strategist or planner 📈' },
            { answerText: 'The designer or the one who adds a creative touch 🎨' },
            { answerText: 'The coordinator or the leader who oversees the project 🌟' },
        ],
    }
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [goToHomePage, setGoToHomePage] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayFinishButton, setDisplayFinishButton] = useState(false);
  const [displayFinalResults, setDisplayFinalResults] = useState(false);
  const [gptResponse, setGptResponse] = useState<string>('');
  const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);
    //const [goToHomePage, setGoToHomePage] = React.useState(false);

    

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

    const handleRetakeTest = () => {
      setCurrentQuestion(0); // Reset current question to start from the beginning
      setDisplayFinalResults(false); // Hide final results
      setSelectedAnswers(new Array(questions.length).fill('')); // Reset selected answers array
      setGptResponse(''); // Clear GPT response
      // Reset any other state variables as needed
  };

  const handleAnswerOptionClick = (answerText: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answerText;
    setSelectedAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setDisplayFinishButton(true);
    }
  };

  const handlePreviousQuestion = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const handleGoToHomePage = () => {
    setGoToHomePage(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDisplayFinalResults = () => {
    setDisplayFinalResults(true);
    setDisplayFinishButton(false);
  };

  const handleGetAnswers = async () => {
    const prompt = selectedAnswers.join(' ');
    let apiKey = localStorage.getItem('MYKEY');

    console.log('API Key:', apiKey);

    if (apiKey){
        apiKey = apiKey.replace(/^"(.*)"$/, '$1')
    } else {
      console.error("API key is missing. Make sure to input the API key in the footer.");
      return;
    }
  
    try {
      console.log('Sending request to OpenAI with prompt:', prompt);
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "Do research on career that best suits me based on these questions. Only give the 5 positions and only the position name" }, { role: "user", content: prompt }],
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        }
      });
  
      console.log('Response from OpenAI:', response.data); 
      if (response.data.choices && response.data.choices.length > 0) {
        setGptResponse(response.data.choices[0].message.content);
        setDisplayFinalResults(true); 
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error("Error when calling OpenAI:", error);
    }
  };
  
  if (goToHomePage) {
    return <Navigate to="/" />;
  }

  if (goToDetailedQuestionsPage) {
    return <Navigate to="/DetailedQuestionsPage"/>
}

  return (
    <div>
  
  <AppBar position="static" style={{backgroundColor: '#f3e5f5'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            

            <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }}onClick={() => {setGoToHomePage(true)}}>Home</Button>
            <Button sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Poppins' }}onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Button>
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
  <h1 className='padding7'>Basic Questions Page</h1>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',zIndex:'-1px' }}>
    <div className='padding5' >
    <Card variant="plain" sx={{ width: 600, height: 'auto' }}>
      <CardContent>
        {!displayFinalResults ? (
          <>
            <Typography><div className='poppins-regular'>Question {currentQuestion + 1} of {questions.length}</div></Typography>
            <ProgressBar
              min={0} // Minimum value progress can begin from
              now={(currentQuestion + 1) * (100 / questions.length)} // Current value of progress
              max={100} // Maximum value progress can reach
              label={`${Math.round(((currentQuestion + 1) * (100 / questions.length)))}%`} // Show label that represents visual percentage
              visuallyHidden={true} // Show the label visually
              striped={currentQuestion >= 0} // Uses a gradient to create a striped effect when the progress is at least 0%
              animated={currentQuestion >= 0} // Animate the stripes from right to left when the progress is at least 0%
              variant="info" // Sets the background class of the progress bar to red
              
              style={{ margin: '20px 0', width: '100%' }}
            />
            <Typography style={{paddingTop: '10px', paddingBottom: '20px'}}><div className='poppins-regular'>{questions[currentQuestion].questionText}</div></Typography>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              
              <StyledButton 
                key={index} 
                onClick={() => handleAnswerOptionClick(option.answerText)} 
                style={{ 
                  margin: '10px',
                  backgroundColor: selectedAnswers[currentQuestion] === option.answerText ? '#ab47bc' : '#ce93d8',
                }}
              >
                {option.answerText}
              </StyledButton>
              
            ))}
            {currentQuestion > 0 && (
              <StyledButton onClick={handlePreviousQuestion}>Previous Question</StyledButton>
            )}
            {currentQuestion === questions.length - 1 && (
              <StyledButton onClick={handleGetAnswers}>Finish & Get Results</StyledButton>
            )}
          </>
        ) : (
          <>
            <Typography level="h4">AI Generated Summary:</Typography>
            <Typography>{gptResponse}</Typography>
            <StyledButton onClick={handleGoToHomePage}>Home</StyledButton>
            <StyledButton onClick={handleRetakeTest}
                           // Adjust marginBottom to lower the button
                            >Retake Test
                            </StyledButton>
          </>
        )}
      </CardContent>
    </Card>
    </div>
  </div>
</div>
  )
        }