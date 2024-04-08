import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DetailedQuestion } from "../components/DetailedQuestion";

export function AdvancedQuiz(): JSX.Element {
    const [firstAnswer, setFirstAnswer] = useState<string>("");
    
    const question1 = "How old are you?";
    
    //const question2 = "Which subjects interest you the most?";

    return(
        <Container fluid>
            <Row>
                <Col style={{ justifyContent:'left'}}>
                    <DetailedQuestion
                        question={question1}
                        answer={firstAnswer}
                        setAnswer={setFirstAnswer}
                    ></DetailedQuestion>
                </Col>
            </Row>
        </Container>
    )
}