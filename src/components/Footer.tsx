import React, { ReactElement, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

// Local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "USER_OAKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function Footer(): JSX.Element {
  const [key, setKey] = useState<string>(keyData);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function handleReset() {
    localStorage.removeItem(saveKeyData);
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function KeyInputForm({ keyInStore }: { keyInStore: boolean }): ReactElement {
    if (keyInStore) {
      return (
        <div>
          <Button
            size="sm"
            className="mb-2 mx-2"
            variant="warning"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            size="sm"
            className="Submit-Button mb-2 mx-2"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      );
    } else {
      return (
        <Button size="sm" className="Submit-Button mb-2" onClick={handleSubmit}>
          Submit
        </Button>
      );
    }
  }

  return (
    <Container className="fixed-bottom">
      <Form>
        <Form.Label style={{color: 'Background'}}>OpenAI API Key:</Form.Label>
        <Form.Control
          type="password"
          size="sm"
          className="mx-auto mb-3 w-50"
          placeholder="Insert API Key Here"
          value={key}
          onChange={changeKey}
        />
        <KeyInputForm keyInStore={key !== ""} />
      </Form>
    </Container>
  );
}