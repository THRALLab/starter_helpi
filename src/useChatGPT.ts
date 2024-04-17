import axios from "axios";

export default async function useChatGPT() {
	const API_KEY: string | null = localStorage.getItem("MYKEY");

	async function test(API_KEY: string): Promise<string> {
		let x: string = "default";
		const systemMessage = {
			role: "system",
			content:
				"Speak like a caring coach guiding the user in a direction that lets them find a career that aligns with their passion"
		};
		axios
			.post("https://api.openai.com/v1/chat/completions", {
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					"Content-Type": "application/json"
				},
				body: {
					model: "gpt-3.5-turbo",
					messages: [systemMessage, "Hello"]
				}
			})
			.then(data => {
				console.log(data);
				x = "SUCCESS";
			})
			.catch(error => {
				console.log(error);
				x = "PROBLEM";
			});
		return x;
	}

	if (API_KEY) {
		const res: string = await test(API_KEY);
		console.log("x", res);
	}
}
