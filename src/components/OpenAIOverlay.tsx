import { useEffect, useState } from "react";
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

  //Set initial, Base Message
  function returnBaseMessage(qSetType: boolean): Message[] {
    if (qSetType) {
      return [
        {
          role: "system",
          content: "You are a helpful assistant. Basic Question Prompt.",
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

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: userMessage,
    });

    console.log(response);
  }

  useEffect(() => {
    // Perform any necessary actions when the current question changes
    console.log("Current question:", currentQuestion);
    agent(currentQuestion);
  });

  // run through initialization
  // show overlay with report result

  return <div></div>;
}
