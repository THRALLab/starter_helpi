import React, { useState } from "react";
import { MC_SINGLE_RESPONSE } from "./MC_SINGLE_RESPONSE";
import { Col, Container, Row } from "react-bootstrap";

export function BasicQuiz(): JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    
    const question1 = "How old are you?"
    const options1 = ["1","2","3","4","5"]
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
                </Row>
        </Container>
    )
}