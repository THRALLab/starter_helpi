import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Q1():JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="colors">
                <Form.Label>What is your favorite color?</Form.Label>
                <br></br>
                <Form.Select value={color} onChange={updateColor}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}