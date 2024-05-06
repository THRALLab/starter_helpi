import React from 'react';
//import OpenAI from "openai";

interface QuestionData {
    question: string;
    answer: string;
  }  

export function ResultsPage({APIKey, basicQuestionData, detailQuestionData} : {APIKey: string,basicQuestionData: QuestionData[], detailQuestionData: QuestionData[]}) {
    //const client = new OpenAI({
    //    apiKey: APIKey,
    //    dangerouslyAllowBrowser: true
    //})
    
    const createPrompt = (detailQuestionData: QuestionData[]): string => {
      let prompt: string = `Given the following questions and answers:\n\n`;
      
      prompt += detailQuestionData.map((questionData, index) => {
        return `Question ${index + 1}: ${questionData.question}\nAnswer: ${questionData.answer}`;
      }).join('\n\n');

      prompt += `\n\nReturn me the person's 3 most ideal quiz choices, 2 reasons why for each, and a few steps they can take to reach their highest matched career`;

      return prompt;
    }

    console.log(createPrompt(detailQuestionData));

    //async function main() {
    //    const completion = await client.chat.completions.create({
    //      messages: [{ role: "system", content: "You are a helpful assistant." }],
    //      model: "gpt-3.5-turbo",
    //    });
    //  
    //    console.log(completion.choices[0]);
    //  }

    //main();

    return (
        <h1>ResultsPage</h1>
    )
}