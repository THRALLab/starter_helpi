import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ3";

export function Q3():JSX.Element {
    const [data, setData] = useState<string>("");

    function updateData(event: React.ChangeEvent<HTMLSelectElement>) {
        setData(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(data));
      }, [data]);

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
        </div>
    );
}