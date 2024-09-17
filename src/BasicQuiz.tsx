import { useState } from "react";
import { Form } from "react-bootstrap";

function Q1() {
  const [choices, setChoices] = useState<string>();
  function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
    setChoices(event.target.value);
  }
  return (
    <div>
      <Form.Check
        type="radio"
        id="choices"
        label="a"
        name="choices"
        value="a"
        checked={choices === "a"}
        onChange={updateChoice}
      />
      <Form.Check
        type="radio"
        id="choices"
        label="b"
        name="choices"
        value="b"
        checked={choices === "b"}
        onChange={updateChoice}
      />
      <Form.Check
        type="radio"
        id="choices"
        label="c"
        name="choices"
        value="c"
        checked={choices === "c"}
        onChange={updateChoice}
      />
      <Form.Check
        type="radio"
        id="choices"
        label="d"
        name="choices"
        value="d"
        checked={choices === "d"}
        onChange={updateChoice}
      />
    </div>
  );
}
function Q2() {
  const [choices, setChoices] = useState<string>();
  function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
    setChoices(event.target.value);
  }
  return (
    <div>
      <Form.Check
        type="radio"
        id="choices"
        label="a"
        name="choices"
        value="a"
        checked={choices === "a"}
        onChange={updateChoice}
      />
      <Form.Check
        type="radio"
        id="choices"
        label="b"
        name="choices"
        value="b"
        checked={choices === "b"}
        onChange={updateChoice}
      />
      <Form.Check
        type="radio"
        id="choices"
        label="c"
        name="choices"
        value="c"
        checked={choices === "c"}
        onChange={updateChoice}
      />
      <Form.Check
        type="radio"
        id="choices"
        label="d"
        name="choices"
        value="d"
        checked={choices === "d"}
        onChange={updateChoice}
      />
    </div>
  );
}

export function BasicQuizInfo() {
  // const [choices, setChoices] = useState<string>();
  // function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
  //   setChoices(event.target.value);
  // }
  return (
    <div className="App-buttons5">
      <h1 className="Text-Border">Basic Quiz</h1>
      <div className="Border">
        <div className="Basic-Question-Border">
          <h3>1.</h3>
          <Q1></Q1>
        </div>
        <div className="Basic-Question-Border">
          <h3>2.</h3>
          <Q2></Q2>
        </div>
      </div>
    </div>
  );
}
