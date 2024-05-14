import React from "react";
import { Button, Card } from "react-bootstrap";
import { OpenAI } from "openai";

let API_KEY = localStorage.getItem("MYKEY");
let key = "";
if (API_KEY !== null) {
  key = JSON.parse(API_KEY);
}

const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });

interface Key {
  questionAndAnswer: string;
  onSaveData: () => void;
  setChangeTab: (career: string) => void;
  careers: string[];
  setCareers: (career: string[]) => void;
}

export default function Chat({
  questionAndAnswer,
  onSaveData,
  setChangeTab,
  careers,
  setCareers,
}: Key): JSX.Element {
  async function getResponse() {
    const QandA = localStorage.getItem(questionAndAnswer);
    if (QandA) {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `We constructed a set of questions, multiple choice, checkbox, short responses and long respones. 
              Our goal is to try and provide 5 best possible career paths based on the user responses to the questions with an 
              explaination about the careers including a detailed discription of what they will do in that field, their average salary, 
              possible path to their career. Have all of the information outputted within the same part of the card for typecript css.  There should
              be a period after each category. Also full words, do not shorten the words.
              `,
          },
          {
            role: "user",
            content: `Here are my questions and and answers:${QandA}`,
          },
        ],
        model: "gpt-4-turbo",
      });

      // Extracting career paths from API response
      const response = completion.choices[0].message.content;
      let careerPaths: string[] = [];
      if (response !== null) {
        careerPaths = response.split("\n");
      }

      // Update state with career paths
      setCareers(careerPaths);
      console.log(response);
    }
  }

  return (
    <div>
      <div className="Button-group">
        <Button
          className="Submit-button"
          onClick={() => {
            onSaveData();
            setChangeTab("results");
            getResponse();
          }}
          style={{ margin: "24px auto" }}
        >
          Submit
        </Button>
      </div>
      {careers.map((career, index) => (
        <Card key={index} className="career-card">
          <Card>
            <Card.Body>
              <Card.Text>{career}</Card.Text>
            </Card.Body>
          </Card>
        </Card>
      ))}
    </div>
  );
}
