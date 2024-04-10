import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Q4():JSX.Element {
    const [ethnic, setEthnic] = useState<string>("");

    function updateEthnic(event: React.ChangeEvent<HTMLSelectElement>) {
        setEthnic(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userEthnicities">
                <Form.Label>What is your ethnicity?</Form.Label>
                <br></br>
                <Form.Select value={ethnic} onChange={updateEthnic}>
                    <option value="asian">Asian</option>
                    <option value="african">African</option>
                    <option value="arab">Arab</option>
                    <option value="latinx">Latinx</option>
                    <option value="white">White</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}