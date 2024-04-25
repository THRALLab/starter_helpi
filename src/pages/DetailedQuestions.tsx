import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/BasicQuestions.css"; // Import CSS file
import NavigationBar from "../components/NavigationBar";
import ProgressBar from "../components/progressBar";

function DetailedQuestions() {
  const [key, setKey] = useState<string>("");
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0); // Define answeredQuestions state

  const questionOptions = [
    "Do you enjoy working with your hands and creating tangible objects or structures?",
    "Do you thrive in environments where you can interact with people frequently?",
    "Do you prefer working independently rather than in a team setting?",
    "Are you passionate about helping others and making a positive impact on their lives?",
    "Do you enjoy analyzing data, solving problems, and finding innovative solutions?",
    "Are you comfortable with uncertainty and adapting to changes in your work environment?",
    "Do you have a strong interest in technology and enjoy keeping up with the latest advancements?",
    "Are you drawn to roles that involve creativity and expressing yourself artistically?",
    "Do you prefer working in a structured and organized environment with clear guidelines?",
    "Do you value work-life balance and prioritize your personal time outside of work?",
    "Are you motivated by financial rewards and opportunities for career advancement?",
    "Do you enjoy learning new skills and concepts, even if they are outside of your current expertise?",
    "Are you comfortable taking risks and stepping out of your comfort zone to pursue opportunities?",
    "Do you prefer a job that allows you to travel and experience different cultures?",
    "Do you value job security and prefer roles with stable employment prospects?",
    "Do you enjoy leading and guiding others in achieving common goals?",
    "Do you prioritize environmental sustainability and seek career paths that align with this value?",
    "Are you interested in roles that allow you to be entrepreneurial and create your own opportunities?",
    "Do you prefer working in fast-paced environments where there's always something new happening?",
    "Do you value autonomy and independence in your work decisions and tasks?",
  ];

  const [prevAnswers, setPrevAnswers] = useState<(string | null)[]>(Array(questionOptions.length).fill(null)); // Store the previous answers

  const handleSubmit = () => {
    localStorage.setItem("MYKEY", JSON.stringify(key));
    window.location.reload();
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const questionNumber = parseInt(id.split("-")[1]);
    const newValue = event.target.value.trim(); // Get the trimmed value of the input
  
    // Check if the input field was previously empty and is now filled out
    if (newValue && !prevAnswers[questionNumber - 1]) {
      setAnsweredQuestions((prevCount) => prevCount + 1); // Increment answeredQuestions
    }
    // Check if the input field was previously filled out and is now emptied
    else if (!newValue && prevAnswers[questionNumber - 1]) {
      setAnsweredQuestions((prevCount) => prevCount - 1); // Decrement answeredQuestions
    }
  
    // Update the previous answers array
    const updatedPrevAnswers = [...prevAnswers];
    updatedPrevAnswers[questionNumber - 1] = newValue;
    setPrevAnswers(updatedPrevAnswers);
  
    // Update the state of the input field
    setKey(newValue);
  };
  
  
  
  


  return (
    <div className="detailed-q-page">
      <NavigationBar></NavigationBar>
      <h1 style={{ fontSize: "3rem" }}>Detailed Questions Page</h1>
      <Form>
        {questionOptions.map((question, index) => (
          <Form.Group controlId={"question-" + (index + 1)}>
            <Form.Label className="question-label">
              Question #{index + 1}:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your answer"
              onChange={handleChange}
              className="answer-input" // Add class for answer input
            />
          </Form.Group>
        ))}

        {/* Add some space between questions */}
        <div className="question-space"></div>
      </Form>

      <Container>
        <Row className="justify-content-center">
          {" "}
          {/* Center the questions */}
          <Col xs={12} md={6}>
            {" "}
            {/* Adjust the column width for smaller screens */}
            {/* Question 1 */}
            {/* Question 2 */}
            <Form.Group controlId="question2">
              <Form.Label className="question-label">Question #2:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>
            {/* Add some space between questions */}
            <div className="question-space"></div>
            {/* Question 3 */}
            <Form.Group controlId="question3">
              <Form.Label className="question-label">Question #3:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>
            {/* Add some space between questions */}
            <div className="question-space"></div>
            {/* Question 4 */}
            <Form.Group controlId="question4">
              <Form.Label className="question-label">Question #4:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>
            {/* Add some space between questions */}
            <div className="question-space"></div>
            {/* Question 5 */}
            <Form.Group controlId="question5">
              <Form.Label className="question-label">Question #5:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>
            {/* Add some space between questions */}
            <div className="question-space"></div>
            {/* Question 6 */}
            <Form.Group controlId="question6">
              <Form.Label className="question-label">Question #6:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>
            {/* Add some space between questions */}
            <div className="question-space"></div>
            {/* Question 7 */}
            <Form.Group controlId="question7">
              <Form.Label className="question-label">Question #7:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>
            {/* Add some space between questions */}
            <div className="question-space"></div>
            {/* Question 8 */}
            <Form.Group controlId="question8">
              <Form.Label className="question-label">Question #8:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={handleChange}
                className="answer-input" // Add class for answer input
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
       {/* Render the ProgressBar component */}
       <ProgressBar totalQuestions={questionOptions.length} answeredQuestions={answeredQuestions} />

      <Button className="Submit-Button" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </div>
  );
}

export default DetailedQuestions;


