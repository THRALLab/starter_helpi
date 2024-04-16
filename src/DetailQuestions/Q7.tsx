import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Q7():JSX.Element {
    const [userInfo, setUserInfo] = useState<string>("");
    function updateUserInfo(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserInfo(event.target.value);
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
        </div>
    );
}