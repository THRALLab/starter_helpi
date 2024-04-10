import { Col, Container, Row } from "react-bootstrap";
import { AIKey } from "../interfaces/AIKeyInterface";

export function HomePage(key: AIKey): JSX.Element {
    return <div className="Pages">
        homePage
        <Container>
            <Row>
                <Col>
                    <div className="Question-description">
                        The basic questions will ask you more simple, easier<br></br>
                        questions that will give you a quick idea about your<br></br> 
                        potential ideal career.
                    </div>
                </Col>
                <Col>
                    <div className="Question-description">
                        Detailed questions here
                    </div>
                </Col>
            </Row>
        </Container>
    </div>;
}

export function BasicQuestion(key: AIKey): JSX.Element {
    return <div>
        basic questions
    </div>;
}

export function DetailedQuestions(key: AIKey): JSX.Element {
    return <div>
        detailed questions
    </div>;
}