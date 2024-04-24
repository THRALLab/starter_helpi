import OpenAI from "openai";
import { ChatCompletion } from "openai/resources";
//import { ChatCompletionStream } from "openai/lib/ChatCompletionStream";
import { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { addResponseGBT, callGBT } from "src/controller/CallChat";
//import { CreateStartingPrompt } from "src/controller/StartingPrompt";
// import { openGBTStream } from "src/controller/OpenChatStream";

const MapGBTOutput = ({chats} : {chats : OpenAI.ChatCompletion.Choice[]}) => {
    return (
        <>
            <ul>
                {chats.map((target: OpenAI.ChatCompletion.Choice) => (<li>{target.message.content}</li>))}
            </ul>
        </>
    )
}

const DisplayKey = () => {
    const key = localStorage.getItem("GBTKEY");
    return(<p>{key}</p>)
}

export const ChatGBTPage = () => {
    const startingPrompt:string = "CreateStartingPrompt()";

    const [userInput, setUserInput] = useState<string>("");
    const [chat, setChat] = useState<ChatCompletion>();
    const [chats, setChats] = useState<OpenAI.ChatCompletion.Choice[]>([]);
    //const [stream, setStream] = useState<ChatCompletionStream>();

    async function sendToGBT (userInput: string): Promise<void>{
        
        const response = (chat?.choices == null) ? await callGBT({
            userPrompt: userInput,
            startingPrompt: startingPrompt
        }) 
        :
        await addResponseGBT({
            choices: chat.choices,
            newMessage: userInput
        });
        if(chat === null) setChat(response);
        else chat?.choices.push(...response.choices);
        console.log(response);
        setChats(response.choices)
    }

    // async function openChatStream(startingPrompt: string, message: string) {
    //     const stream = await openGBTStream({startingPrompt: startingPrompt})
    //     setStream(stream);
    // }


    const ClearGBT = () => {
        setChat(undefined);
        setChats([]);
        
    }
    const [isKeyDisplay, setIsKeyDisplay] = useState<boolean>(false);
    return(
    <>
        <MapGBTOutput chats={chats}/>
        <Form.Group>
            <Form.Label>{"Send a message to gbt"}</Form.Label>
            <Form.Control
                value={userInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
            />
            <Button onClick={() => sendToGBT(userInput)}>Send</Button>
            <Button onClick={() => setIsKeyDisplay(!isKeyDisplay)}>Toggle Show Key</Button>
        </Form.Group>
        {(isKeyDisplay) ? (<DisplayKey/>) : (<></>)}
        <Form.Group>
            <Form.Label>{"Send a message to gbt"}</Form.Label>
            <Form.Control
                value={userInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
            />
            <Button onClick={() => sendToGBT(userInput)}>Send</Button>
        </Form.Group>
        <Button onClick={() => ClearGBT()}>Clear output</Button>
    </>
    );
}
