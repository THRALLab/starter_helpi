import { useState } from "react";
import { HomePage } from "./HomePage_Buttons";
import { Button } from "react-bootstrap";
import { DetailedQues } from "./detailedQues";
import { Results } from "./Results";
// import { ProgressBar } from "./progressBar";
export function DetailedQuestion() {
  const [tab, setTab] = useState<string>("detailed");
  const [changeTab, setChangeTab] = useState<string>("detailed");
  const [careers, setCareers] = useState<string[]>([]);

  return (
    <>
      {tab === "home" ? (
        <HomePage />
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
                  Detailed Quiz
                </h1>
              </header>
              <div className="buttonContainer">
                <Button
                  onClick={() => setTab("home")}
                  className="Home-button"
                  style={{
                    margin: "20px auto",
                  }}
                >
                  Home Page
                </Button>
              </div>
            </div>
            <div className="QuizBody">
              {changeTab === "detailed" ? (
                <DetailedQues
                  changeTab={setChangeTab}
                  careers={careers}
                  setCareers={setCareers}
                ></DetailedQues>
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
