import React, { useState } from 'react';
import { Container, Nav, Navbar, ProgressBar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import CareerFinder from '../images/CareerFinder.png';

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
    const [response, setResponse] = useState<React.ReactNode | string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [goToHomePage, setGoToHomePage] = useState(false);
    const [goToBasicQuestionsPage, setGoToBasicQuestionsPage] = React.useState(false);

    if (goToBasicQuestionsPage) {
        return <Navigate to="/BasicQuestionsPage"/>
    }

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

            const prompt = "Based on the answers provided, suggest five suitable career options and explain why each would be a good fit.";

            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [...messages, { role: "system", content: prompt }]
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
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

    const handleGoToHomePage = () => {
        setGoToHomePage(true);
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
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
                        </Nav>
                        <Nav className="ms-auto"> {/* Use ms-auto to push items to the right */}
                        <img src={CareerFinder} alt="CareerFinder4U Logo" style={{ height: 50, width: 50 }} />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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
                    <Typography style={{paddingTop: '20px'}} level="h4">Question {currentQuestion + 1} of {questions.length}</Typography>
                    <div style={{paddingTop: '15px'}}>
                    {<ProgressBar
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
                        </ProgressBar>}</div>
                    <Typography style={{alignItems: 'center', padding: '5vh'}}><div className='poppins-regular'>{questions[currentQuestion]}</div></Typography>
                    <div style={{paddingBottom: '3vh', display: 'flex',
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
                                    }, '&::placeholder': {
                                        fontFamily: "Poppins",
                                        fontSize: 400,
                                        
                                    },
                                    '&:focus-within': {
                                      borderColor: '#86b7fe',
                                    }}}
                                    variant="outlined" placeholder="Type in here…"
                                    
                                    
                        value={answers[currentQuestion]}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div style={{ padding: '4vh', display: 'flex', justifyContent: 'center' }}>
                        {currentQuestion > 0 && <StyledButton onClick={handlePreviousQuestion} style={{ margin: '0 auto' }}>PREVIOUS QUESTION</StyledButton>}
                        <StyledButton onClick={handleNextQuestion} style={{ margin: '0 auto' }}>
                            {currentQuestion === questions.length - 1 ? 'SUBMIT ANSWERS' : 'NEXT QUESTION'}
                        </StyledButton>
                    </div>
                    {loading && <Typography>Loading...</Typography>}
                    {error && <Typography style={{ color: 'red' }}>{error}</Typography>}
                    {!loading && response && Array.isArray(response) && response.map(line => line)}
                </CardContent>
            </Card>
            </div>
            </main>
        </div>

    );
}