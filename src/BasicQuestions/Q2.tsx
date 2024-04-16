import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Q2():JSX.Element {
    const [age, setAge] = useState<string>("");

    function updateAge(event: React.ChangeEvent<HTMLInputElement>) {
        setAge(event.target.value);
    }

    return (
        <div>
            "How old are you?"
            <br></br>
            <Form.Control
                        type="textbox"
                        value={age}
                        onChange={updateAge}
                    />
        </div>
    );
}