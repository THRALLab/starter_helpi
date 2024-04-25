import { useState } from "react"
import { Row, Container } from "react-bootstrap"
import { basicQuiz } from "src/assets/quizzes/BasicQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { ProgressBar } from "src/components/ProgressBar"



export const BasicQuiz = () => {
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const totalQuestions = 20;
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
                    maxQuestions={totalQuestions}
                    questionsAnswerd={questionsAnswered} 
                    setQuestionsAnswerd={setQuestionsAnswered} 
                />
            </Row>
        </Container>
    </div>)
}