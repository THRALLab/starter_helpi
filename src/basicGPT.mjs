import { OpenAI } from "@openai/api";

const API_KEY = localStorage.getItem(saveKeyData)
const openai = new OpenAI({ apiKey: API_KEY });
const answers = JSON.parse(localStorage.getItem(BasicQuestionAnswers));

export async function basicGPT() {
  try {
    const completion = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Generate a list of three careers, with descriptions, based on the following questions and answers. Each response corresponds to respective question based on place in the list" },
        { role: "user", content: answers}
      ],
      model: "gpt-4-turbo",
      response_format: { "type": "json_object"}
    });

    console.log(completion.choices[0]);
  } catch(error) {
    console.error("Error", error);
  }
}
export default basicGPT();
