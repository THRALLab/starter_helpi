import OpenAI from "openai";

interface Tools {
	checkConnection: () => void;
}

export default function useChatGPT(): Tools {
	const API_KEY: string | null = localStorage.getItem("MYKEY");

	async function callAPI(openai: OpenAI) {
		let response = "";
		try {
			const stream = await openai.chat.completions.create({
				model: "gpt-3.5-turbo",
				messages: [
					{
						role: "user",
						content: "Hello!"
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

	function checkConnection() {
		if (API_KEY) {
			const openai: OpenAI = new OpenAI({
				apiKey: JSON.parse(API_KEY), // converts the string literal to a string without the double quotes
				dangerouslyAllowBrowser: true
			});
			const users_responses = localStorage.getItem("answered_questions");
			console.log(users_responses);
			callAPI(openai);
		} else {
			console.log("Please make sure you've entered your API key");
		}
	}

	return { checkConnection };
}
