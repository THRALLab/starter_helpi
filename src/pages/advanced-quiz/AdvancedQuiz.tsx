import { Suspense, useState } from "react"
import { Row, Container } from "react-bootstrap"
import { advancedQuiz } from "src/assets/quizzes/AdvancedQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { Loading } from "src/components/Loading"
import { ProgressBar } from "src/components/ProgressBar"
import { QuizItems } from "src/components/DisplayQuiz"
import { ParentConstants } from "../basic-quiz/BasicQuiz"





export const AdvancedQuiz = () => {
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const [currTotQuestions, setCurrTotQuestions] = useState<number>(4);
    const quiz: QuizItems = advancedQuiz;
    const totalMax = 20;
    const experienceMax = 10;
    const advancedConstants: ParentConstants = {
        parentQuiz: quiz,
        title: "AdvancedQuiz",
        experienceMax: experienceMax,
        totalMax: totalMax
    }
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
                <Suspense fallback={<Loading type="Advanced Quiz"/>}>
                    <DisplayQuiz
                        parentConstants={advancedConstants}
                        parentQuestionsAnswerd={questionsAnswered}
                        parentTotQuestions={currTotQuestions}
                        parentSetAnswerd={setQuestionsAnswered}
                        parentSetTot={setCurrTotQuestions}
                    />
                </Suspense>
            </Row>
        </Container>
    </div>)
}