import React, { useState } from 'react';
import { ProgressBar, Button, Form } from 'react-bootstrap';

const DetailedQuestions = () => {
  // Define the questions and options
  const [questions] = useState([
    {
      id: 1,
      question: "What type of work environment do you prefer?",
      options: ["Fast-paced", "Team-oriented", "Independent", "Creative"]
    },
    {
      id: 2,
      question: "How do you handle stress?",
      options: ["By staying organized", "By talking it out with others", "By taking breaks", "By problem-solving"]
    },
    // Add more questions here
  ]);

  // State to track selected options for each question
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  // Function to handle option selection
  const handleOptionSelect = (questionId: number, option: string) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [questionId]: option
    }));
  };

  // Function to handle "Get Results" button click
  const handleGetResults = () => {
    // Placeholder for future functionality
    console.log("Results will be displayed in the future.");
  };

  // Calculate progress based on the number of questions answered
  const progress = (Object.keys(selectedOptions).length / questions.length) * 100;

  return (
    <div className="detailed-questions">
      <ProgressBar now={progress} label={`${progress.toFixed(0)}%`} />
      <h2>Detailed Questions</h2>
      <Form>
        {questions.map(question => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            {question.options.map(option => (
              <Form.Check
                key={option}
                type="radio"
                id={option}
                label={option}
                checked={selectedOptions[question.id] === option}
                onChange={() => handleOptionSelect(question.id, option)}
              />
            ))}
            <br />
          </div>
        ))}
        <Button variant="primary" onClick={handleGetResults} disabled={Object.keys(selectedOptions).length !== questions.length}>
          Get Results
        </Button>
      </Form>
    </div>
  );
};

export default DetailedQuestions;
