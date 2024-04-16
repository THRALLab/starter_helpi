import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Q7():JSX.Element {
    const [userInfo, setUserInfo] = useState<string>("");
    function updateUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInfo(event.target.value);
    }
    return (
        <div>
            What is your dream career?
            <br></br>
            <Form.Control
                        type="textbox"
                        value={userInfo}
                        onChange={updateUserInfo}
                    />
        </div>
    );
}