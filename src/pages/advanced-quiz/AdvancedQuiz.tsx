import { useState } from "react"
import { Row, Container } from "react-bootstrap"
import { advancedQuiz } from "src/assets/quizzes/AdvancedQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { ProgressBar } from "src/components/ProgressBar"



export const AdvancedQuiz = () => {
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const totalQuestions = Object.keys(advancedQuiz).length;
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
                    quiz={advancedQuiz}
                    questionsAnswerd={questionsAnswered} 
                    setQuestionsAnswerd={setQuestionsAnswered} 
                />
            </Row>
        </Container>
    </div>)
}