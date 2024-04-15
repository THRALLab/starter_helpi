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

