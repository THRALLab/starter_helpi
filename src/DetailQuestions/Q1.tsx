import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const reasons = [
    "Salary",
    "Work-life balance",
    "Helping others",
    "Others Reasons",
];
const saveInfoS = "DetailUserInputQ1_select";
const saveInfoT = "DetailUserInputQ1_type";

export function Q1():JSX.Element {
    const [selectReason, setSelectReason] = useState<string | null>(null);

    const [userInfo, setUserInfo] = useState<string>("");
    function updateUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInfo(event.target.value);
    }
    function saveData() {
        localStorage.setItem(saveInfoS, JSON.stringify(selectReason));
        localStorage.setItem(saveInfoT, JSON.stringify(userInfo));
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
            <br></br>
            if "Others" OR have anything to share, please indicate here:
            <Form.Control
                        type="textbox"
                        value={userInfo}
                        onChange={updateUserInfo}
                    />
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}