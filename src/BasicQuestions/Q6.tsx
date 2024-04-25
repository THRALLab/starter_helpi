import { useState, useContext } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { AnswerContext } from "../AnswerContext";

// Custom CSS for right-aligned radio buttons
const rightAlignedRadioStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

export function Q6(): JSX.Element {
  const [selectSeason, setSelectSeason] = useState(seasons[0]);
  const { userAnswers, setUserAnswers } = useContext(AnswerContext);

  return (
    <Container>
      <h4>What is your favorite season?</h4>
      <Row className="justify-content-center">
        <Col md={6}>
          {seasons.map((season) => (
            <div key={season} style={rightAlignedRadioStyle}>
              <span>{season}</span>
              <Form.Check
                type="radio"
                id={`season-${season}`}
                name="season-button"
                checked={selectSeason === season}
                onChange={() => {
                  setSelectSeason(season);
                  setUserAnswers((prevAnswers: string[]) => {
                    const updatedAnswers = [...prevAnswers];
                    updatedAnswers[5] = season;
                    return updatedAnswers;
                  });
                  console.log(userAnswers);
                }}
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
