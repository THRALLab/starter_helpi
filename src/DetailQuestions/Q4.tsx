import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const saveInfo = "DetailUserInputQ4";
const skills = [
    "attention to detail",
    "creativity",
    "analytical thinking",
    "leadership",
    "communication"
];

export function Q4():JSX.Element {
    const [selectSkill, setSelectSkill] = useState<string | null>(null);
    function saveData() {
        localStorage.setItem(saveInfo, JSON.stringify(selectSkill));
    }
    return (
        <div>
            Which of the following skills do you possess and enjoy using?
            {skills.map((skill) => (
                <Form.Check
                    type="radio"
                    label={skill}
                    name="skill-button"
                    checked={selectSkill === skill}
                    onChange={() => setSelectSkill(skill)}
                />
            ))}
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}