import OpenAI from "openai";
import { openaiToken } from "src/controller/openaiToken";

export async function callGBT(
    {
        userPrompt, 
        startingPrompt
    } 
    : 
    {
        userPrompt: string, 
        startingPrompt: string
    }
) {
    const chatCompletion = await openaiToken.chat.completions.create({
      messages: [
        { role: 'system', content: startingPrompt },
        { role: 'user', content: userPrompt}
        ],
      model: 'gpt-3.5-turbo',
    });
    return chatCompletion;
}

export async function addResponseGBT(
  {
      choices,
      newMessage
  } 
  : 
  {
      choices: OpenAI.ChatCompletion.Choice[],
      newMessage: string
  }
) {
  // maps previous choices to an array of message objects
  const messages = choices.map((choice: OpenAI.ChatCompletion.Choice) => choice.message);
  const chatCompletion = await openaiToken.chat.completions.create({
    messages: [
      ...messages,
      {role: 'user', content: newMessage}
    ],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion;
}

