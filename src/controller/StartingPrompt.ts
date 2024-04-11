import { PromptQuestionsSetup } from "src/interfaces/PromptQuestionsSetup"

export const CreateStartingPrompt = (questionAns : PromptQuestionsSetup): string => {
    return(
        `You are a assistant helping a ${questionAns.userEducation}`
    )
}