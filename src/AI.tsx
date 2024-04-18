import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { OpenAI } from 'openai';


export function ChatGPT({userKey}: {userKey: string}): JSX.Element {
 const [response, setResponse] = useState<string | null>('');
 const myOpenAi = new OpenAI({apiKey: userKey, dangerouslyAllowBrowser: true});
   const getOpenAIResponse = async () => {
    const res = await myOpenAi.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [ {role: "user", content: 'Hello' } ]
    });
    setResponse(res.choices[0]?.message?.content);
}
 return (
  <div>
    <Button onClick={getOpenAIResponse}>Click</Button>
    {response}
  </div>
 );
}