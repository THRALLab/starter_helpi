import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import ProgressBar from 'react-bootstrap/ProgressBar';


export function DetailedQuestionsPage(): JSX.Element {
    const questions = [
		{
			questionText: 'Question 1',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3'},
				{ answerText: 'Option 4'},
			],
		},
		{
			questionText: 'Question 2',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
		{
			questionText: 'Question 3',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
		{
			questionText: 'Question 4',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
        {
			questionText: 'Question 5',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
        {
			questionText: 'Question 6',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
        {
			questionText: 'Question 7',
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

    const handleCurrentQuestion = () => {
        const currentQuestionIndex = currentQuestion + 1;

            if (currentQuestionIndex < questions.length) {
                setCurrentQuestion(currentQuestionIndex)
            }
    
            if (currentQuestionIndex === questions.length - 1) {
                setDisplayFinishButton(true);
            }
    
    }

    const handleDisplayFinalResults = () => {
        setDisplayFinalResults(true);
        setDisplayFinishButton(false);
    }

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
                        <Typography level="title-md">Question {currentQuestion+1}/{questions.length}</Typography>
                        <ProgressBar
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
                        </ProgressBar>
                        <Typography style={{alignItems: 'center', padding: '5vh'}}>{!displayFinalResults && <div>
                        <p>{questions[currentQuestion].questionText}</p>
                        <div style={{paddingBottom: '1vh', display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            {/*<input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />*/}
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
                                    
                        }} />
                        </div>
                        <div style={{paddingTop: '1vh'}}><Button onClick={handleClearText}>Reset</Button></div>
                        
                        </div>}
                        {(!displayFinishButton && !displayFinalResults)&& <div style={{padding: '12vh'}}><Button onClick={handleCurrentQuestion}>Next Question</Button></div>}
            
                        {displayFinalResults && <div>Final Results!</div>}
                        {(displayFinishButton) && <div style={{padding: '12vh'}}><Button color='success' onClick={handleDisplayFinalResults}>Finish & Get Results</Button></div>}
                        <p></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>  
        </div>
    );
}