// PopUpAlert.tsx

import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../styles/PopUpAlert.css";

interface PopUpAlertProps {
  errorMessage: string;
  onClose: () => void;
}

export const PopUpAlert: React.FC<PopUpAlertProps> = ({
  errorMessage,
  onClose,
}) => {
  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-modal">
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body">{errorMessage}</Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button
          className="small-normal-btn"
          variant="secondary"
          onClick={onClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
