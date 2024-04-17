import axios from "axios";
import { useState, useEffect } from "react";

interface Tools {}

export default function useChatGPT(): Tools {
	const API_KEY: string | null = localStorage.getItem("MYKEY");
	const [response, setResponse] = useState<string>();

	const handleOpenAIRequest = async (API_KEY: string) => {
		const requestBody = {
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: "Say this is a test!" }],
			temperature: 0.7
		};

		try {
			const response = await axios.post(
				"https://api.openai.com/v1/chat/completions",
				requestBody,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${API_KEY}`
					}
				}
			);
			setResponse(response.data.choices[0].text);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	if (API_KEY) {
		handleOpenAIRequest(API_KEY);
	} else {
		console.log("Please make sure you've entered your API key");
	}

	console.log(response);

	return {};
}
