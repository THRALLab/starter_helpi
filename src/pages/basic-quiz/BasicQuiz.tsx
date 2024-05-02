import { Suspense, useState } from "react"
import { Row, Container } from "react-bootstrap"
import { basicQuiz } from "src/assets/quizzes/BasicQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { Loading } from "src/components/Loading"
import { ProgressBar } from "src/components/ProgressBar"
import { QuizProps } from "src/components/DisplayQuiz"



export const BasicQuiz = () => {
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const [currTotQuestions, setCurrTotQuestions] = useState<number>(3);
    const totalMax = 20;
    const experienceMax = 10;
    const quiz: QuizProps = basicQuiz;
    return(
    <div className="App-quiz">
        <Container>
            <br></br>
            <Row>
                <ProgressBar
                    value={questionsAnswered}
                    max={currTotQuestions}
                />
            </Row>
            <Row>
                <Suspense fallback={<Loading type="Basic Quiz"/>}>
                    <DisplayQuiz 
                        parentQuiz={quiz}
                        title="Basic Quiz"
                        experienceMax={experienceMax}
                        totalMax={totalMax}
                        questionsAnswerd={questionsAnswered}
                        currTotQuestions={currTotQuestions}
                        setQuestionsAnswerd={setQuestionsAnswered}
                        setCurrTotQuestions={setCurrTotQuestions}
                    />
                </Suspense>
            </Row>
        </Container>
    </div>)
}