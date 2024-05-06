// import { ChatCompletionStream } from "openai/lib/ChatCompletionStream";
// import { openaiToken } from "src/controller/OpenaiToken"

// export async function openGBTStream({startingPrompt} : {startingPrompt: string}): Promise<ChatCompletionStream> {
//     const stream = openaiToken.beta.chat.completions.stream({
//     model: 'gpt-4',
//     messages: [
//         { role: 'system', content: startingPrompt},
//     ],
//     stream: true,
//     });
//     return stream;
// }

// export async function sendDataGBTStream(stream: ChatCompletionStream) {
//     stream.on('content', (delta, snapshot) => {
//         process.stdout.write(delta);
//       });
//     return stream;
// }

// export async function closeGBTStream(stream: ChatCompletionStream) {
//     stream.finalChatCompletion();
//     return stream;
// }
export {}