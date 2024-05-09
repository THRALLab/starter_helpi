import { Form } from "react-bootstrap";

interface OpenResponseProps {
  value: string;
  onChange: (text: string) => void;
  disabled: boolean;
}

const OpenResponse: React.FC<OpenResponseProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Form.Group controlId="openResponse">
      <Form.Control
        as="textarea"
        rows={3}
        value={value}
        onChange={handleTextChange}
        placeholder="Type your answer here..."
        disabled={disabled}
      />
    </Form.Group>
  );
};

export default OpenResponse;
