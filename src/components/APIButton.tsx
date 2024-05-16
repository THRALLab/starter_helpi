
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { openai } from "../components/CustomFooter";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
//import OpenAI from "openai";
import { ApiAnswer } from "./QuestionCard";
//import { apiQuestions, userAnswers } from "./QuestionCard";
//import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
//import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export function APIButton(): JSX.Element {
  // States
  // The API input. Both are used for the API output.
  const [value, setValue] = useState<string>("");               // Sets the input value for the API
  const [apiVal, setApiVal] = useState<string>("");             // Sets the value of the entire conversation
  const [dispInit, setDispInit] = useState<boolean>(true);      // Displays the initial output on the launch of the page
  const [dispFinal, setDispFinal] = useState<boolean>(false);   // Displays the final output after the career recommendation is made
  const [error, setError] = useState<boolean>(false);           // Displays error messages
  const [loading, setLoading] = useState<boolean>(false);       // Displays the loading screen text
  // The whole conversation

  let apiQuestions: ChatCompletionMessageParam[];
  let userAnswers: ChatCompletionMessageParam[];
  




  // Creates the arrays needed for the api calls
  const saveAnswersKey = "apiAnswers";
  const previousData = localStorage.getItem(saveAnswersKey);

  let loadedData: ApiAnswer[] = previousData ? JSON.parse(previousData) : [];
  if (previousData !== null) {
    loadedData = JSON.parse(previousData);
  }

  

  const questionArray = loadedData.map((val: {
    question: string;
    answer: string | null;
    }): string => val.question);
  const answerArray = loadedData.map((val: {
    question: string;
    answer: string | null;
    }): string => val.answer || "");


  apiQuestions = questionArray.map((val: string): ChatCompletionMessageParam => ({ role: "assistant", content: val }));
  userAnswers = answerArray.map((val: string): ChatCompletionMessageParam => ({ role: "user", content: val }));
  const [chatLog, setChatLog] = useState<ChatCompletionMessageParam[]>([{ role: "system", content: "You are a career advisor." }, { role: "user", content: "I am trying to figure out what my future career should be. Ask me a list of questions that I can answer." },  ...apiQuestions, ...userAnswers, { role: "user", content: "That was all of the answers. Now give me your top three career recommendations. For each career, describe what the career is, explain why this career is a good fit for me, the average salary, and what experience I need for this career, and the next steps I should take."}]);


  async function careerRecommendation() {
    setError(false);
    // Removes the initial button  
    setDispInit(false);
    // Tries to call the API
    try {
      // Enables the loading screen
      setLoading(true);
      const apiMessage: ChatCompletionMessageParam[] = [...chatLog];
      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-3.5-turbo",
      });
      // Disables the loading screen
      setLoading(false);
      // Adds the chat and the other buttons
      setDispFinal(true);
      // Extracts the message out of API response
      setValue(value + "AI Career Assistant: " + JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      //console.log(completion.choices[0]);
      
      const apiResponse: ChatCompletionMessageParam[] = [...apiMessage, completion.choices[0]["message"]];
      setChatLog(apiResponse);
      // make system
    }
    // Website outputs an error message
    
    catch (error) {
      console.log("Error");
      setLoading(false);
      setValue(JSON.stringify("API: Error. Try resubmitting your API key."));
      setDispInit(true);
      setError(true);
    }
  
  }


  async function computeAPI(apiInput: string) {
    // Tries to call the API
    try {
      const apiMessage: ChatCompletionMessageParam[] = [...chatLog, {role: "user", content: apiInput }];
      setValue(value + "\n\nYou: " + apiInput);

      setLoading(true);
      const completion = await openai.chat.completions.create({
        messages: apiMessage,
        model: "gpt-4o",
      });
      setLoading(false);
      // The inititial setValue does not save in the state, so everything has to be copied over again.
      setValue(value + "\n\nYou: " + apiInput + "\n\nAI Career Assistant: " + JSON.stringify(completion.choices[0]["message"]["content"]).replace(/\\n/g, "\n"));
      //console.log(completion.choices[0]);
      
      const apiResponse: ChatCompletionMessageParam[] = [...apiMessage, completion.choices[0]["message"]];
      setChatLog(apiResponse);
      // make system
    }
    // Website outputs an error message
    catch (error) {
      console.log("Error");
      setLoading(false);
      setValue(JSON.stringify("Error. Try resubmitting your API key."));

    }
    
    console.log(chatLog);
  }
  // Hook does what?
  function updateName(event: React.ChangeEvent<HTMLInputElement>) {
     setApiVal(event.target.value);
  }

  // Runs the API on loading the page.
  /*
  useEffect(() => {
    // Run computeAPI() when the component mounts (i.e., when the page loads)
    computeAPI(""); // You can provide an initial question or input here
  }, []);
  */

  return (
    <div>
      {dispInit === true &&
      <span>
          {/* Generates the career advice summary */}
          <Button onClick={() => careerRecommendation()}>Generate your Career Advice</Button>
      </span>}
      <br></br>
      {error === true &&
        <span>
          "API: Error. Try resubmitting your API key."
      </span>}
      
      <br></br>
      <br></br>

      {(loading === true && dispFinal === false) && <span>
        Loading ...
        </span>}
      
      <br></br>
      <br></br>

      <span>
      {dispFinal === true && 
      <><span>
      {/* Outputs whatever the API last said */}
      AI Career Assistant: {value}

      <br></br>
      <br></br>

      {loading === true && <span>
        Loading ...
        </span>}
      <br></br>
      <br></br>

      {/* Textbox that makes you input your career preferences or whatever */}
      {<Form.Group controlId="apiValue">
        <Form.Label>Enter any followup career related questions: </Form.Label>
        <Form.Control value={apiVal} onChange={updateName} />
        <Form.Text className="WhatIsThis">
                    .
        </Form.Text>
      </Form.Group>}
      {/* Button that calls the API on whatever is in the textbox */}
      <Button onClick={() => computeAPI(apiVal)}>Answer Your Question</Button>
          </span><span>
              {/* Button that calls the API to generate a rap */}
              <Button onClick={() => computeAPI("Come up with a rap.")}> ??? </Button>
            </span><span>
      </span></>
        }
      </span>
      <br></br>
      <br></br>
    </div>
  );
}