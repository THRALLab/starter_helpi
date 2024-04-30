import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Offcanvas from "react-bootstrap/Offcanvas";

import OpenAI from "openai";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OpenAIOverlayProps {
  basicQuestionSet: boolean;
  currentQuestion: string;
  openAIKey: string;
}

export function OpenAIOverlay({
  basicQuestionSet,
  currentQuestion,
  openAIKey,
}: OpenAIOverlayProps): JSX.Element {
  const openai = new OpenAI({
    apiKey: openAIKey,
    dangerouslyAllowBrowser: true,
  });

  const [userMessage, setUserMessage] = useState<Message[]>(
    returnBaseMessage(basicQuestionSet),
  );

  const [show, setShow] = useState(false);

  const [responses, setResponses] = useState<string[]>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Set initial, Base Message
  function returnBaseMessage(qSetType: boolean): Message[] {
    if (qSetType) {
      return [
        {
          role: "system",
          content: `You are on a Career Survey site (called FindMyCareer, for University of Delaware students) that contains a form that aims to provide users with feedback concerning their potential careers based on their input to questions, with answers augmented by you, an LLM. You will be receiving answers to the questions below and it is your responsability to analyze the answers provided, as they are provided (one-by-one), and began ideating potential careers based on their answers (essentially, brainstorm as they answer). After the final question, you will generate 2-3 sentences with your conclusive verdict. The user may go back and reanswer the question, keep this in mind. Be personable, though not too verbose. Try as best as you can to provide an insightful answer. Your aim should be to provide the most accurate responses based given the input
            Here are the questions, in the order:
            1. What is your favorite color?
            2. How old are you?
            3. What is the highest level of education completed?
            4. What is your ethnicity?
            5. What is your gender?
            6. What is your favorite season?
            7. What is your dream career?
            8. What is your favorite subject?

            RESPOND WITH "Excited to take a look at your responses!" IF YOU UNDERSTAND
            `,
        },
      ];
    } else {
      return [
        {
          role: "system",
          content: "You are a helpful assistant. Detailed Questions ---.",
        },
      ];
    }
  }

  //Branch: Submit Prompt for either SQ or DQ, return text result
  async function agent(userInput: string) {
    setUserMessage((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: userInput,
      },
    ]);
  }

  useEffect(() => {
    if (
      currentQuestion !== userMessage[userMessage.length - 1].content &&
      currentQuestion
    ) {
      async function processLatest(): Promise<string> {
        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: userMessage,
        });
        const content = response.choices[0].message.content;
        if (content === null) {
          throw new Error("Message content is null");
        }
        return content;
      }
      console.log("in here");

      async function exec() {
        await agent(currentQuestion);
        const gptRetVal = await processLatest();
        setResponses((prevResponses) => [...prevResponses, gptRetVal]);
      }
      exec();
      console.log(userMessage);
    }
  }, [currentQuestion]); // eslint-disable-line react-hooks/exhaustive-deps

  // run through initialization
  // show overlay with report result

  return (
    <>
      <div className="d-block mt-3">
        <Button variant="secondary" onClick={handleShow}>
          AI Feedback
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Live Insight</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {responses.map((response, index) => (
            <Alert key={index} variant="info" className="mb-2">
              {response}
            </Alert>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
