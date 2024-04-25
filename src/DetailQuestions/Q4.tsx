import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "DetailUserInputQ4";

const skills = [
    "attention to detail",
    "creativity",
    "analytical thinking",
    "leadership",
    "communication"
];

export function Q4(): JSX.Element {
    const [selectSkill, setSelectSkill] = useState<string | null>(() => {
        const savedSelectSkill = localStorage.getItem(saveInfo);
        return savedSelectSkill ? JSON.parse(savedSelectSkill) : null;
    });

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(selectSkill));
    }, [selectSkill]);

    return (
        <div>
            <h3>Which of the following skills do you possess and enjoy using?</h3>
            {skills.map((skill) => (
                <Form.Check
                    key={skill}
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