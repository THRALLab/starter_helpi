import { useState } from "react";
import { HomePage } from "./HomePage_Buttons";
import { DetailedQuestion } from "./DetailedQuiz";
import { BasicQues } from "./basicQues";
import { Button } from "react-bootstrap";
import { Results } from "./Results";
import "./Quizzes.css";
import React from "react";

export function BasicQuestion() {
  const [tab, setTab] = useState<string>("basic");
  const [changeTab, setChangeTab] = useState<string>("basic");
  const [careers, setCareers] = useState<string[]>([]);
  return (
    <>
      {tab === "home" ? (
        <HomePage />
      ) : tab === "detailed" ? (
        <DetailedQuestion />
      ) : (
        <>
          <div>
            <div className="Header-Background">
              <header className="App-header4">
                <h1
                  style={{
                    fontSize: "50px",
                  }}
                >
                  Basic Quiz
                </h1>
              </header>
              <div className="buttonContainer">
                <Button
                  onClick={() => setTab("home")}
                  className="Home-button"
                  style={{ margin: "20px auto" }}
                >
                  Home Page
                </Button>
              </div>
            </div>
            <div className="QuizBody">
              {changeTab === "basic" ? (
                <BasicQues
                  changeTab={setChangeTab}
                  careers={careers}
                  setCareers={setCareers}
                ></BasicQues>
              ) : (
                <Results careers={careers}></Results>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
