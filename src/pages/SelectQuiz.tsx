import React, { useState } from "react";
import { Button} from "react-bootstrap"
import { DisplayQuestion } from "../components/DisplayQuestion";
import { useNavigate } from 'react-router-dom'; 
import basicQuiz from "../assets/test_data/quiz1.json";
import { findNext } from "../interfaces/QuestionLogic";
import { getFirstQuestion } from "../interfaces/QuizFlow";

export function SelectQuiz(): JSX.Element {
    const [currentQuestionId, setCurrentQuestionId] = useState("root");
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [isQuizComplete, setIsQuizComplete] = useState(false);

    const handleAnswerSubmit = (answer: string) => {
        const nextQuestionId = determineNextQuestionId(currentQuestionId, currentAnswer);
        
        if (nextQuestionId === "") {
          setIsQuizComplete(true); // Quiz completion logic
        } else {
          setCurrentQuestion(basicQuiz[nextQuestionId]); // Set the next question directly
        }
      };
      

    return (
        <div>
          <h1>Select a Quiz</h1>
          <ul>
            {quizzes.map((quiz) => (
              <li key={quiz.id}>
                {/* Directly using navigate within onClick */}
                <Button onClick={() => navigate(`/quiz/${quiz.id}`)}>{quiz.name}</Button>
              </li>
            ))}
          </ul>
        </div>
    );
}