import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ6";

const seasons = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter",
];

export function Q6():JSX.Element {
    const [selectSeason, setSelectSeason] = useState<string | null>(null);

    function saveData() {
        localStorage.setItem(saveInfo, JSON.stringify(selectSeason));
    }

    return (
        <div>
            What is your favorite season?
            {seasons.map((season) => (
                <Form.Check
                    type="radio"
                    label={season}
                    name="season-button"
                    checked={selectSeason === season}
                    onChange={() => setSelectSeason(season)}
                />
            ))}
            <Button onClick={saveData}>Save</Button>
        </div>
    );
}