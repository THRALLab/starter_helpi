import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { PopUpAlert } from "./PopUpAlert";
import { ApiAnswer } from "./QuestionCard";
import OpenAI from "openai";
import { saveKeyData } from "./CustomFooter";

interface OneResult {
  title: string;
  description: string;
  avgSalary: string;
  reason: string[];
  exp: string;
  nextSteps: string[];
}

interface ResultType {
  recommendations: OneResult[];
}

export function APIButton(): JSX.Element {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [buttonKey, setButtonKey] = useState<number>(0); // Key to force re-render of button

  const handleAlertClose = () => {
    setShowAlert(false);
    setButtonKey((prevKey) => prevKey + 1);
  };

  const openAlert = () => {
    setShowAlert(true);
  };

  //const [value, setValue] = useState<string>(""); // Sets the input value for the API
  const [results, setResults] = useState<ResultType>({
    recommendations: [
      {
        title: "",
        description: "",
        avgSalary: "",
        reason: [""],
        exp: "",
        nextSteps: [""],
      },
    ],
  });
  //const [apiVal, setApiVal] = useState<string>(""); // Sets the value of the entire conversation
  const [dispInit, setDispInit] = useState<boolean>(true); // Displays the initial output on the launch of the page
  const [dispFinal, setDispFinal] = useState<boolean>(false); // Displays the final output after the career recommendation is made
  const [error, setError] = useState<boolean>(false); // Displays error messages
  const [loading, setLoading] = useState<boolean>(false); // Displays the loading screen text
  const [errorMessage, setErrorMessage] = useState<string>(
    "API: Error. Try resubmitting your API key."
  );

  let apiQuestions: ChatCompletionMessageParam[];
  let userAnswers: ChatCompletionMessageParam[];

  const saveAnswersKey = "apiAnswers";
  const previousData = localStorage.getItem(saveAnswersKey);

  let loadedData: ApiAnswer[] = previousData ? JSON.parse(previousData) : [];
  if (previousData !== null) {
    loadedData = JSON.parse(previousData);
  }

  const questionArray = loadedData.map(
    (val: { question: string; answer: string | null }): string => val.question
  );
  const answerArray = loadedData.map(
    (val: { question: string; answer: string | null }): string =>
      val.answer || ""
  );

  apiQuestions = questionArray.map(
    (val: string): ChatCompletionMessageParam => ({
      role: "assistant",
      content: val,
    })
  );
  userAnswers = answerArray.map(
    (val: string): ChatCompletionMessageParam => ({
      role: "user",
      content: val,
    })
  );

  const example_output: ResultType = {
    recommendations: [
      {
        title: "Software Developer",
        description:
          "Software developers design, code, and test computer programs and applications.",
        avgSalary: "$80,000",
        reason: [
          "High demand for software development skills",
          "Opportunities for remote work",
          "Potential for career growth",
        ],
        exp: "Bachelor's degree in computer science or related field",
        nextSteps: [
          "Gain practical experience through internships or personal projects",
          "Continue learning new programming languages and technologies",
          "Build a portfolio of projects to showcase skills",
        ],
      },
    ],
  };

  const [chatLog, setChatLog] = useState<ChatCompletionMessageParam[]>([
    {
      role: "system",
      content: "You are a career advisor. You give valid JSON output.",
    },
    {
      role: "user",
      content:
        "I am trying to figure out what my future career should be. Ask me a list of questions that I can answer.",
    },
    ...apiQuestions,
    ...userAnswers,
    {
      role: "user",
      content:
        "That was all of the answers. Now give me your top three career recommendations. For the recommendations I want to see the title, description, avgSalary, reason, exp, nextSteps. I want an array of objects called recommendations in the following format:" +
        JSON.stringify(example_output),
    },
  ]);

  async function careerRecommendation() {
    setError(false);
    setDispInit(false);

    if (
      localStorage.getItem(saveKeyData) !== null &&
      localStorage.getItem(saveKeyData) !== ""
    ) {
      let openai = new OpenAI({
        apiKey:
          localStorage.getItem(saveKeyData)?.replace(/"/g, "") || undefined,
        dangerouslyAllowBrowser: true,
      });

      try {
        // Enables the loading screen
        setLoading(true);
        const apiMessage: ChatCompletionMessageParam[] = [...chatLog];
        const completion = await openai.chat.completions.create({
          messages: apiMessage,
          model: "gpt-4o",
          response_format: { type: "json_object" },
          temperature: 0.2,
        });

        // Disables the loading screen
        setLoading(false);
        // Adds the chat and the other buttons
        setDispFinal(true);
        // Extracts the message out of API response

        console.log("API Response:", completion.choices[0].message.content);

        if (completion.choices[0].message.content !== null) {
          const apiResponseContent: ResultType = JSON.parse(
            completion.choices[0].message.content
          );

          if (apiResponseContent && apiResponseContent.recommendations) {
            setResults(apiResponseContent);
          } else {
            console.log("API response does not contain recommendations.");
            setResults({
              recommendations: [],
            });
          }
        } else {
          console.log("API response content is null.");
          setResults({
            recommendations: [],
          });
        }

        const apiResponse: ChatCompletionMessageParam[] = [
          ...apiMessage,
          completion.choices[0]["message"],
        ];
        setChatLog(apiResponse);
        // make system
      } catch (error) {
        // Website outputs an error message

        console.log("Error: ", error);
        setLoading(false);
        //setValue(JSON.stringify("API: Error. Try resubmitting your API key."));
        setDispInit(true);
        setErrorMessage("API: Error. Try resubmitting your API key.");
        setError(true);
      }
    } else {
      setLoading(false);
      setErrorMessage(
        "You Must Enter A Valid API Key before generating results."
      );
      setDispInit(true);
      setError(true);
    }
  }

  // USED FOR CONVERSATION (chatbot)

  // async function computeAPI(apiInput: string) {
  //   try {
  //     const apiMessage: ChatCompletionMessageParam[] = [
  //       ...chatLog,
  //       { role: "user", content: apiInput },
  //     ];
  //     setValue(value + "\n\nYou: " + apiInput);

  //     setLoading(true);
  //     const completion = await openai.chat.completions.create({
  //       messages: apiMessage,
  //       model: "gpt-4o",
  //       response_format: { type: "json_object" },
  //       temperature: 0.2,
  //     });
  //     setLoading(false);

  //     setValue(JSON.stringify(completion.choices[0]["message"]["content"]));

  //     const apiResponse: ChatCompletionMessageParam[] = [
  //       ...apiMessage,
  //       completion.choices[0]["message"],
  //     ];
  //     setChatLog(apiResponse);
  //   } catch (error) {
  //     console.log("Error");
  //     setLoading(false);
  //     setValue(JSON.stringify("Error. Try resubmitting your API key."));
  //   }
  // }

  // function updateName(event: React.ChangeEvent<HTMLInputElement>) {
  //   setApiVal(event.target.value);
  // }

  return (
    <div className="all-api-content" id="api-content">
      {dispInit === true && (
        <span>
          <p>
            Discover your path to success today. Take our interactive career
            quiz and unlock personalized insights tailored just for you. Let's
            start your journey together!
          </p>
          <Button
            key={buttonKey}
            className="small-normal-btn"
            id="generateButton"
            onClick={() => {
              openAlert();
              careerRecommendation();
            }}
          >
            Generate your Career Advice
          </Button>
        </span>
      )}
      {loading && !dispFinal && <h2>Loading...</h2>}
      {error === true && showAlert && (
        <PopUpAlert errorMessage={errorMessage} onClose={handleAlertClose} />
      )}
      <span>
        {dispFinal === true && (
          <>
            <span>
              {results && (
                <div className="career-recommendations">
                  {results && (
                    <div className="recommendations-container">
                      {results.recommendations &&
                      results.recommendations.length > 0 ? (
                        results.recommendations.map(
                          (recommendation: OneResult, index: number) => (
                            <div key={index} className="recommendation-card">
                              <h2 className="recommendation-title">
                                {recommendation.title}
                              </h2>
                              <p className="recommendation-description">
                                {recommendation.description}
                              </p>
                              <p className="recommendation-salary">
                                <strong>Average Salary:</strong>{" "}
                                {recommendation.avgSalary}
                              </p>
                              <div className="reasons">
                                <strong>Justification:</strong>
                                <ul className="reasons-list">
                                  {recommendation.reason.map((reason, i) => (
                                    <li key={i} className="reasons-list-item">
                                      {reason}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p className="experience-required">
                                <strong>Required Experience:</strong>{" "}
                                {recommendation.exp}
                              </p>
                              <div className="next-steps">
                                <strong>Next Steps:</strong>
                                <ul className="next-steps-list">
                                  {recommendation.nextSteps.map((step, i) => (
                                    <li
                                      key={i}
                                      className="next-steps-list-item"
                                    >
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )
                        )
                      ) : (
                        <p>No recommendations available</p>
                      )}
                    </div>
                  )}
                </div>
              )}
              {/* <div className="chat-further">
                <Form.Group controlId="apiValue">
                  <Form.Label>
                    Enter any followup career related questions:{" "}
                  </Form.Label>
                  <Form.Control value={apiVal} onChange={updateName} />
                  <Form.Text className="WhatIsThis">.</Form.Text>
                </Form.Group>
                <Button
                  className="small-normal-btn"
                  onClick={() => computeAPI(apiVal)}
                >
                  Answer Your Question
                </Button>
              </div> */}
            </span>
          </>
        )}
      </span>
    </div>
  );
}
