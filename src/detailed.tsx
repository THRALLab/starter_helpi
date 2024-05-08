// Detailed.tsx
import React, { useEffect, useState } from "react";
import "./detailed.css";
import questions from "./detailedQuestions.json";
import Modal from "./Modal";
import Confetti from "react-confetti";
import ProgressBar from "./ProgressBar";

export interface Answer {
  question: string;
  questionNo: number;
  choice: string;
}

function Detailed() {
  const [choice, setChoice] = useState<string>();
  const [currentIndex, setCurrentIndex] = useState<number>(
    Number(localStorage.getItem("current_question")) || 0
  );
  const [answeredQuestions, setAnsweredQuestions] = useState<Answer[]>(
    JSON.parse(localStorage.getItem("answered_questions") || "[]")
  );
  const [userInput, setUserInput] = useState<string>(
    answeredQuestions[currentIndex]?.choice || ""
  );
  const [modalVisibility, setModalVisibility] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    localStorage.setItem("current_question", currentIndex.toString());
    localStorage.setItem(
      "answered_questions",
      JSON.stringify(answeredQuestions)
    );
  }, [currentIndex, answeredQuestions]);

  function saveAnswers(
    choice: string,
    question_num: number,
    question_type: string,
    question: string
  ) {
    const updatedAnswers = answeredQuestions.map((answer) =>
      answer.questionNo === question_num ? { ...answer, choice } : answer
    );

    setAnsweredQuestions(
      updatedAnswers.some((answer) => answer.questionNo === question_num)
        ? updatedAnswers
        : [...answeredQuestions, { question, questionNo: question_num, choice }]
    );
  }

  function updateModalVisibility() {
    setModalVisibility(!modalVisibility);
    setShowConfetti(false);
  }

  return (
    <>
      {showConfetti && <Confetti />}
      {modalVisibility && <Modal modalFunction={updateModalVisibility} />}
      <div className="quizContainer">
        <ProgressBar
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
        <div className="questionContainer">
          <img src={questions[currentIndex].image} alt="Visual question aid" />
          <h3>
            ({questions[currentIndex].question_number}/{questions.length}){" "}
            {questions[currentIndex].question}
          </h3>
        </div>
        <div className="optionsContainer">
          {questions[currentIndex].type === "multiple_choice" ? (
            questions[currentIndex].choices.map(
              (choice: string, index: number) => (
                <button
                  key={index}
                  onClick={() => {
                    setChoice(choice);
                    saveAnswers(
                      choice,
                      questions[currentIndex].question_number,
                      questions[currentIndex].type,
                      questions[currentIndex].question
                    );
                  }}
                  style={{
                    backgroundColor: answeredQuestions.some(
                      (selectedAnswer) => selectedAnswer.choice === choice
                    )
                      ? "#006BA6"
                      : "#003459",
                    transition: "0.25s ease",
                    border: answeredQuestions.some(
                      (selectedAnswer) => selectedAnswer.choice === choice
                    )
                      ? "2px solid cyan"
                      : "none",
                  }}
                >
                  {choice}
                </button>
              )
            )
          ) : questions[currentIndex].type === "free_response" ? (
            <>
              <textarea
                placeholder="Enter your response..."
                maxLength={500}
                value={userInput}
                onChange={(e) => {
                  setChoice(e.target.value);
                  setUserInput(e.target.value);
                  saveAnswers(
                    e.target.value,
                    questions[currentIndex].question_number,
                    questions[currentIndex].type,
                    questions[currentIndex].question
                  );
                }}
              ></textarea>
              <p className="characterLimitText">
                {choice ? choice.length : 0}/500 characters remaining
              </p>
            </>
          ) : null}
        </div>
        <div className="containerFooter">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((index) => index - 1)}
          >
            {currentIndex === 0 ? "END" : "PREV."}
          </button>
          <button
            disabled={!choice || choice.length > 500}
            onClick={() => {
              if (currentIndex === questions.length - 1) {
                setModalVisibility(!modalVisibility);
                setShowConfetti(true);

                setTimeout(() => {
                  setShowConfetti(false);
                }, 8000);
              } else {
                setCurrentIndex((index) => index + 1);
                setChoice(answeredQuestions[currentIndex + 1]?.choice || "");
              }
            }}
          >
            {currentIndex === questions.length - 1
              ? "SUBMIT RESPONSES"
              : "NEXT"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Detailed;
