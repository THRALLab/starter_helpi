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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import CareerFinder from '../images/CareerFinder.png';

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
  const [displayFinalResults, setDisplayFinalResults] = useState(false);
  const [gptResponse, setGptResponse] = useState<string>('');
  const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);


const handleRetakeTest = () => {
  setCurrentQuestion(0); // Reset current question to start from the beginning
  setDisplayFinalResults(false); // Hide final results
  setSelectedAnswers(new Array(questions.length).fill('')); // Reset selected answers array
  setGptResponse(''); // Clear GPT response
  // Reset any other state variables as needed
};

const RetakeTestButton = styled(Button)`
  ${({ theme }) => `
    cursor: pointer;
    background-color: #81c784; // Green color
    color: #FFF;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: #66bb6a; // Darker green color on hover
      transform: scale(1.3);
    }
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
  `}
`;

const PreviousButton = styled(Button)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: #e57373; /* Red color */
  color: #FFF;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: #d32f2f; /* Dark red color on hover */
    transform: scale(1.1);
  }
  `}
`;

const FinishButton = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: #42a5f5; /* Blue color */
    color: #FFF;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: #1e88e5; /* Darker blue color on hover */
      transform: scale(1.3);
    }
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    `}
  `;

  const handleAnswerOptionClick = (answerText: string) => {
    //updating answers
    const updatedAnswers = [...selectedAnswers]; 
    updatedAnswers[currentQuestion] = answerText;
    setSelectedAnswers(updatedAnswers);


    //moving to next question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
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

  const handleGetAnswers = async () => {
    const prompt = selectedAnswers.join(' ');
    let apiKey = localStorage.getItem('MYKEY');

    console.log('API Key:', apiKey);

    //Removing extra characters when key is retrieved from local storage so that API key is not invalid, logging error if API key is not inputted 
    if (apiKey){
        apiKey = apiKey.replace(/^"(.*)"$/, '$1')
    } else {
      console.error("API key is missing. Make sure to input the API key in the footer.");
      return;
    }
  
    //Sending request to OpenAI with prompt, defining roles for system and user*/
    try {
      console.log('Sending request to OpenAI with prompt:', prompt);
      // Make an asynchronous POST request to OpenAI's API endpoint
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
         // Provide the model and messages for the chat completion request
        model: "gpt-3.5-turbo",
        // System message to set the context for the API
        messages: [{ role: "system", content: "Do research on career that best suits me based on these questions. Only give the 5 positions and only the position name" }, 
        // User message containing the prompt
        { role: "user", content: prompt }],
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        }
      });
  
      console.log('Response from OpenAI:', response.data); 
       // Check if the response contains valid choices
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
  
  //Navigate to home page or detailed queston page when button clicked
  if (goToHomePage) {
    return <Navigate to="/" />;
  }

  if (goToDetailedQuestionsPage) {
    return <Navigate to="/DetailedQuestionsPage"/>
  }

  return (
    <div>
  
    {/*Navbar for the page*/}
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

        </Toolbar>
      </Container>
    </AppBar>


  {/*User interface for basic quesrions*/}
  <h1 className='padding7'>Basic Questions Page</h1>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',zIndex:'-1px' }}>
    <div className='padding5'style={{flexDirection: 'column'}}>
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
              <PreviousButton onClick={handlePreviousQuestion}>Previous Question</PreviousButton>
            )}
            {currentQuestion === questions.length - 1 && (
              <FinishButton onClick={handleGetAnswers}>Finish & Get Results</FinishButton>
            )}
          </>
        ) : (
          <>
            <Typography>Your Results:</Typography>
            <Typography>{gptResponse}</Typography>
            <StyledButton onClick={handleGoToHomePage}>Home</StyledButton>
            <RetakeTestButton onClick={handleRetakeTest}>Retake Test</RetakeTestButton>
          </>
        )}
      </CardContent>
    </Card>
    </div>
  </div>
</div>
  )
        }