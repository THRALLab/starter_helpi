import "./pages.css"
import { Col, Container, Row } from "react-bootstrap";
import { AIKey } from "../interfaces/AIKeyInterface";

export function HomePage(key: AIKey): JSX.Element {
    return <div className="Pages">
        Home Page
        <Container>
            <Row>
                <header className="Basic-question-header">Basic Questions</header>
                <div className="basic-description">
                    The basic questions will ask you more simple, easier
                    questions that will give you a quick idea about your
                    potential ideal career path. For a brief recommendation for 
                    careers, take this quiz!
                </div>
                <header className="Detailed-question-header">Detailed Questions</header>
                    <div className="detailed-description">
                    The detailed questions quiz is targeted towards narrowing down your optimal field of study. If you would like recommendations for specific careers within your field of interest, take this quiz!  
                    </div>
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