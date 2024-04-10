import React, { useState } from "react";
import { Form } from "react-bootstrap";

const skills = [
    "attention to detail",
    "creativity",
    "analytical thinking",
    "leadership",
    "communication"
];

export function Q4():JSX.Element {
    const [selectSkill, setSelectSkill] = useState(skills[0]);

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
        </div>
    );
}