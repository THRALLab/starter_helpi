import React, { useState } from "react";
import { Form } from "react-bootstrap";

const seasons = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter",
];

export function Q6():JSX.Element {
    const [selectSeason, setSelectSeason] = useState(seasons[0]);

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
        </div>
    );
}