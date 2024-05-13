import OpenAI from "openai";

const API_KEY = JSON.parse(localStorage.getItem("MYKEY"))
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
const answers = JSON.parse(localStorage.getItem("BasicQuestionAnswers"));

export async function generateBasicGPT() {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a career quiz results generator." },
        { role: "user", content: `Generate a list of three careers with descriptions, while making no mention of the prompt, based on the following questions and answers. Each response corresponds to respective question based on placement in the list. Put a colon after the description of each career. ${ answers }` },
        { role: "user", content: `The resulting JSON object should be formatted like {"job1": "","description1":"", "job2":"", "description2":"", "job3":"", "description3":"" }` }
      ],
      model: "gpt-4-turbo",
      response_format: {type : "json_object"},
      temperature: .75
    });
    
    const results = completion.choices[0].message
    console.log(results)
    if(!results || Object.keys(results).length === 0) {
      throw new Error("incomplete or incrorect response from AI model")
    }

    /*const title1 = results.job1
    const title2 = results.job2
    const title3 = results.job3
    const desc1 = results.desc1
    const desc2 = results.desc2
    const desc3 = results.desc3
    const titles = [title1, title2, title3]
    const descriptions = [desc1, desc2, desc3]*/
    
    return results;
}

