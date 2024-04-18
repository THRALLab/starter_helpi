import React, { useState } from 'react';
import { ProgressBar, Button, Form } from 'react-bootstrap';

const DetailedQuestions: React.FC = () => {
  // Define the questions and options
  const [questions] = useState([
    {
      id: 1,
      question: "How do you approach solving complex problems?",
      options: [
        "Analyzing data and facts systematically",
        "Brainstorming creative solutions",
        "Seeking advice from mentors or colleagues",
        "Experimenting with different strategies until a solution is found"
      ]
    },
    {
      id: 2,
      question: "How would you describe your communication style in a professional setting?",
      options: [
        "Concise and to the point",
        "Persuasive and influential",
        "Empathetic and understanding",
        "Collaborative and inclusive"
      ]
    },
    {
      id: 3,
      question: "What type of work environment do you thrive in?",
      options: [
        "Dynamic and fast-paced",
        "Structured and organized",
        "Innovative and entrepreneurial",
        "Supportive and team-oriented"
      ]
    },
    {
      id: 4,
      question: "How do you make decisions when faced with multiple options?",
      options: [
        "Rely on logical reasoning and analysis",
        "Trust your intuition and gut feeling",
        "Consult with others and gather opinions",
        "Experiment with different options before deciding"
      ]
    },
    {
      id: 5,
      question: "If given the opportunity, how would you lead a team?",
      options: [
        "Provide clear direction and guidance",
        "Inspire and motivate team members",
        "Delegate tasks and empower team members",
        "Foster creativity and innovation within the team"
      ]
    },
    {
      id: 6,
      question: "How do you respond to unexpected changes or challenges in the workplace?",
      options: [
        "Remain calm and assess the situation rationally",
        "Embrace change and view it as an opportunity for growth",
        "Seek support from others and collaborate on finding solutions",
        "Take initiative to address the issue proactively"
      ]
    },
    {
      id: 7,
      question: "What are your long-term career aspirations?",
      options: [
        "Climbing the corporate ladder within a specific industry",
        "Pursuing entrepreneurial ventures and starting your own business",
        "Making a positive impact on society or the environment",
        "Continuous learning and personal development in various fields"
      ]
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
