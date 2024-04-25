import React, { useState } from "react";
import './DetailedQuestions.css';
import { Button, Container, Row , Col, Form} from "react-bootstrap";


export function DetailedQuestions(): JSX.Element {
    const [question, setQuestion] = useState<string>("Imagine you are assigned to a project team in which you will be creating a marketing campaign for a new product launch. Which aspect of the project would you most enjoy focusing on?");
    const [selectedAnswers, setSelectedAnswers] = useState({
        Question1: '',
        Question2: ''
    });

    function changeQuestion(questionNum: number): void {
        if(questionNum === 1){
            setQuestion("Imagine you are assigned to a project team in which you will be creating a marketing campaign for a new product launch. Which aspect of the project would you most enjoy focusing on?");
        } else if(questionNum === 2){
            setQuestion("Describe the overarching goals, values, and aspirations that resonate with you. Consider the impact you aim to make and the principles that guide your actions and decisions.");
        } else if(questionNum === 3){
            setQuestion("Question 3");
        } else if(questionNum === 4){
            setQuestion("Question 4");
        } else if(questionNum === 5){
            setQuestion("Question 5");
        } else if(questionNum === 6){
            setQuestion("Question 6");
        } else if(questionNum === 7){
            setQuestion("Question 7");
        } else if(questionNum === 8){
            setQuestion("Question 8");
        }
    }

    const handleAnswerSelection = (questionName: string, answerId: string) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionName]: answerId
        });
        // check first to see if ID exists!
        /*
        const radioButton = document.getElementById(answerId);
        if (radioButton) {
            radioButton.style.backgroundColor = 'lightblue';
        }
        */
    };

    return (
        <div style={{ width: '100%' }}>
            <span>
                <div className="Question-row">
                <Container>
                <Row className="Horizontal-questions">
                <Col className="Question-1" xs={2}>
                    <Button onClick={() => changeQuestion(1)}>1</Button>
                    </Col>
                    <Col className="Question-2" xs={2}>
                    <Button onClick={() => changeQuestion(2)}>2</Button>
                    </Col>
                    <Col className="Question-3" xs={2}>
                    <Button onClick={() => changeQuestion(3)}>3</Button>
                    </Col>
                    <Col className="Question-4" xs={2}>
                    <Button onClick={() => changeQuestion(4)}>4</Button>
                    </Col>
                    <Col className="Question-5" xs={2}>
                    <Button onClick={() => changeQuestion(5)}>5</Button>
                    </Col>
                    <Col className="Question-6" xs={2}>
                    <Button onClick={() => changeQuestion(6)}>6</Button>
                    </Col>
                    <Col className="Question-7" xs={2}>
                    <Button onClick={() => changeQuestion(7)}>7</Button>
                    </Col>
                </Row>
                </Container>
            </div>

            <div className="Progress-bar">
                <div className="Progress-14">
                    <p> </p>
                </div>
                <p>Progress Bar</p>
            </div>

            <div className="Question-textbox">
                <p className="Question-textbox-text">{question}</p>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {question === "Imagine you are assigned to a project team in which you will be creating a marketing campaign for a new product launch. Which aspect of the project would you most enjoy focusing on?" && (
                <Container style={{ width: '75%', justifyContent: 'center' }}>
                    <Row style={{ display: 'flex'}}>
                        <Form.Check
                            type="radio"
                            name="Question1"
                            id="answer-1-a"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>Crafting a compelling message and storytelling to communicate the product's unique value, helping it resonate with the target audience.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question1', 'answer-1-a')}
                            checked={selectedAnswers.Question1 === 'answer-1-a'}
                        />
                        <Form.Check
                            type="radio"
                            name="Question1"
                            id="answer-1-b"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>Collaborating with creative teams to design visually appealing graphics, videos, and other multimedia content that capture attention and drive engagement.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question1', 'answer-1-b')}
                            checked={selectedAnswers.Question1 === 'answer-1-b'}
                        />
                    </Row>

                    <Row style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', height: 'auto' }}>
                        <Form.Check
                            type="radio"
                            name="Question1"
                            id="answer-1-c"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>Providing strategic direction and guidance to team members, ensuring alignment with overall campaign objectives and messaging consistency across different channels.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question1', 'answer-1-c')}
                            checked={selectedAnswers.Question1 === 'answer-1-c'}
                        />
                        <Form.Check
                            type="radio"
                            name="Question1"
                            id="answer-1-d"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>Conducting market research and consumer behavior analysis to identify key insights and opportunities, informing campaign strategies and tactics for maximum impact.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question1', 'answer-1-d')}
                            checked={selectedAnswers.Question1 === 'answer-1-d'}
                        />
                    </Row>
                </Container>
                )}

                {question === "Describe the overarching goals, values, and aspirations that resonate with you. Consider the impact you aim to make and the principles that guide your actions and decisions." && (   
                <Container style={{ width: '75%', justifyContent: 'center' }}>
                    <Row style={{ display: 'flex'}}>
                        <Form.Check
                            type="radio"
                            name="Question2"
                            id="answer-2-a"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>I want to be a leader in my field, pushing the boundaries of innovation and driving positive change. I want to help inspire others to make a difference in the world.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question2', 'answer-2-a')}
                            checked={selectedAnswers.Question2 === 'answer-2-a'}
                        />
                        <Form.Check
                            type="radio"
                            name="Question2"
                            id="answer-2-b"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>I am driven by the desire to make a meaningful impact on society and contribute to the greater good, using my skills to address challenges and create a more equitable and sustainable future.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question2', 'answer-2-b')}
                            checked={selectedAnswers.Question2 === 'answer-2-b'}
                        />
                    </Row>

                    <Row style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', height: 'auto' }}>
                        <Form.Check
                            type="radio"
                            name="Question2"
                            id="answer-2-c"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>I am committed to personal growth, continuously challenging myself to learn, evolve, striving for excellence and mastery in my craft. I believe learning is lifelong.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question2', 'answer-2-c')}
                            checked={selectedAnswers.Question2 === 'answer-2-c'}
                        />
                        <Form.Check
                            type="radio"
                            name="Question2"
                            id="answer-2-d"
                            label={<span style={{ display: 'inline-block', textAlign: 'center' }}>I want to provide strategic direction and guidance to team members, ensuring completion of objectives and consistency across our projects.</span>}
                            inline
                            className="custom-radio"
                            onChange={() => handleAnswerSelection('Question2', 'answer-2-d')}
                            checked={selectedAnswers.Question2 === 'answer-2-d'}
                        />
                    </Row>
                </Container>
                    )}
                </div>
                <div style={{marginBottom: '50px', marginTop: '20px'}}>
                    <Button>Get Answers</Button>
                </div>
            </span>
        </div>
    );
}
export default DetailedQuestions; 

