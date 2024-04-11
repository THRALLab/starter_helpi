import OpenAI from 'openai';

const getApiKey = (): string => {
    const envKey = process.env.REACT_APP_CHATGBT_API_KEY;
    const localKey = localStorage.getItem("MYKEY")
    if(envKey != null) return envKey;
    if(localKey != null) return localKey;
    return"";
}

const openai = new OpenAI({
  apiKey: getApiKey(),
  dangerouslyAllowBrowser: true // allows for running in the browser
});

export async function createGBTStream({} : {}): Promise<OpenAI.ChatCompletion> {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ 
        role: 'system', content: 'tell me a short story about adventure time the show' }],
    model: 'gpt-3.5-turbo',

  });
  return chatCompletion;
}

export async function callGBT({startingPrompt} : {startingPrompt: string}) {
    const stream = await openai.beta.chat.completions.stream({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
    });

    stream.on('content', (delta, snapshot) => {
    process.stdout.write(delta);
    });

    // or, equivalently:
    for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
    }

    const chatCompletion = await stream.finalChatCompletion();
    console.log(chatCompletion); // {id: "…", choices: […], …}
}