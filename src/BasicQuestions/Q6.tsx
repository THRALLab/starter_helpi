import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ6";

const seasons = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter",
];

export function Q6():JSX.Element {
    const [selectSeason, setSelectSeason] = useState<string | null>(null);

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(selectSeason));
      }, [selectSeason]);

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