import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ApiKeyInput(
  {
    submitted,
    setSubmit
  }: {
    submitted: boolean;
    setSubmit: (submitted: boolean) => void;
  }
): JSX.Element {
  const [apiKey, setApiKey] = useState<string>("");

  const changeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("apiKey->", apiKey);
    localStorage.setItem("GBTKEY", apiKey);
    setSubmit(true);
  };

  return <>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formApiKey">
            <div className="App-api-container">
              <div>
                <Form.Control
                  type="password"
                  placeholder="Enter API key:"
                  value={apiKey}
                  onChange={changeKey}
                />
              </div>
              <div>
                <Button variant="nav" type="submit">Submit</Button>
              </div>
              <div>
                {!submitted ? "✗" : "✓"}
              </div>
            </div>
            </Form.Group>
          </Form>
          </>
}

export const Home = () => {
  return(
    <>
    <br></br>
    <h2 className="App-misc-text">Select Your Quiz</h2>
        <div className="quiz-link-select-container">
          <Link className="select-quiz-link" to="/basic-quiz">
            <p className="select-quiz-link-text">Basic Quiz</p>
          </Link>
        </div>
        <div>Explore Your Path: Ideal for beginners or those uncertain about their career direction, this quiz provides a friendly introduction to the world of career possibilities. Through straightforward questions about your interests and basic educational background, it helps you discover diverse career fields and suggests potential areas you might enjoy exploring further. Perfect for high school students or anyone new to career planning.</div>
        <div className="quiz-link-select-container">
          <Link className="select-quiz-link" to="/advanced-quiz">
            <p className="select-quiz-link-text">Advanced Quiz</p>
          </Link>
        </div>
        <div>Refine Your Journey: Designed for those who have a clearer vision of their future, this quiz dives deep into specific career pathways and advanced opportunities. By analyzing your detailed educational achievements, experiences, and skills, it offers personalized advice on strategic steps to take your career to the next level. Ideal for college students, recent graduates, or professionals seeking targeted guidance.</div>
    </>
  )
}
