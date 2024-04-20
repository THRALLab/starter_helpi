import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const saveInfo = "DetailUserInputQ7";
export function Q7():JSX.Element {
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
            <Form.Label>How do you feel about traveling for work?</Form.Label>
            <Form.Control
            as="textarea"
            rows={3}
            value={userInfo}
            onChange={updateUserInfo} />
            </Form.Group>
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}