import { Link } from "react-router-dom";

export function SelectQuiz(): JSX.Element {
  // allow for navigation to new quiz
  return (
  <div className="quiz-select-container">
    <h2>Select Your Quiz</h2>
      <Link className="" to="/basic-quiz">Basic Quiz</Link>
      <Link className="" to="/advanced-quiz">Advanced Quiz</Link>
  </div>);
}