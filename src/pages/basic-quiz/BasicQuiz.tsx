import { useState } from "react"
import { Row, Container } from "react-bootstrap"
import { basicQuiz } from "src/assets/quizzes/BasicQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { ProgressBar } from "src/components/ProgressBar"



export const BasicQuiz = () => {
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const totalQuestions = Object.keys(basicQuiz).length;
    return(
    <div className="basicQuiz-container">
        <Container>
            <Row>
                <ProgressBar
                    value={questionsAnswered}
                    max={totalQuestions}
                />
            </Row>
            <Row>
                <DisplayQuiz 
                    quiz={basicQuiz}
                    title="Basic Quiz"
                    questionsAnswerd={questionsAnswered} 
                    setQuestionsAnswerd={setQuestionsAnswered} 
                />
            </Row>
        </Container>
    </div>)
}