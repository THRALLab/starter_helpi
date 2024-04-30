import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const reasons = [
  "Salary",
  "Work-life balance",
  "Helping others",
  "Others Reasons",
];
const saveInfoS = "DetailUserInputQ1_select";
const saveInfoT = "DetailUserInputQ1_type";

export function Q1(): JSX.Element {
    const [selectReason, setSelectReason] = useState<string | null>(() => {
        const savedSelectReason = localStorage.getItem(saveInfoS);
        return savedSelectReason ? JSON.parse(savedSelectReason) : null;
    });

    const [userInfo, setUserInfo] = useState<string>(() => {
        const savedUserInfo = localStorage.getItem(saveInfoT);
        return savedUserInfo ? JSON.parse(savedUserInfo) : "";
    });

    function updateUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInfo(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem(saveInfoS, JSON.stringify(selectReason));
        localStorage.setItem(saveInfoT, JSON.stringify(userInfo));
    }, [selectReason, userInfo]);

    return (
        <div>
            <h3>What is most important to you in a job?</h3>
            {reasons.map((reason) => (
                <Form.Check
                    key={reason}
                    type="radio"
                    label={reason}
                    name="reason-button"
                    checked={selectReason === reason}
                    onChange={() => setSelectReason(reason)}
                />
            ))}
            <br />
            <p>If "Others" OR have anything to share, please indicate here:</p>
            <Form.Control
                type="textbox"
                value={userInfo}
                onChange={updateUserInfo}
            />
        </div>
    );
}