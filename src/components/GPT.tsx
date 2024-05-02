import OpenAI from "openai";
import { Question } from "./BasicQuiz";

export interface CareerRecommendation {
  jobTitle: string;
  jobDescription: string;
  averageSalary: string[];
  requirements: string;
  applicationToCareer: string;
}

function parseCareerRecommendation(apiResponse: string): CareerRecommendation {
  const matches = apiResponse.match(/\{(.*?)\}/g)?.map(match => match.slice(1, -1)) ?? []; // Get the matches from the response

  return {
      jobTitle: matches[0],
      jobDescription: matches[1],
      averageSalary: matches[2]?.split(', ') ?? [],
      requirements: matches[3],
      applicationToCareer: matches[4]
  };
}

async function sendChatQuery(query: string, key: string): Promise<CareerRecommendation | null> {
  const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true }); // Create an instance of the OpenAI class
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "gpt-4", // The model to use, with minimim being gpt-4
  });
  const apiResponse = completion.choices[0]?.message?.content ?? null; // Get the response from the API if it exists
  if (apiResponse) { // If the response exists, parse it
    return parseCareerRecommendation(apiResponse);
  }
  return null;
}

export async function sendBasicQuizQuery(
  questions: Question[],
  key: string
) {
  let query =
    "Act as a career counselor. These questions were asked to the student with answers provided, but aimed at being a basic career quiz. \n";
  for (let i = 0; i < questions.length; i++) {
    // Adds the question followed by the answer to the query
    query += questions[i].question + ". " + questions[i].chosenAnswer + ".\n";
  }
  query += "Please provide a report on the student's career path using this template, {reccomended job}, {job description}, {lower salary, median salary, upper salary}, {education required}, {how this job relates to the quiz}";
  return await sendChatQuery(query, key);
}

export async function sendDetailedQuizQuery(questions: string[], answers: string[], key: string) {
  let query =
  "Act as a career counselor. These questions were asked to the student with answers provided, but aimed at being a detailed career quiz. Please provide a report on the student's career path including potential jobs, industries, and possible salaries. \n";
  for (let i = 0; i < questions.length; i++) {
    query += questions[i] + ". " + answers[i] + ".\n";
  }
  return await sendChatQuery(query, key);
}
