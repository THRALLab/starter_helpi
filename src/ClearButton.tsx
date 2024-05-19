import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ClearButton: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };
  
  return (
    <div>
        <Form.Group controlId="clear"><Form.Label></Form.Label>
        <Form.Control
        as = "textarea"
        rows ={3}
        value ={inputValue}
        onChange={handleChange} />
        </Form.Group>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
