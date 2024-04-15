import OpenAI from "openai";

const getApiKey = (): string => {
    // const envKey = process.env.REACT_APP_CHATGBT_API_KEY;
    const localKey = localStorage.getItem("GBTKEY")
    // if(envKey != null) return envKey;
    if(localKey != null) return localKey;
    return"";
}

export const openai = new OpenAI({
    apiKey: getApiKey(),
    dangerouslyAllowBrowser: true // allows for running in the browser
});