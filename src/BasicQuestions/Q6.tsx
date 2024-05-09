/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

const seasons = [
    "Spring",
    "Summer",
    "Autumn",
    "Winter",
];

export function Q6():JSX.Element {
    const [selectSeason, setSelectSeason] = useState<string | null>(null);
    const { userAnswers, setUserAnswers } = useContext(AnswerContext);

    function updateSeason(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectSeason(event.target.value);
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswers((prevAnswers: string[]) => {
          const answer = event.target.value;
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[5] = answer;
          return updatedAnswers;
        });
        console.log(userAnswers);
      }

    return (
        <div>
            <br></br>
            <br></br>
            What is your favorite season?
            <br></br>
            <br></br>
            <br></br>
            {seasons.map((season) => (
                <Form.Check
                    inline
                    type="radio"
                    label={season}
                    name="season-button"
                    checked={selectSeason === season}
                    onChange={()=>setSelectSeason(season)}
                />
            ))}
        </div>
    );
}