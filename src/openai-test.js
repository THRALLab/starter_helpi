import OpenAIAPi from "openai";

let APIKey = "X";

const openai = new OpenAIAPi({apiKey: APIKey, dangerouslyAllowBrowser: true});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();