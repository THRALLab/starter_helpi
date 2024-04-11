import { Route, Link, Routes} from "react-router-dom";
import { BasicQuiz } from "./basic-quiz/BasicQuiz";
import { AdvancedQuiz } from "./advanced-quiz/AdvancedQuiz";

export function SelectQuiz(): JSX.Element {
  // allow for navigation to new quiz
  return (
  <div className="quiz-select-container">
    <h2>Select Your Quiz</h2>
      <Link className="" to="basic-quiz">Basic Quiz</Link>
      <Link className="" to="advanced-quiz">Advanced Quiz</Link>
      <Routes>
        <Route 
          path="basic-quiz"
          element={<BasicQuiz/>}
        />
        <Route 
          path="advanced-quiz"
          element={<AdvancedQuiz/>}
        />
      </Routes>
  </div>);
}

/*
import { Button } from "react-bootstrap";
import { Route, Link, Routes} from "react-router-dom";
import { DisplayQuiz } from "../components/DisplayQuiz";
import { basicQuiz } from "../assets/Quizzes/BasicQuiz";
import { useState } from "react";

export function SelectQuiz(): JSX.Element {
  

  // allow for navigation to new quiz
  const [quiz, setQuiz] = useState(<SelectQuizOptions/>)
  return (
    <div className="quiz-select-container">
      {quiz}
    </div>
  );
}
export const SelectQuizOptions = () => {
    return 
      (<div className="quiz-select-container">
        <h2>Select Your Quiz</h2>
        <div className="quiz-select-button-container">
          <Button
            onClick={() => {setQui}}
          >BasicQuiz</Button>
        </div>
      </div>)
  }
*/