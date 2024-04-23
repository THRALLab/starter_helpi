import OpenAI from "openai";
import detailedQuestions from "../detailedQuestions.json";
import { Answer } from "../detailed";

interface Tools {
	checkConnection: () => void;
}

// TODO - [ ] will need to change ChatGPT prompt from 1 report to 4
// TODO - [ ] will need to add markdown support since ChatGPT occasionally returns a response with markdown

export default function useChatGPT(): Tools {
	const API_KEY: string | null = localStorage.getItem("MYKEY");

	async function callAPI(openai: OpenAI, users_responses: Answer[]) {
		let formattedQ_A = "";
		users_responses.map((a: Answer) => {
			formattedQ_A += `(${a.questionNo}) ${a.question} \n ${a.choice} \n`;
		});

		let response = "";
		try {
			const stream = await openai.chat.completions.create({
				model: "gpt-3.5-turbo",
				messages: [
					{
						role: "user",
						content: `I am looking to generate 1 detailed and lengthy report catered towards helping a user find a list of careers by name that would closely match with what they've answered given a set of questions. When generating this report, please give a detailed explanation why each career you list may be a good fit for the user. These questions are as follows: ${formattedQ_A}`
					}
				],
				stream: true
			});
			for await (const part of stream) {
				if (part.choices[0].delta.content !== undefined) {
					response += part.choices[0].delta.content;
				}
			}
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	const users_responses: string | null =
		localStorage.getItem("answered_questions");

	function checkConnection() {
		if (
			API_KEY &&
			users_responses &&
			JSON.parse(users_responses).length === detailedQuestions.length
		) {
			const openai: OpenAI = new OpenAI({
				apiKey: JSON.parse(API_KEY), // converts the string literal to a string without the double quotes
				dangerouslyAllowBrowser: true
			});
			callAPI(openai, JSON.parse(users_responses));
		} else {
			console.log("Please make sure you've entered your API key");
		}
	}

	return { checkConnection };
}
