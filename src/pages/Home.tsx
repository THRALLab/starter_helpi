import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export function ApiKeyInput(): JSX.Element {
  const [apiKey, setApiKey] = useState<string>("");
  const [isSubmit, setSubmit] = useState<boolean>(false)

  const changeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Logic to handle the API key, such as saving to local storage or state management
    console.log("apiKey->", apiKey); // Example: output to console or replace with storage logic
    localStorage.removeItem("GBTKEY");
    localStorage.setItem("GBTKEY", apiKey);
    setSubmit(true);
  };

  return <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formApiKey">
              <Row>
                <Col>
              <Form.Control
                type="password"
                placeholder="Enter API key:"
                value={apiKey}
                onChange={changeKey}
              />
              </Col>
              <Col>
              <Button variant="nav" type="submit">Submit</Button>
              {!isSubmit ? "✗" : "✓"}
              </Col>
              <Col>
              </Col>
              </Row>
            </Form.Group>
          </Form>
          </div>
}

export const Home = () => {
  return(
  <>
    <ApiKeyInput/>
  </>
  )
}
