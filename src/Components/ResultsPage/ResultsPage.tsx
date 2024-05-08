import React from 'react';
import OpenAI from "openai";
import './ResultsPage.css'
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation'

interface QuestionData {
    question: string;
    answer: string;
  }  

export function ResultsPage({APIKey, basicQuestionData, detailQuestionData} : {APIKey: string,basicQuestionData: QuestionData[], detailQuestionData: QuestionData[]}) {
    const client = new OpenAI({
        apiKey: APIKey,
        dangerouslyAllowBrowser: true
    })

    const pickPrompt = (basicQuestionData: QuestionData[], detailQuestionData: QuestionData[]): string => {
      if (detailQuestionData[0].answer === '') {
        return createPrompt(basicQuestionData);
      }
      else {
        return createPrompt(detailQuestionData);
      }
    }
    
    const createPrompt = (QuestionData: QuestionData[]): string => {
      let prompt: string = `Given the following questions and answers:\n\n`;
      
      prompt += QuestionData.map((questionData, index) => {
        return `Question ${index + 1}: ${QuestionData[index].question}\nAnswer: ${QuestionData[index].answer}`;
      }).join('\n\n');

      prompt += `\n\nReturn me the 3 most ideal career choices, 2 reasons why for each, and a few steps they can take to reach their highest matched career`;

      return prompt;
    }

    async function main() {
        const completion = await client.chat.completions.create({
          messages: [
            { 
              role: "system", 
              content: "You are a career selection assistant. Help the user find the best job based on their preferences and skills." },
            {
              role: "user",
              content: pickPrompt(basicQuestionData, detailQuestionData)
            }
          ],
          model: "gpt-4-turbo",
        });

        console.log(completion.choices[0].message.content);

      }

      main();
      
    return (
        <>  
            <LoadingAnimation></LoadingAnimation>
        </>
    )
}