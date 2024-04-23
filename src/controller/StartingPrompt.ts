import { PromptQuestionsSetup } from "src/interfaces/PromptQuestionsSetup"

export const CreateStartingPrompt = (questionAns : PromptQuestionsSetup): string => {
    return(
        `You are a career advisor tasked with helping a user identify possible career paths which would be a good fit.\n\n` + 
        'To start off, you are given the following information:\n' +
        `- The user's current level of education is ${questionAns.education}\n` +
        questionAns.status !== "None of these apply" ? `The user is ${questionAns.status.replace("I", "They").replace("am", "are").replace("my", "their")}\n` : "" +
        `- The user's interests include: ${questionAns.interests}` +
        `- The user's current expereince includes: ${questionAns.expereince}` +
        `- This is what the user would like you to assist with: ${questionAns.specificNeeds}` +

        `Your job is to ask the user additional questions in order to obtain the necessary information to meet their specific needs.\n` +
        `Each question should be given in the following format, regardless of type` +
        

        `You will utilize the following question types which have been created for you:\n` +
        `- Multiple Choice: ` +
        `- Multiple Choice (multiple response)` +
        `- Text Answer (custom response)` +
        `- Slider (single response)` +
        `- Multiple Choice (single response)` +

    )
}