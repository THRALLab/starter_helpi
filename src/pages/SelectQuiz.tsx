import { Button } from "react-bootstrap";
import { Route, Link, Routes} from "react-router-dom";
import { DisplayQuiz } from "../components/DisplayQuiz";
import { BasicQuiz } from "../assets/Quizzes/BasicQuiz";
import { AdvancedQuiz } from "./AdvancedQuiz";

export function SelectQuiz(): JSX.Element {
  // allow for navigation to new quiz
  return (
  <div className="quiz-select-container">
    <h2>Select Your Quiz</h2>
      <Link className="" to="/basic-quiz">Basic Quiz</Link>
      <Link className="" to="/advanced-quiz">Advanced Quiz</Link>
      <Routes>
        <Route 
          path="/basic-quiz"
          element={<DisplayQuiz quiz={BasicQuiz} />}
        />
        <Route 
          path="/advanced-quiz"
        />
      </Routes>
  </div>);
}