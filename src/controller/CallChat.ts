import OpenAI from "openai";
import { openai } from "./OpenaiToken";

export async function callGBT(
    {
        prompt, 
        startingPrompt
    } 
    : 
    {
        prompt: string, 
        startingPrompt: string
    }
) {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: startingPrompt },
        { role: 'user', content: prompt}
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
  const messages = choices.map((choice: OpenAI.ChatCompletion.Choice) => choice.message)
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      ...messages,
      {role: "user", content: newMessage}],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion;
}

