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

export async function callGBT() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'tell me a short story about adventure time the show' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(chatCompletion);

}