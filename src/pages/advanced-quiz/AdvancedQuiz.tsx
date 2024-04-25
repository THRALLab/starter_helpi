import { useState } from "react"
import { Row, Container } from "react-bootstrap"
// import { advancedQuiz } from "src/assets/quizzes/AdvancedQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { ProgressBar } from "src/components/ProgressBar"



export const AdvancedQuiz = () => {
    const maxQuestions = 20;
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    return(
    <div className="basicQuiz-container">
        <Container>
            <Row>
                <ProgressBar
                    value={questionsAnswered}
                    max={maxQuestions}
                />
            </Row>
            <Row>
                <DisplayQuiz
                    quiz={{}}
                    title="Advanced Quiz"
                    questionsAnswerd={questionsAnswered}
                    maxQuestions={maxQuestions}
                    setQuestionsAnswerd={setQuestionsAnswered} 
                />
            </Row>
        </Container>
    </div>)
}