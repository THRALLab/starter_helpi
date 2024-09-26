import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { BasicQuiz, DetailedQuiz } from "./CareerQuiz";
import { ChangeImages } from "./image2";

export function HomePage(): JSX.Element {
  // function openNewWindow() {
  //   window.open("https://careerquizlo.org", "_blank", "width=600,height=400");
  // }
  const [displayText, setDisplayText] = useState<boolean>(false);
  const [displayText2, setDisplayText2] = useState<boolean>(false);
  const [displayText3, setDisplayText3] = useState<boolean>(false);

  const handleButton = () => {
    setDisplayText(!displayText);
  };
  const handleButton2 = () => {
    setDisplayText2(!displayText2);
    //openNewWindow();
  };
  const handleButton3 = () => {
    setDisplayText3(!displayText3);
  };
  return (
    <div className="Body">
      <div>
        <h1 className="App-buttons2">Different Careers</h1>
        <p className="HomePage-text">
          There are so many career options to choose from. One must first
          consider their strengths, interests, and passions. It's also important
          to think about job availability, growth opportunity, and salary
          expectations. But ultimately, choosing a career is a personal decision
          that should reflect one's own goals, values and ambitions. It can be
          helpful to speak to professionals in fields of interest or work with a
          career coach to gain more clarity and make an informed decision.
          Remember, this choice isn't set in stone, people often change careers
          in their lifetime, so don't feel pressured to find the "perfect"
          option.
        </p>
      </div>
      <div>
        <h1>
          <Button onClick={handleButton} className="Career-Quiz ">
            View Careers
          </Button>
          {displayText && (
            <div className="Basic-QuizText">
              <ChangeImages></ChangeImages>
              <p></p>
            </div>
          )}
        </h1>
      </div>
      <div>
        <h1 className="App-buttons2">Career Quizzes</h1>
        <p className="HomePage-text">
          Ever pondered upon your life's direction and struggled to identify a
          career you'd feel passionate about? Now, thanks to our Basic and
          Detailed Quizzes, deciphering your future becomes possible. Our
          quizzes are designed for everyone, irrespective of your age, race,
          ethnicity, gender, or nationality.
        </p>
      </div>
      <div>
        <div>
          <Button onClick={handleButton2} className="Career-Quiz2 ">
            View Quizzes
          </Button>
          {displayText2 && (
            <>
              <BasicQuiz></BasicQuiz>
              <DetailedQuiz></DetailedQuiz>
            </>
          )}
        </div>
      </div>
      <div>
        <h1 className="App-buttons2">Career Tips</h1>
        <p className="HomePage-text">
          Career Tips is a resource designed to guide users on how to pursue
          their potential career. This platform educates users about various
          useful websites and provides an insight into the hiring process.
        </p>
      </div>
      <div>
        <h1>
          <Button onClick={handleButton3} className="Career-Quiz ">
            View Tips
          </Button>
          {displayText3 && (
            <div className="Basic-QuizText">
              <p></p>
            </div>
          )}
        </h1>
      </div>
    </div>
  );
}
