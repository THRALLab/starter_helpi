import OpenAI from "openai";

const API_KEY = JSON.parse(localStorage.getItem("MYKEY"))
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
const answers = JSON.parse(localStorage.getItem("BasicQuestionAnswers"));

export async function generateBasicGPT() {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a career quiz results generator." },
        { role: "user", content: `Generate a list of three careers with descriptions, while making no mention of the prompt, based on the following questions and answers. Each response corresponds to respective question based on placement in the list. Put a colon after the description of each career. ${ answers }` }
      ],
      model: "gpt-4-turbo",
    });
    const results = completion.choices[0].message.content?.split(':') ?? [];
    if(results === undefined) {
      generateBasicGPT()
    }
    if(results[0].length > 200) {
      console.log("Error");
      generateBasicGPT()
    }
    const r1 = results[0].split(':');
    const r2 = results[0].split(':');
    const r3 = results[0].split(':');
    
    return [r1, r2, r3];
}

