import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { OpenAI } from 'openai';
import Loader from './Loader';
import './Loader.css'



export function ChatGPT({userKey, content}: {userKey: string; content: string}): JSX.Element {
 const [response, setResponse] = useState<string | null>('');
 const [loading, setLoading] = useState<boolean>(false);
 const [buttonclicked, setButtonclicked] = useState<boolean>(false);
 const myOpenAi = new OpenAI({apiKey: userKey, dangerouslyAllowBrowser: true});
   const getOpenAIResponse = async () => {
    setLoading(true);
    setButtonclicked(true);
    const res = await myOpenAi.chat.completions.create({
    model: 'gpt-4',
    messages: [ {role: "assistant", content: content } ]
    });
    setResponse(res.choices[0]?.message?.content);
    setLoading(false);
}
  let newText = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  if (response !== null) {
  // newText= response.split(/[0-16]\./);
  newText= response.split(":", 16);
  }
 return (
  <div>
    <Button className="submitAns" onClick={getOpenAIResponse} hidden={buttonclicked}>Click to Reveal!</Button>
    <div hidden={!buttonclicked || loading}>
    <div className='response-text'>
    <h2>Top 5 Careers</h2>
    <p>1. {newText[0]}</p>
    <p>2. {newText[1]}</p>
    <p>3. {newText[2]}</p>
    <p>4. {newText[3]}</p>
    <p>5. {newText[4]}</p>
    <h2>Your Top Industry Matches:</h2>
    <p>1. {newText[5]}</p>
    <p>2. {newText[6]}</p>
    <p>3. {newText[7]}</p>
    <p>4. {newText[8]}</p>
    <p>5. {newText[9]}</p>
    <h2>Your Top Job Suggestions:</h2>
    <p>1. {newText[10]}</p>
    <p>2. {newText[11]}</p>
    <p>3. {newText[12]}</p>
    <p>4. {newText[13]}</p>
    <p>5. {newText[14]}</p>
    <h2>Report Summary:</h2>
    <p>{newText[15]}</p>
    </div>
    {/* {!loading && response} */}
    </div>
    {loading && <Loader></Loader>}
    {loading && <p>Thank you, your response has been recorded.</p>}
  </div>
 );
}