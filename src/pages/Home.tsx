import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export function ApiKeyInput(): JSX.Element {
  const [apiKey, setApiKey] = useState<string>("");

  const changeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Logic to handle the API key, such as saving to local storage or state management
    console.log("apiKey->", apiKey); // Example: output to console or replace with storage logic
    localStorage.removeItem("GBTKEY");
    localStorage.setItem("GBTKEY", apiKey);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Enter API Key</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formApiKey">
              <Form.Label>API Key:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insert API Key Here"
                value={apiKey}
                onChange={changeKey}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export const Home = () => {
  return(
  <>
    <ApiKeyInput/>
  </>
  )
}
