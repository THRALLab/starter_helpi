import OpenAI from "openai";

// Create an instance of the OpenAI client
export const openaiToken = new OpenAI({
    apiKey: localStorage.getItem("GBTKEY") || "",
    dangerouslyAllowBrowser: true // Be cautious with this setting in production
});










// import OpenAI from "openai";

// export const getApiKey = (): string => {
//     const localKey = localStorage.getItem("GBTKEY")
//     if(localKey != null) return localKey;
//     return"";
// }

// export const openaiToken = new OpenAI({
//     apiKey: getApiKey(),
//     dangerouslyAllowBrowser: true // allows for running in the browser
// });