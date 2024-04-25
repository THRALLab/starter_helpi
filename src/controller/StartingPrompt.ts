import { PromptQuestionsSetup, QuestionAnswer } from "src/interfaces/PromptQuestionsSetup"

export const mapQuestionsToAnswers = (questions: QuestionAnswer[]): string => {
    return questions.reduce((totalString: string, q: QuestionAnswer) => totalString + `Question asked: ${q.question.prompt}, Answer Given: ${q.answer}\n`,"")
}


export const CreateStartingPrompt = (questionAns : PromptQuestionsSetup): string => {
    
    const userStatus = questionAns.status !== "None of these apply"
        ? `The user is ${questionAns.status.replace("I", "They").replace("am", "are").replace("my", "their")}\n`
        : "";


    return(
        `You are a career advisor tasked with helping a user identify possible career paths which would be a good fit.\n\n` +
        
        `Your way of interacting with the user is by controlling a career quiz which has been created for you to control\n` +
        `Each call you will be able to make one of three actions: ` +
        
        `To start off, you are given the following information:\n` +
        mapQuestionsToAnswers(questionAns.questionsAns) +

        `Your job is to ask the user additional questions in order to obtain the necessary information to meet their specific needs.\n` +
        `You will have five question types to choose from, although they all take the same exact inputs regardless of type. \n` +
        `The inputs for each question you ask should be given in the following JSON format:\n` +
        `question#: {\n` +
        `    id: string\n` +
        `    type: string\n` +
        `    prompt: string\n` +
        `    description: string\n` +
        `    options: string[]\n` +
        `}\n\n` +

        `- id: Unique identifier for the question, must be in the following format: question# ('#' represents question number)\n` +
        `- type: Must be one of the following five types: MC_SINGLE_RESPONSE, MC_MULTI_RESPONSE, TEXT_RESPONSE, SLIDER_RESPONSE, USER_RANKING\n` +
        `- prompt: The actual question text to be presented to the user\n` +
        `- description: Additional details about the question to guide the user's response\n` +
        `- options: List of options for the user to choose from, empty for non-choice types\n\n` +

        `Here are the instructions for how to utilize each of the five question types:\n` +
        
        `MC_SINGLE_RESPONSE:\n` +
        `This types is a single response multiple choice question.\n` +
        `You should use the MC_SINGLE_RESPONSE type when you want the user to choose only one of the given options.\n\n` +
        
        `MC_MULTI_RESPONSE:\n` +
        `This type is a multiple response multiple choice question.\n` +
        `You should use the MC_MULTI_RESPONSE type when you want to gather all applicable user preferences.\n` +
        `The MC_MULTI_RESPONSE type also has a special feature, unique to this question type:\n` +
        `   If you list 'Other (click to specify)' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +
        
        `TEXT_RESPONSE:\n` +
        `This type is a text response question, similar to short/long answer question types.\n` +
        `You should use the TEXT_RESPONSE type when you want the user to type a custom answer to the given prompt.\n` +
        `The options field a TEXT_RESPONSE question should be an empty list since the type does not require options.\n\n` +
        
        `SLIDER_RESPONSE:\n` +
        `This type is a slider question where the user will be instructed to choose a value between 1 and 100.\n` +
        `You should use the SLIDER_RESPONSE type when you want to gauge how strongly the user feels about something.\n` +
        `The options field a SLIDER_RESPONSE question should be an empty list since the type does not require options.\n\n` +
        
        `USER_RANKING:\n` +
        `This type is a custom ranking question where the user will be asked to rank the question options in order of preference.\n` +
        `Specify in the question prompt the order in which you would like the user to consider the options, such as from most to least preferred.\n` +
        `Use the USER_RANKING type when you want to understand the user's comparative preferences among a list of options.\n` +
        `This can help in determining priorities or preferences without the constraints of other types of questions that limit the responses to single or multiple choices.\n\n` +
        
        `Finally, after gathering all necessary information through the quiz, the you will compile a final report. This report will: \n` +
        `- Provide a personalized summary of the user's career interests and potential paths based on their quiz responses.\n` +
        `- Offer actionable steps and long-term strategies tailored to the user's current educational or career stage.\n` +
        `- Include interactive elements allowing the user to explore more detailed information about each recommended career path.\n\n` +
        
        `This final report aims to be a comprehensive guide that assists users in making informed decisions about their career paths, whether they are just beginning to explore or are considering a change.\n`
    )
}

export const CreateBasicStartingPrompt = (requestQuestions: number, answerdQuestions: number): string => {
    return`Create ${requestQuestions+1} more questions starting at question${answerdQuestions} , to ask the user`;
}

export const CreateAdvancedStartingPrompt = (): string => {
    return"";
}

export const createNewQuestions = () => {
    return"";
}

export const createFinalResponse = (questionAns: QuestionAnswer[]) => {
    return("The user has entered the following question answers in reponse to their carrer quiz\n"
        + mapQuestionsToAnswers(questionAns) +
        `please provide your career advice as a json object described in the format below\n` +
        `{\n` +
        `    advice: string` +
        `    reasoning: string` +
        `    result: string` +
        `}\n\n` +
        "you must include adivice, reasoning, and result as part of your json response" +
        "advice should be your opinion on the next steps the user should take, reasoning should be why you feel this way, result is your final answer as to what career advisment you would give the quiz taker"
    );
}