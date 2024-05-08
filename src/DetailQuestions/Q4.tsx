import { useContext, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext"; // Verify the correct import path

const skills = [
  "attention to detail",
  "creativity",
  "analytical thinking",
  "leadership",
  "communication",
];

export function Q4(): JSX.Element {
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);
  const [selectSkill, setSelectSkill] = useState<string>(userAnswers[4] || ""); // Adjusted to use string only, defaulting to an empty string

  useEffect(() => {
    setUserAnswers([...userAnswers.slice(0, 4), selectSkill]);
  }, [selectSkill, setUserAnswers, userAnswers]);

  function handleSkillChange(skill: string) {
    setSelectSkill(skill);
  }

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
          onChange={() => handleSkillChange(skill)}
        />
      ))}
    </div>
  );
}
