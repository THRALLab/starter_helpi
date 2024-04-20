//export {}

/*
import OpenAIAPi from "openai";

let APIKey = "API_KEY_HERE";

const openai = new OpenAIAPi({ apiKey: APIKey, dangerouslyAllowBrowser: true });
export let completion: OpenAIAPi.Chat.Completions.ChatCompletion;

export async function ChatGPT() {
  completion = await openai.chat.completions.create({
    messages: [
      { "role": "system", "content": "You are a helpful assistant designed to output JSON." },
      { "role": "user", "content": "Who won the world series in 2020?" }
    ],
    model: "gpt-3.5-turbo",
    response_format: { "type": "json_object" },
  });

  console.log(completion.choices[0]);
  console.log(completion.choices[0].message.content);
}
*/

/*
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Update with the correct API endpoint
      const apiKey = 'APIKEYHERE'; // Replace with your actual API key
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'DangerouslyAllowBrowser': true
      };

      const requestBody = {
        messages: [{ role: 'user', content: input }],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setResponse(data.choices[0].message.content);
    } catch (error) {
      setResponse("Error!");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
*/


/*
import React, { useState } from 'react';
import { keyData } from './APIFooter';
import Configuration from 'openai';
import OpenAIApi from 'openai';
import OpenAI, {ClientOptions} from "openai";
*/

/*
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
*/

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