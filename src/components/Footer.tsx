import React, { ReactElement, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";


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
        <Form style={{padding: '5px', paddingInline: '10px'}}>
        <Button
          size="sm"
          style={{}}
          onClick={handleSubmit}
        >
          Submit
        </Button>
          <Button
            size="sm"
            variant="warning"
            onClick={handleReset}
          >
            Reset
          </Button>
          </Form>
      );
    } else {
      return (
        <Button style={{padding: '5px'}} size="sm" onClick={handleSubmit}>
          Submit
        </Button>
      );
    }
  }

  return (
    <Container style={{position: 'fixed', bottom: '0', left: '0', right: '0', maxWidth: '100%', height: '90px', backgroundColor: 'black', margin: '0', textAlign: 'left'}}>
      <Row>
        <Col style={{verticalAlign: 'center', padding: '20px'}}>
        <Form style={{textAlign: 'left', verticalAlign: 'center'}}>
            <span style={{color: 'Background', display: 'inline', textAlign: 'left', verticalAlign: 'center'}}>OpenAI API Key: </span>
            <Form.Control
              style={{display: 'inline', verticalAlign: 'center', width: '300px'}}
              type="password"
              size="sm"
              placeholder="Insert API Key Here"
              value={key}
              onChange={changeKey}
            />
            <div></div>
            <KeyInputForm keyInStore={key !== ""} />
          </Form>
        </Col>
        <Col style={{verticalAlign: 'center', padding: '20px', textAlign: 'right'}}>
        {/* <button className="button btn1" style={{ verticalAlign: 'middle', alignSelf: 'right' }} onClick={() => setCurrentPage('ResourcePage')}>
            <span>Resources</span>
          </button>
          <button className="button btn1" style={{ verticalAlign: 'middle' }}onClick={() => setCurrentPage('AboutPage')}>
            <span>About</span>
            </button> */}
            {//Needs implementation
}
            <span style={{color: 'Background'}}>Resources   |   About</span>
        </Col>
      </Row>
    </Container>
  );
}
