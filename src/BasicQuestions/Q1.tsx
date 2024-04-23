import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ1";

export function Q1():JSX.Element {
    const [data, setData] = useState<string>("");

    function updateData(event: React.ChangeEvent<HTMLInputElement>) {
        setData(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(data));
      }, [data]);

    return (
        <div>
            <Form.Group controlId="userInput">
                <Form.Label>What do you like to do in your free time?</Form.Label>
                
                <Form.Control
                    type="textbox"
                    value={data}
                    onChange={updateData}
                    />
            </Form.Group>
        </div>
    );
}