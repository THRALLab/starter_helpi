import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Q5():JSX.Element {
    const [userInfo, setUserInfo] = useState<string>("");
    function updateUserInfo(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserInfo(event.target.value);
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
        </div>
    );
}