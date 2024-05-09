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
                    <Typography level="h4">Question {currentQuestion + 1}/{questions.length}</Typography>
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
                        </ProgressBar>}
                    <Typography style={{alignItems: 'center', padding: '5vh'}}>{questions[currentQuestion]}</Typography>
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
                                    variant="outlined" placeholder="Type in here…"
                        value={answers[currentQuestion]}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                        {currentQuestion > 0 && <StyledButton onClick={handlePreviousQuestion}>Previous Question</StyledButton>}
                        <StyledButton onClick={handleNextQuestion}>
                            {currentQuestion === questions.length - 1 ? 'Submit Answers' : 'Next Question'}
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