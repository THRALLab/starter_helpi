import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ5";

export function Q5(): JSX.Element {
    const [data, setData] = useState<string>(() => {
        const savedData = localStorage.getItem(saveInfo);
        return savedData ? JSON.parse(savedData) : "";
    });

    function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
        setData(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(data));
    }, [data]);

    return (
        <div>
            <Form.Group controlId="userData">
                <Form.Label>What is your favorite subject when you at school?</Form.Label>
                <br></br>
                <Form.Select value={data} onChange={updateData}>
                    <option value="--">--</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                    <option value="math">Math</option>
                    <option value="art">Art</option>
                    <option value="physic">Physic</option>
                    <option value="biology">Biology</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="music">Music</option>
                    <option value="foreign-language">Foreign-Language</option>
                    <option value="health">Health</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}