import { Link } from "react-router-dom";
import "src/css/select-quiz.css"

export function SelectQuiz(): JSX.Element {
  // allow for navigation to new quiz
  return (
  <div className="quiz-select-container">
    <h2>Select Your Quiz</h2>
    <div className="quiz-link-select-container">
      <div></div>
      <Link className="select-quiz-link" to="/basic-quiz">
        <p className="select-quiz-link-text">Basic Quiz</p>
      </Link>
      <div></div>
      <Link className="select-quiz-link" to="/advanced-quiz">
      <p className="select-quiz-link-text">Advanced Quiz</p>
      </Link>
      <div></div>
    </div>
  </div>);
}