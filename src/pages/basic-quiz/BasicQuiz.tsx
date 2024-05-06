import { Suspense, useState } from "react"
import { Row, Container } from "react-bootstrap"
import { basicQuiz } from "src/assets/quizzes/BasicQuiz"
import { DisplayQuiz } from "src/components/DisplayQuiz"
import { Loading } from "src/components/Loading"
import { ProgressBar } from "src/components/ProgressBar"
import { QuizItems } from "src/components/DisplayQuiz"

export interface ParentConstants {
    title: string;
    parentQuiz : QuizItems;
    experienceMax: number;
    totalMax : number;
};

export const BasicQuiz = () => {
    const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
    const [currTotQuestions, setCurrTotQuestions] = useState<number>(3);
    const totalMax = 20;
    const experienceMax = 10;
    const quiz: QuizItems = basicQuiz;
    const basicConstants: ParentConstants = {
        parentQuiz: quiz,
        title: "BasicQuiz",
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
                <Suspense fallback={<Loading type="Basic Quiz"/>}>
                    <DisplayQuiz 
                        parentConstants={basicConstants}
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