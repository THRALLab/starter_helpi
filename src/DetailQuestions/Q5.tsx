import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const saveInfo = "DetailUserInputQ5";
export function Q5():JSX.Element {
    const [userInfo, setUserInfo] = useState<string>("");
    function updateUserInfo(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserInfo(event.target.value);
    }
    function saveData() {
        localStorage.setItem(saveInfo, JSON.stringify(userInfo));
    }
    return (
        <div>
            <Form.Group controlId="preferance">
            <Form.Label>Do you prefer working independently or as part of a team?</Form.Label>
            <Form.Control
            as="textarea"
            rows={5}
            value={userInfo}
            onChange={updateUserInfo} />
            </Form.Group>
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}