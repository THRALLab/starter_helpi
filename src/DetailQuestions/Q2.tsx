import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const saveInfo = "DetailUserInputQ2";

export function Q2():JSX.Element {
    const [userInfo, setUserInfo] = useState<string>("");
    function updateUserInfo(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserInfo(event.target.value);
    }
    function saveData() {
        localStorage.setItem(saveInfo, JSON.stringify(userInfo));
    }
    return (
        <div>
            <Form.Group controlId="work-schedule">
            <Form.Label>What is your ideal working schedule?</Form.Label>
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