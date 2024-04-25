import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const saveInfo = "BasicUserInputQ6";

const seasons = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter",
];

export function Q6(): JSX.Element {
    const [selectSeason, setSelectSeason] = useState<string | null>(() => {
        const savedSeason = localStorage.getItem(saveInfo);
        return savedSeason ? JSON.parse(savedSeason) : null;
      });

      useEffect(() => {
        localStorage.setItem(saveInfo, JSON.stringify(selectSeason));
      }, [selectSeason]);
    
      const SeasonChange = (selectedSeason: string) => {
        setSelectSeason(selectedSeason);
      };
    
      return (
        <div>
          <h3>What is your favorite season?</h3>
          {seasons.map((season) => (
            <Form.Check
              key={season}
              type="radio"
              label={season}
              name="season-button"
              checked={selectSeason === season}
              onChange={() => SeasonChange(season)}
            />
          ))}
        </div>
      );
}
