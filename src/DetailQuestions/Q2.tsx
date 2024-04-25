import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "DetailUserInputQ2";

export function Q2(): JSX.Element {
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
            <Form.Group controlId="work-schedule">
                <Form.Label>What is your ideal working schedule?</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={userInfo}
                    onChange={updateUserInfo}
                />
            </Form.Group>
        </div>
    );
}
