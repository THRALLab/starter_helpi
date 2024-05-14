import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Quizzes.css";
import Chat from "./openai";

interface career {
  changeTab: (career: string) => void;
  careers: string[];
  setCareers: (career: string[]) => void;
}

interface Question {
  question: string;
  type: "multipleChoice" | "checkbox" | "textbox";
  options: string[];
}

let questions: Question[] = [
  {
    question: "What is your highest level of education?",
    type: "multipleChoice",
    options: [
      "Middle School",
      "Elementary School",
      "High school",
      "Some College",
      "Undergraduate",
      "Post-Graduate",
    ],
  },
  {
    question: "What Subjects are you most interested in?",
    type: "checkbox",
    options: [
      "Math",
      "Social Studies/History",
      "Sciences",
      "Arts",
      "Literature/English",
    ],
  },
  {
    question:
      "If your favorite subject was not listed, what other areas are you interested in?",
    type: "textbox",
    options: [],
  },
  {
    question: "What are some of your hobbies and interests?",
    type: "checkbox",
    options: ["Sports", "Video Games", "Writing", "Music"],
  },
  {
    question: "How would you like to work?",
    type: "multipleChoice",
    options: ["In a team", "Individual", "Both"],
  },
  {
    question: "What type of environments do you prefer to spend more time in?",
    type: "checkbox",
    options: [
      "Office",
      "Hospital Settings",
      "Home/Remote",
      "Creative Work Environment",
    ],
  },
  {
    question:
      "I am interested in a career that involves helping others and making a difference?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly Disagree",
    ],
  },
  {
    question: "I prefer more hands-on approach to my job?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly Disagree",
    ],
  },
  {
    question: "I thrive in a role that requires more interaction with people?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly Disagree",
    ],
  },
  {
    question:
      "A high-salary job is more important to me than job satisfaction?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly Disagree",
    ],
  },
  {
    question: "I prefer a more flexible career instead of a typical 9-5 job?",
    type: "multipleChoice",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly Disagree",
    ],
  },
  {
    question: "How long do you plan to attend college for?",
    type: "multipleChoice",
    options: ["No College", "Bachelor's Degree", "Masters Degree", "PHD"],
  },
];
//LOCALSTORAGE
const QUIZKEY = "basic quiz";

export function BasicQues({ changeTab, careers, setCareers }: career) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    new Array(questions.length).fill("")
  );
  const [visible, setVisible] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);
  const NextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const PrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = [...selectedOptions];
    newAnswer[currentQuestion] = e.target.value;
    setSelectedOptions(newAnswer);
  };
  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value + ", ";
    let newOptions = [...selectedOptions];
    if (selectedOptions[currentQuestion].includes(option)) {
      newOptions[currentQuestion] = newOptions[currentQuestion].replace(
        option,
        ""
      );
      setSelectedOptions(newOptions);
    } else {
      newOptions[currentQuestion] = newOptions[currentQuestion] + option;
      setSelectedOptions(newOptions);
    }
  };
  function saveData() {
    const final = questions.map((question, index) => ({
      question: question.question,
      answer: selectedOptions[index],
    }));
    localStorage.setItem(QUIZKEY, JSON.stringify(final));
    console.log(localStorage.getItem(QUIZKEY));
  }
  const [progress, setProgress] = useState(0);
  const handleNextClick = () => {
    if (progress < 81) {
      setProgress(progress + 8);
    }
    if (progress === 80) {
      setProgress(100);
    }
  };

  const handlePreviousClick = () => {
    if (progress > 0) {
      setProgress(progress - 8);
    }
    if (progress === 20) {
      setProgress(0);
    }
  };
  const getColor = () => {
    return "#7a2048";
  };
  function handleNext() {
    // setErrorMessage("");
    let isValid = false;
    const error = "You need at least one option";
    setVisible(!visible);

    if (questions[currentQuestion].type === "multipleChoice") {
      // For multiple choice and text box, check if the answer is not empty
      isValid = selectedOptions[currentQuestion].trim() !== "";
    } else if (questions[currentQuestion].type === "textbox") {
      if (selectedOptions[currentQuestion].length > 20) {
        isValid = true;
      } else {
        setErrorMessage("You need at least 20 characters");
        return;
      }
    } else if (questions[currentQuestion].type === "checkbox") {
      // For checkbox, check if the concatenated string of options is not empty
      isValid =
        selectedOptions[currentQuestion].trim().replace(/,\s*$/, "") !== "";
    }

    if (isValid) {
      setErrorMessage("");
      handleNextClick();
      NextQuestion();
    } else {
      setErrorMessage(error);
    }
  }
  function handlePrev() {
    handlePreviousClick();
    PrevQuestion();
  }

  return (
    <div>
      <div className="container">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{
              width: `${progress}%`,
              backgroundColor: getColor(),
            }}
          ></div>
        </div>
        <div className="progress-label">{progress}%</div>
      </div>
      <div className="StaticBackground">
        <h1 style={{ marginTop: "0px" }}>
          {questions[currentQuestion].question}
        </h1>
        {questions[currentQuestion].type === "multipleChoice" && (
          <div>
            {questions[currentQuestion].options.map((option) => (
              <Form.Check
                key={option}
                type="radio"
                id={option}
                name="choices"
                value={option}
                onChange={handleInputChange}
                label={option}
                checked={selectedOptions[currentQuestion] === option}
              ></Form.Check>
            ))}
          </div>
        )}
        {questions[currentQuestion].type === "checkbox" && (
          <div>
            {questions[currentQuestion].options.map((option) => (
              <Form.Check
                key={option}
                type="checkbox"
                id={option}
                name="choices-chsckbox"
                value={option}
                onChange={handleInputChange2}
                label={option}
                checked={selectedOptions[currentQuestion].includes(option)}
              ></Form.Check>
            ))}
          </div>
        )}
        {questions[currentQuestion].type === "textbox" && (
          <Form.Group controlId={`Question-${currentQuestion}`}>
            <Form.Label
              style={{
                display: "block",
                color: "white",
                fontSize: "25px",
                textAlign: "center",
                margin: "0 auto",
                maxWidth: "80%",
              }}
            >
              {questions[currentQuestion].options}
            </Form.Label>
            <Form.Control
              as="textarea"
              value={selectedOptions[currentQuestion]}
              onChange={handleInputChange}
              style={{
                margin: "20px auto",
                height: "200px",
                width: "700px",
                border: "1px solid gray",
                background: "black",
                color: "white",
                fontSize: "17px",
              }}
            />
          </Form.Group>
        )}
      </div>
      <div className="ButtonSpace">
        <Button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="button"
        >
          Previous
        </Button>
        {currentQuestion === questions.length - 1 &&
        selectedOptions[currentQuestion].trim() !== "" ? (
          <Chat
            questionAndAnswer={QUIZKEY}
            setChangeTab={changeTab}
            careers={careers}
            setCareers={setCareers}
            onSaveData={saveData}
          ></Chat>
        ) : (
          <Button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className="button"
            style={{
              left: "20px",
              margin: "24px auto",
              cursor: "hover",
            }}
          >
            Next
          </Button>
        )}
        {!visible && errorMessage && (
          <div
            style={{
              color: "red",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
