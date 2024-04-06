import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";
import { MC_MULTI_RESPONSE } from "./MC_MULTI_RESPONSE";
import { MultiResponseQuestionProps } from "../Interfaces/MultiResponseQuestionProps";

export function BasicQuiz(): JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    const [secondAnswer, setSecondAnswer] = useState<string[]>([]);
    
    const question1 = "How old are you?";
    const options1 = ["1","2","3","4","5"];
    
    const question2 = "Which subjects interest you the most?";
    // These options should be dependant on what age the user entered and level of education
    const options2 = ["1","2","3","4","5"];

    return (
        <Container fluid>
            <Row>
                <Col style={{ justifyContent:'left'}}>
                    <MC_SINGLE_RESPONSE
                        question={question1}
                        choices={options1}
                        answer={firstAnswer}
                        setAnswer={setFirstAnswer}
                    ></MC_SINGLE_RESPONSE>
                </Col>
                <Col>
                    <MC_MULTI_RESPONSE
                        question = {question2}
                        choices = {options2}
                        answers = {secondAnswer}
                        setAnswers = {setSecondAnswer}
                    ></MC_MULTI_RESPONSE>
                </Col>
                </Row>
        </Container>
    )
}