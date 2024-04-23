import OpenAI from "openai";

const getApiKey = (): string => {
    const localKey = localStorage.getItem("GBTKEY")
    if(localKey != null) return localKey;
    return"";
}

export const openaiToken = new OpenAI({
    apiKey: getApiKey(),
    dangerouslyAllowBrowser: true // allows for running in the browser
});