import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ2";

export function Q2():JSX.Element {
    const [data, setData] = useState<string>("");

    function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
        setData(event.target.value);
    }

    function saveData() {
        localStorage.setItem(saveInfo, JSON.stringify(data));
    }

    return (
        <div>
            <Form.Group controlId="userInput">
                <Form.Label>Do you have any short-term or long-term goals?</Form.Label>
                <Form.Select value={data} onChange={updateData}>
                    <option value="--">--</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </Form.Select>
            </Form.Group>
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}