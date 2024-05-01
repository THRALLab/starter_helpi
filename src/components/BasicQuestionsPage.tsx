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
import Grow from '@mui/material/Grow';

export function BasicQuestionsPage(): JSX.Element {
    interface Responses {
        [key: number]: string
    }

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
    { id: 1, question: "How do you prefer to spend your spare time?" },
    { id: 2, question: "Choose a school subject you excelled in or enjoyed the most." },
    { id: 3, question: "What kind of problems do you enjoy solving?" },
    { id: 4, question: "Which type of work environment do you prefer?" },
    { id: 5, question: "How do you prefer to contribute to a team?" },
    { id: 6, question: "What motivates you the most in a job?" },
    { id: 7, question: "What role do you naturally find yourself taking in group settings?" }
]; 

   
    const [goToHomePage, setGoToHomePage] = React.useState(false);
    const [inputText, setInputText] = React.useState("");
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);
    const [displayFinishButton, setDisplayFinishButton] = React.useState(false);
    const [displayFinalResults, setDisplayFinalResults] = React.useState(false);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [responses, setResponses] = React.useState<Responses>({});
    const [checked, setChecked] = React.useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
      const { value } = e.target;
      setResponses({ ...responses, [questions[currentQuestion].id]: value });
    };
      
    const handlePreviousAnswerDisplay = () => {
        
        setInputText(responses[questions[currentQuestion].id])
    }

    const handleCurrentQuestion = () => {
        setInputText("");
        const currentQuestionIndex = currentQuestion + 1;

            if (currentQuestionIndex < questions.length) {
                setCurrentQuestion(currentQuestionIndex)
            }
    
            if (currentQuestionIndex === questions.length - 1) {
                setDisplayFinishButton(true);
            }
    
    }

    const handlePreviousQuestion = () => {
        setInputText("");
        const previousQuestionIndex = currentQuestion - 1;
    
        if (previousQuestionIndex >= 0) {
            setCurrentQuestion(previousQuestionIndex);
        }
    
        if (previousQuestionIndex !== questions.length - 1) {
            setDisplayFinishButton(false);
        }
    };

    const handleDisplayFinalResults = () => {
        setChecked(true);
        setDisplayFinalResults(true);
        setDisplayFinishButton(false);
    }

    const handleRetakeTest = () => {
        setCurrentQuestion(0); // Reset current question to start from the beginning
        setDisplayFinalResults(false); // Hide final results
        setInputText(""); // Clear input text if any
        // Reset any other state variables as needed
        setResponses({});
    };

    const handleClearText = () => {
        setInputText("");
        setResponses({...responses, [questions[currentQuestion].id]: ""})
    };

    const handleGoToHomePage = () => {
        setGoToHomePage(true);
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
    }

    if (goToBasicQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
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
                <Nav.Link onClick={() => {setGoToBasicQuestionsPage(true)}}>Detailed Questions Page</Nav.Link>
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
            <h1 className='padding3'>Basic Questions Page</h1>
            <p className="text-muted">This basic career assessment is hand crafted to help comprehend preferences and strengths that you have and which specific careers they are best suited for. You'll gain insights into the types of careers and opportunities that may suit you best. Coming soon. </p>
            
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
                            <FormControl>
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
                                    onClick={handlePreviousAnswerDisplay}
                                    onChange={handleInputChange}

                                    //Show error when input is empty
                                  

                                    />
                                    
                                </FormControl>
                                {/*<p>{questions[currentQuestion].id}</p>
                                <p>:</p>
                                <p>{responses[questions[currentQuestion].id]}</p>*/}
                                {/*<p>{inputText}</p>*/}
                                
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

                        <Grow in={checked}
                        {...(checked ? { timeout: 1500 } : {})}>
                            <div>{displayFinalResults && <div>Final Results!</div>}</div>
                        </Grow>

                        {displayFinalResults && (
                            <div style={{ paddingTop: '15.5rem', textAlign: 'center' }}> {/* Adjust paddingTop to lower the button */}
                            <div style={{ marginBottom: '15vh' }}><StyledButton onClick={handleRetakeTest}
                             // Adjust marginBottom to lower the button
                            >Retake Test
                            </StyledButton></div>
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