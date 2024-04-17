import React, { useState } from 'react';
import axios from 'axios';
import { keyData } from './APIFooter';
import OpenAI, {ClientOptions} from "openai";

const APIURL = "https://api.openai.com/v1/chat/completions";
//const APIURL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
let APIKey = keyData;

const clientOptions: ClientOptions = {
  apiKey: APIKey
};

const openai = new OpenAI(clientOptions);

async function OpenAIRequest() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
    
  });

  console.log(completion.choices[0]);
}

export default OpenAIRequest;

/*
export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${APIURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(APIURL, {
        title: "Hello World!",
        body: "This is a new post.",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${APIKey}`,
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <div>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
*/
/*
const OpenAIRequest = () => {
  const [response, setResponse] = useState('');

  const generateResponse = async () => {
    let APIKey = keyData;
    try {
      const response = await axios.post( APIURL, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${APIKey}`,
        },
        prompt: 'How do I create a React component?',
        max_tokens: 100,
      });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
      setResponse("Error!");
    }
  };

  return (
    <div>
      <button onClick={generateResponse}>Generate Response</button>
      <p>{response}</p>
    </div>
  );
};
export default OpenAIRequest;
*/
/*
<div className='ChatGPT-main'>
          <h1>OpenAI Integration in React</h1>
          <OpenAIRequest />
        </div>
*/