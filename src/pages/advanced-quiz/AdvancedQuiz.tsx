import { Suspense, useState } from "react"
import { Row, Container } from "react-bootstrap"
import { advancedQuiz } from "src/assets/quizzes/AdvancedQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { Loading } from "src/components/Loading"
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
                <Suspense fallback={<Loading type="Advanced Quiz"/>}>
                    <DisplayQuiz
                        quiz={advancedQuiz}
                        title="Advanced Quiz"
                        maxQuestions={maxQuestions}
                        questionsAnswerd={questionsAnswered} 
                        setQuestionsAnswerd={setQuestionsAnswered}
                    />
                </Suspense>
            </Row>
        </Container>
    </div>)
}