import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "DetailUserInputQ3";

const places = [
    "Corporate Office",
    "Startup",
    "Non-profit Organization",
    "Goverment Agency",
    "Bank"
];

export function Q3():JSX.Element {
    const [selectPlace, setSelectPlace] = useState<string | null>(null);
    useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(selectPlace));
      }, [selectPlace]);
    return (
        <div>
            Which of the following work environments would you thrive in the most?
            {places.map((place) => (
                <Form.Check
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