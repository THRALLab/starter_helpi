import { Form, InputGroup } from "react-bootstrap";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "../styles/OpenResponse.css";

interface OpenResponseProps {
  value: string;
  onChange: (text: string) => void;
  disabled: boolean;
  className: string;
}

const OpenResponse = forwardRef(
  ({ value, onChange, disabled, className }: OpenResponseProps, ref) => {
    const [textValue, setTextValue] = useState<string>(value);
    const [validated, setValidated] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
      setTextValue(value);
      setValidated(value.length >= 10);
    }, [value]);

    function updateValue(e: React.ChangeEvent<HTMLInputElement>) {
      const newValue = e.target.value;
      setTextValue(newValue);
      onChange(newValue);
      setValidated(newValue.length >= 10);
      setShowError(false); // Reset error on input change
    }

    useImperativeHandle(ref, () => ({
      triggerValidation() {
        setValidated(textValue.length >= 10);
        setShowError(textValue.length < 10); // Show error if invalid
      },
    }));

    return (
      <InputGroup
        id="openResponse"
        className={className + " question-option"}
        hasValidation
      >
        <Form.Control
          as="textarea"
          rows={3}
          value={textValue}
          onChange={updateValue}
          placeholder="Type your answer here..."
          disabled={disabled}
          required
          isInvalid={showError && !validated}
        />
        <Form.Control.Feedback type="invalid">
          Please enter at least 10 characters.
        </Form.Control.Feedback>
      </InputGroup>
    );
  }
);

export default OpenResponse;
