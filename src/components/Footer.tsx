import React, { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "USER_OAKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function Footer(): JSX.Element {
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  function handleReset() {
    localStorage.removeItem(saveKeyData);
    window.location.reload();
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
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
    <Form>
      <Form.Label className="mt-2">OpenAI API Key:</Form.Label>
      <Form.Control
        type="password"
        size="sm"
        className="mx-auto object-center w-50"
        placeholder="Insert API Key Here"
        onChange={changeKey}
      ></Form.Control>
      <br></br>
      <KeyInputForm keyInStore={key !== ""} />
    </Form>
  );
}
