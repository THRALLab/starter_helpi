import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "DetailUserInputQ7";

export function Q7(): JSX.Element {
    const [userInfo, setUserInfo] = useState<string>(() => {
        const savedUserInfo = localStorage.getItem(saveInfo);
        return savedUserInfo ? JSON.parse(savedUserInfo) : "";
    });

    function updateUserInfo(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserInfo(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(userInfo));
    }, [userInfo]);

    return (
        <div>
            <Form.Group controlId="preference">
                <Form.Label>How do you feel about traveling for work?</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={userInfo}
                    onChange={updateUserInfo}
                />
            </Form.Group>
        </div>
    );
}