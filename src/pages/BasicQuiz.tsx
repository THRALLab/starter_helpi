import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MC_SINGLE_RESPONSE } from "../Components/MC_SINGLE_RESPONSE";
import { MC_MULTI_RESPONSE } from "../Components/MC_MULTI_RESPONSE";
import { QuestionProps } from "../Interfaces/QuestionProps";
import { QuizProps } from "../Interfaces/QuizProps";
import { DisplayQuestion}

const quiz1: QuizProps = {
    id: "first-quiz",
    name: "Test Quiz",
    questions: [
        {
            type: "MC_SINGLE_RESPONSE",
            question: "I am _____ years old.",
            options: ["1","2","3","4","5"]
        },
        {
            type: "MC_MULTI_RESPONSE",
            question: "I enjoy learning about _____.",
            options: ["Math","History","Science","Writing","Arts"]
        }
    ]
}

export function BasicQuiz(): JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string[]>([]);
    const [secondAnswer, setSecondAnswer] = useState<string[]>([]);

    function submitQuiz() {
    }

    return (
        <><div
            style={{ justifyContent: "left" }}
        >
            <h1>{quiz1.name}</h1>
            {
                quiz1.questions.map((question: QuestionProps) => (
                    <{question.type}
                    ></{question.type}>
                ))
            }
        </div>
        
        <Container fluid>
                <Row>
                    <Col style={{ justifyContent: 'left' }}>
                        <MC_SINGLE_RESPONSE
                            question={question1}
                            choices={options1}
                            answer={firstAnswer}
                            setAnswer={setFirstAnswer}
                        ></MC_SINGLE_RESPONSE>
                    </Col>
                    <Col>
                        <MC_MULTI_RESPONSE
                            question={question2}
                            choices={options2}
                            answers={secondAnswer}
                            setAnswers={setSecondAnswer}
                        ></MC_MULTI_RESPONSE>
                    </Col>
                </Row>
            </Container></>
    )
}