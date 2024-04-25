import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../styles/MultipleChoiceQuestion.css";

interface MultipleChoiceQuestionProps {
  choices: string[];
  selectedChoice: string;
  onSelectChoice: (choice: string) => void;
  otherOptionIndex?: number; // Index of choice that has "Other" option
  disabled?: boolean;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  choices,
  selectedChoice,
  onSelectChoice,
  otherOptionIndex,
  disabled,
}) => {
  const [showOtherInput, setShowOtherInput] = useState(
    selectedChoice === "Other (please specify)"
  );
  const [otherText, setOtherText] = useState(selectedChoice);

  const handleChoiceChange = (choice: string) => {
    onSelectChoice(choice);
    setShowOtherInput(choice === "Other (please specify)");
    if (choice !== "Other (please specify)") {
      setOtherText(choice);
    }
  };

  const handleOtherTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setOtherText(text);
    onSelectChoice(text);
  };

  return (
    <Form.Group controlId="questionOptions" className="question-option">
      {choices.map((choice, index) => (
        <div key={index}>
          <Form.Check
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
        </div>
      ))}
      {otherOptionIndex !== undefined && (
        <Row>
          <Col>
            {showOtherInput && (
              <Form.Control
                type="text"
                placeholder="Please specify"
                value={otherText}
                onChange={handleOtherTextChange}
                disabled={disabled}
              />
            )}
          </Col>
        </Row>
      )}
    </Form.Group>
  );
};

export default MultipleChoiceQuestion;
