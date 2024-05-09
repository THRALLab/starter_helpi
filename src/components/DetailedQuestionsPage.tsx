import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
            <Card variant="outlined" sx={{ maxWidth: 800, margin: "auto", mt: 5 }}>
                <CardContent>
                    <Typography level="h4">Question {currentQuestion + 1}/{questions.length}</Typography>
                    <Typography>{questions[currentQuestion]}</Typography>
                    <Input
                        value={answers[currentQuestion]}
                        onChange={handleInputChange}
                        placeholder="Type your answer here..."
                        sx={{ width: '100%', mb: 2 }}
                    />
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
    );
}
