import { Card } from "react-bootstrap";
import "./Results.css";
import { Spinner } from "./Spinner";
import React, { useState } from "react";

interface Careers {
  careers: string[];
}

interface drop {
  careerName: string;
  careerBody: string;
}

function DropDown({ careerName, careerBody }: drop): JSX.Element {
  const [showBody, setShowBody] = useState<boolean>(false);

  // Split the career body into separate lines
  const lines = careerBody.split("\n");

  return (
    <div>
      <h1 onClick={() => setShowBody(!showBody)}>{careerName}</h1>
      {showBody && (
        <div className={`body ${showBody ? "expanded" : ""}`}>
          {lines.map((line, index) => (
            <Card key={index}>
              <Card className="Seperate-Careers">
                <Card.Body className="Seperate-Careers2">
                  <Card.Text style={{ whiteSpace: "pre-wrap" }}>
                    {line.replace(/\*\*/gm, "").split("-").join("\n")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export function Results({ careers }: Careers) {
  const [results, setResults] = useState<drop[]>([]);

  function show() {
    let title = "";
    let body = "";
    careers.forEach((career) => {
      if (career.trim() === "") {
        const newDrop: drop = { careerName: title, careerBody: body };
        setResults((prevResults) => [...prevResults, newDrop]);
        title = "";
        body = "";
      } else {
        const careerNum = parseInt(career[0]);
        if (!isNaN(careerNum) || career[0] === "#") {
          title = career;
        } else {
          body += career;
        }
      }
    });
  }

  if (results.length === 0) {
    show();
  }

  return (
    <>
      <div className="Results-Title">Results</div>
      <div className="Results">
        {careers.length === 0 ? (
          <Spinner />
        ) : (
          results.map((result, index) => (
            <Card key={index}>
              <Card className="Seperate-Careers">
                <Card.Body>
                  <DropDown
                    careerName={result.careerName
                      .substr(3)
                      .replace(/\*\*/g, "")
                      .replace(/:/g, "")}
                    careerBody={result.careerBody}
                  />
                </Card.Body>
              </Card>
            </Card>
          ))
        )}
      </div>
    </>
  );
}
