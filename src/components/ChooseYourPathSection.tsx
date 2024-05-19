import React from "react";
import "../styles/ChooseYourPathSection.css";
import QuizPageCard from "./QuizPageCard";

function ChooseYourPathSection(): JSX.Element {
  return (
    <div className="path-section" id="choose-path-section">
      <h1 className="path-title">BEGIN NOW</h1>
      <div className="path-options">
        <QuizPageCard
          title="Basic Questions Quiz"
          description="Get quick insights into your potential career paths with our streamlined quiz. This quiz is designed to give you a broad overview of possible career directions based on your answers to a series of straightforward questions."
          link="/starter_helpi/#/BasicQuestions"
          btnText="Take the Quiz"
        />
      </div>
    </div>
  );
}

export default ChooseYourPathSection;
