import OpenAI from "openai";

const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") || '""'), dangerouslyAllowBrowser: true});


export async function responseDetailed(answer: string[]){
    const question = ["1. What careers seem interesting to you? Why?",
    "2. What are your current skills? (Hard Skills and Soft Skills)",
    "3. What is your highest level of education or training?",
    "4. What is your ideal Work-life balance?",
    "5. What are you willing to give up for better career opportunities?",
    "6. How important is money?",
    "7. What impact do you want to make on the world?"];
    const completion = await openai.chat.completions.create({
        messages:[{role: "system", content: "You are a Career Advisor"},
        {role: "user", content:'Based on these answer:' +answer + ' to these questoins' + question + ". Suggest a Career best fited for the user. keep your answer short and simple "}],
        model: "gpt-3.5-turbo",
        temperature:.5, 
    });
    const result = completion.choices[0];
    console.log(completion.choices[0]);
    return(result);
}