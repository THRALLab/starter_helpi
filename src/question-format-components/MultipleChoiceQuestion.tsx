import React from "react";
import { Form } from "react-bootstrap";
import "../styles/MultipleChoiceQuestion.css";

interface QuestionOptionProps {
  choices: string[];
  selectedChoice: string;
  onSelectChoice: (choice: string) => void;
  disabled?: boolean;
  onAnswer: () => void;
  showErrorMessage: boolean;
}

const MultipleChoiceQuestion: React.FC<QuestionOptionProps> = ({
  choices,
  selectedChoice,
  onSelectChoice,
  disabled,
  onAnswer,
  showErrorMessage,
}) => {
  const handleChoiceChange = (choice: string) => {
    onSelectChoice(choice);
  };

  return (
    <Form.Group controlId="questionOptions" className="question-option">
      {choices.map((choice, index) => (
        <Form.Check
          key={index}
          type="radio"
          label={choice}
          name="choices"
          value={choice}
          checked={selectedChoice === choice}
          onChange={() => handleChoiceChange(choice)}
          disabled={disabled}
          id={`option-${index}`}
          className="form-check"
        />
      ))}
      {showErrorMessage && selectedChoice === "" && (
        <div className="invalid-selected">
          Please select an option before going forward.
        </div>
      )}
    </Form.Group>
  );
};
export default MultipleChoiceQuestion;
