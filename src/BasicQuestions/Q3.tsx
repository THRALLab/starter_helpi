import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ3";

export function Q3():JSX.Element {
    const [data, setData] = useState<string>("");

    function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
        setData(event.target.value);
    }

    function saveData() {
        localStorage.setItem(saveInfo, JSON.stringify(data));
    }

    return (
        <div>
            <Form.Group controlId="userData">
                <Form.Label>What is the highest education you have completed?</Form.Label>
                <br></br>
                <Form.Select value={data} onChange={updateData}>
                    <option value="--">--</option>
                    <option value="middleSchool">Middle School</option>
                    <option value="highSchool">High School</option>
                    <option value="associate">Associate Degree</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="doctor">Doctoral Degree</option>
                </Form.Select>
            </Form.Group>
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}