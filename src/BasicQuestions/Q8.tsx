import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ8";

export function Q8(): JSX.Element {
    const [data, setData] = useState<string>(() => {
        const savedData = localStorage.getItem(saveInfo);
        return savedData ? JSON.parse(savedData) : "";
    });

    function updateData(event: React.ChangeEvent<HTMLInputElement>) {
        setData(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(data));
    }, [data]);

    return (
        <div>
            <Form.Group controlId="userInput">
                <Form.Label>What is your dream Company?</Form.Label>
                
                <Form.Control
                    type="textbox"
                    value={data}
                    onChange={updateData}
                    />
            </Form.Group>
        </div>
    );
}
