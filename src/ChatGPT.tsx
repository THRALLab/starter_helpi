import OpenAI from "openai";

const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") || '""'), dangerouslyAllowBrowser: true});



export async function responseBasic(answer: { question: string, answer: string }[]){
    const formattedAnswers = answer.map(ans => `${ans.question}: ${ans.answer}`).join(", ");

    const prompt = `Based on these answers: ${formattedAnswers}. Suggest 3 career best suited for the user. Keep your answer short and simple. and lable them from 1) to 3) and give a short and simple explainion.`;


    const completion = await openai.chat.completions.create({
        messages:[{role: "system", content: "You are a Career Advisor"},
        {role: "user", content:prompt}],
        model: "gpt-3.5-turbo",
        temperature:.5, 
    });
    const result = completion.choices[0].message.content;
    console.log(completion)
    return(result);
}