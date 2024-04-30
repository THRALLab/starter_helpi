//import { Assistant, Assistants } from 'openai/resources/beta/assistants/assistants';
import OpenAI from 'openai';
import { openaiToken } from './openaiToken';
//import { Thread } from 'openai/resources/beta/threads/threads';

// export async function createAssistant(initialPrompt: string) {
//   try {
//     const assistant = await openaiToken.beta.assistants.create({
//       name: "Career Guide",
//       description: initialPrompt,
//       model: "gpt-4-turbo",
//       tools: [{"type": "code_interpreter"}],
//     });
//     return assistant;
//   } catch (error) {
//     console.error("Error adding message to thread:", error);
//   }
// }

// export async function createInitialThread(initialPrompt: string) {
//     try {
//         const thread = await openaiToken.beta.threads.create({
//             messages: [
//                 {
//                     role: 'user',
//                     content: initialPrompt
//                 },
//             ]
//         });
//         console.log("Thread created with ID:", thread.id);
//         return thread;
//     } catch (error) {
//         console.error("Error creating thread:", error);
//     }
// }


// export async function addMessageToThread(thread: Thread, assistant: Assistant, instructions: string) {
//   try {
//       const message = await openaiToken.beta.threads.runs.create(
//           thread.id,
//           {
//             assistant_id: assistant.id,
//             model: "gpt-4-turbo",
//             instructions: instructions
//           }
//       );

//       const run = await openaiToken.beta.threads.runs.create(
//         thread.id, 
//         {
//         assistant_id: 'your-assistant-id', // Make sure to replace this with your actual assistant ID
//         response_format: { type: 'json_object' } // This is where you specify the response format
//       });

//       console.log("Message added to Thread ID:", thread.id);
//       return message;
//   } catch (error) {
//       console.error("Error adding message to thread:", error);
//   }
// }





export async function callGBT(
    {
        userPrompt, 
        startingPrompt
    } 
    : 
    {
        userPrompt: string, 
        startingPrompt: string
    }
) {
  console.log("user prompt:", userPrompt);
  console.log("starting prompt", startingPrompt);
    const chatCompletion = await openaiToken.chat.completions.create({
      messages: [
        { role: 'system', content: startingPrompt },
        { role: 'user', content: userPrompt}
        ],
      model: 'gpt-4-turbo',
      response_format: { type: 'json_object' }
    });
    return chatCompletion;
}

export async function addResponseGBT(
  {
      choices,
      newMessage
  } 
  : 
  {
      choices: OpenAI.ChatCompletion.Choice[] | undefined,
      newMessage: string
  }
) {
  // maps previous choices to an array of message objects
  console.log(choices, newMessage);
  var messages = choices?.map((choice: OpenAI.ChatCompletion.Choice) => choice.message);
  console.log("Chat Messages to api: ", messages);
  if(messages === undefined) messages = [];
  const chatCompletion = await openaiToken.chat.completions.create({
    messages: [
      ...messages,
      {role: 'user', content: newMessage}
    ],
    model: 'gpt-4-turbo',
    response_format: { type: 'json_object' }
  });
  return chatCompletion;
}

