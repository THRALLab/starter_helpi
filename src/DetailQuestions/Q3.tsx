import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "DetailUserInputQ3";

const places = [
    "Corporate Office",
    "Startup",
    "Non-profit Organization",
    "Government Agency",
    "Bank"
];

export function Q3(): JSX.Element {
    const [selectPlace, setSelectPlace] = useState<string | null>(() => {
        const savedSelectPlace = localStorage.getItem(saveInfo);
        return savedSelectPlace ? JSON.parse(savedSelectPlace) : null;
    });

    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(selectPlace));
    }, [selectPlace]);

    return (
        <div>
            <h3>Which of the following work environments would you thrive in the most?</h3>
            {places.map((place) => (
                <Form.Check
                    key={place}
                    type="radio"
                    label={place}
                    name="place-button"
                    checked={selectPlace === place}
                    onChange={() => setSelectPlace(place)}
                />
            ))}
        </div>
    );
}