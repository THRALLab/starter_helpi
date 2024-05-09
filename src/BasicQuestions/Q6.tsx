import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

export function Q6(): JSX.Element {
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);
  const [selectSeason, setSelectSeason] = useState<string | null>(
    userAnswers[5] || null,
  ); // Initialize from context

  function updateSeason(season: string) {
    setSelectSeason(season); // Update local state
    setUserAnswers((prevAnswers: string[]) => {
      // Update context
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[5] = season; // Assume index 5 is correct for this answer
      return updatedAnswers;
    });
  }

  return (
    <div>
      <h3 className="py-5">What is your favorite season?</h3>
      {seasons.map((season) => (
        <Form.Check
          key={season} // Ensure to add a unique key for each item
          inline
          type="radio"
          label={season}
          name="season-button"
          checked={selectSeason === season}
          onChange={() => updateSeason(season)} // Use the consolidated update function
        />
      ))}
    </div>
  );
}
