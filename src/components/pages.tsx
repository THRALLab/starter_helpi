import "./pages.css"
import {Container, Row } from "react-bootstrap";
import { AIKey } from "../interfaces/AIKeyInterface";

export function HomePage(key: AIKey): JSX.Element {
    return <div className="Pages">
        <h3 className="Page-title">Home Page</h3>
            <Container>
                <center>
                    <h4 className="Description-header">Basic Questions</h4>
                    <div className="basic-description">
                        The basic questions will ask you more simple, easier
                        questions that will give you a quick idea about your
                        potential ideal career path. For a brief recommendation for 
                        careers, take this quiz!
                    </div>
                    <h4 className="Description-header">Detailed Questions</h4>
                        <div className="detailed-description">
                        The detailed questions quiz is targeted towards narrowing down your optimal field of study. If you would like recommendations for specific careers within your field of interest, take this quiz!  
                        </div>
                </center>
            </Container>
    </div>;
}

export function BasicQuestion(key: AIKey): JSX.Element {
    return <div className="Pages">
       <h3 className="Page-title">Basic Questions</h3>
    </div>;
}

export function DetailedQuestions(key: AIKey): JSX.Element {
    return <div className="Pages">
        <h3 className="Page-title">Detailed Questions</h3>
        <div className="Question-instructions">
            The description for how to answer the questions will go here.
        </div>
    </div>;
}