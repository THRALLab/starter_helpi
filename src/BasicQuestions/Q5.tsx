import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Q5():JSX.Element {
    const [data, setData] = useState<string>("");

    function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
        setData(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userData">
                <Form.Label>What is your gender?</Form.Label>
                <br></br>
                <Form.Select value={data} onChange={updateData}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="trans">Trans-Gender</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}