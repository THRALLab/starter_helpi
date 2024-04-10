import React, { useState } from "react";
import { Form } from "react-bootstrap";

const reasons = [
    "Salary",
    "Work-life balance",
    "Helping others",
    "Others Reasons",
];

export function Q1():JSX.Element {
    const [selectReason, setSelectReason] = useState(reasons[0]);

    const [userInfo, setUserInfo] = useState<string>("");
    function updateUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInfo(event.target.value);
    }

    return (
        <div>
            What is most important to you in a job?
            {reasons.map((reason) => (
                <Form.Check
                    type="radio"
                    label={reason}
                    name="reason-button"
                    checked={selectReason === reason}
                    onChange={() => setSelectReason(reason)}
                />
            ))}
            <Form.Control
                        type="textbox"
                        value={userInfo}
                        onChange={updateUserInfo}
                    />
        </div>
    );
}