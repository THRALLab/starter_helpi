import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ7";

export function Q7():JSX.Element {
    const [data, setData] = useState<string>("");
    function updateData(event: React.ChangeEvent<HTMLInputElement>) {
        setData(event.target.value);
    }
    function saveData() {
        localStorage.setItem(saveInfo, JSON.stringify(data));
    }
    return (
        <div>
            <Form.Group controlId="userInput">
                <Form.Label>What is your dream career?</Form.Label>
                
                <Form.Control
                    type="textbox"
                    value={data}
                    onChange={updateData}
                    />
            </Form.Group>
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}