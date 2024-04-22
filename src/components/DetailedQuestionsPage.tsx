import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/joy/FormControl';

export function DetailedQuestionsPage(): JSX.Element {
  

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
    `}
  `;

  const StyledButton2 = styled(Button)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: #51bc51;
    color: #FFF;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: #1f7a1f;
      transform: scale(1.3);
    }
    `}
  `;

    const questions = [
		{
			id: 1,
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3'},
				{ answerText: 'Option 4'},
			],
		},
		{
			id: 2,
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
		{
			id: 3,
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
		{
			id: 4,
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
        {
			id: 5,
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
        {
			id: 6,
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
        {
			id: 7,
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		}
	];    

    const [goToHomePage, setGoToHomePage] = React.useState(false);
    const [inputText, setInputText] = React.useState("");
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [displayFinishButton, setDisplayFinishButton] = React.useState(false);
    const [displayFinalResults, setDisplayFinalResults] = React.useState(false);
        const [currentQuestion, setCurrentQuestion] = React.useState(0);


    //const [responses, setResponses] = React.useState({});



    const handleCurrentQuestion = () => {
        const currentQuestionIndex = currentQuestion + 1;

            if (currentQuestionIndex < questions.length) {
                setCurrentQuestion(currentQuestionIndex)
            }
    
            if (currentQuestionIndex === questions.length - 1) {
                setDisplayFinishButton(true);
            }
    
    }

    const handlePreviousQuestion = () => {
        const previousQuestionIndex = currentQuestion - 1;
    
        if (previousQuestionIndex >= 0) {
            setCurrentQuestion(previousQuestionIndex);
        }
    
        if (previousQuestionIndex !== questions.length - 1) {
            setDisplayFinishButton(false);
        }
    };

    const handleDisplayFinalResults = () => {
        setDisplayFinalResults(true);
        setDisplayFinishButton(false);
    }

    const handleRetakeTest = () => {
        setCurrentQuestion(0); // Reset current question to start from the beginning
        setDisplayFinalResults(false); // Hide final results
        setInputText(""); // Clear input text if any
        // Reset any other state variables as needed
    };

    const handleClearText = () => {
        setInputText("");
    };


    const handleGoToHomePage = () => {
        setGoToHomePage(true);
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
    }

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>CareerFinder4U</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                <Nav.Link onClick={handleGoToHomePage}>Home</Nav.Link>
                <Nav.Link onClick={() => {setGoToBasicQuestionsPage(true)}}>Basic Questions Page</Nav.Link>
                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <p></p>
            <h1 className='padding3'>Detailed Questions Page</h1>
            <p className="text-muted">The detailed career assessment goes in depth to plan out your professional preferences, skills, and motivators. Completing this assessment will provide you with a complex overview of career paths that align with your detailed profile. Coming soon.  </p>
            
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40vh', // Adjust this value according to your layout
                padding: '30vh'
            }}>
                
                <Card variant="plain" sx={{ width: 1000, height: 400}}// Adjust this value according to your layout
                >
                    <CardContent>
                        {!displayFinalResults && <Typography level="title-md">Question {currentQuestion+1}/{questions.length}</Typography>}
                        {!displayFinalResults && <ProgressBar
                            min={0} // Minimum value progress can begin from
                            now={(currentQuestion + 1) * (100 / questions.length)} // Current value of progress
                            max={100} // Maximum value progress can reach
                            label={`${Math.round(((currentQuestion + 1) * (100 / questions.length)))}%`} // Show label that represents visual percentage
                            visuallyHidden={true} // Show the label visually
                            striped={currentQuestion >= 0} // Uses a gradient to create a striped effect when the progress is at least 0%
                            animated={currentQuestion >= 0} // Animate the stripes from right to left when the progress is at least 0%
                            variant="info" // Sets the background class of the progress bar to red
                            style={{ width: '100%'}}
                            >
                        </ProgressBar>}
                        <Typography style={{alignItems: 'center', padding: '5vh'}}>{!displayFinalResults && <div>
                        <p>{questions[currentQuestion].id}</p>
                        <div style={{paddingBottom: '1vh', display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            {/*<input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />*/}
                            <FormControl error={!inputText}>
                            <Input sx={{width: '500px', height: '75px', display: 'flex',
                                    justifyContent: 'center',

                                    alignItems: 'center',
                                    '--Input-focusedInset': 'var(--any, )',
                                    '--Input-focusedThickness': '0.25rem',
                                    '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
                                    '&::before': {
                                      transition: 'box-shadow .15s ease-in-out',
                                    },
                                    '&:focus-within': {
                                      borderColor: '#86b7fe',
                                    }}} 
                                    variant="outlined" placeholder="Type in here…" value={inputText} 
                                    required
                                    onChange={(e) => {
                                    setInputText(e.target.value);
                                    }}
                                    defaultValue="Please enter an answer."
                                    />
                                </FormControl>
                        </div>
                        <div style={{paddingTop: '1vh'}}><StyledButton onClick={handleClearText}>Reset</StyledButton></div>
                        
                        </div>}

                        {/* Next and Previous buttons */}
                        {!displayFinishButton && !displayFinalResults && (
                            <div style={{ padding: '8vh', display: 'flex', justifyContent: 'center' }}>
                            {currentQuestion > 0 && (<StyledButton onClick={handlePreviousQuestion} style={{ margin: '0 auto' }}>Previous Question</StyledButton>)}
                            <StyledButton onClick={handleCurrentQuestion} style={{ margin: '0 auto' }}>Next Question</StyledButton>
                            </div>
                        )}

                        {displayFinalResults && <div>Final Results!</div>}

                        {displayFinalResults && (
                            <div style={{ paddingTop: '15.5rem', textAlign: 'center' }}> {/* Adjust paddingTop to lower the button */}
                            <StyledButton onClick={handleRetakeTest}
                            style={{ marginBottom: '15.5rem' }} // Adjust marginBottom to lower the button
                            >Retake Test
                            </StyledButton>
                            </div>
                        )}

                        {/* Finish and Previous buttons */}
                        {displayFinishButton && !displayFinalResults && (
                            <div style={{ padding: '8vh', display: 'flex', justifyContent: 'center' }}>
                            <StyledButton onClick={handlePreviousQuestion} style={{ margin: '0 auto' }}>Previous Question</StyledButton>
                            <StyledButton2 color='success' onClick={handleDisplayFinalResults} style={{ margin: '0 auto' }}>Finish & Get Results</StyledButton2>
                            </div>
                        )}

                        <p></p>
                        </Typography>
                    </CardContent>
                </Card>
                <p></p>
            </div>  
        </div>
    );
}