import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface DisasterPromptProps {
  show: boolean;
  onClose: (disasterType: string) => void;
}

const DisasterPrompt: React.FC<DisasterPromptProps> = ({ show, onClose }) => {
  const [selectedDisaster, setSelectedDisaster] = useState<string>('default');

  const handleSubmit = () => {
    onClose(selectedDisaster);
  };

  return (
    <Modal show={show} onHide={() => onClose('default')}>
      <Modal.Header closeButton>
        <Modal.Title>Select Disaster Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="disasterType">
            <Form.Label>Disaster Type:</Form.Label>
            <Form.Control as="select" value={selectedDisaster} onChange={(e) => setSelectedDisaster(e.target.value)}>
              <option value="default">Default</option>
              <option value="flood">Flood</option>
              <option value="earthquake">Earthquake</option>
              {/* Add more disaster types as needed */}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onClose('default')}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DisasterPrompt;

export {};
