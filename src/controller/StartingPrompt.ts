import { PromptQuestionsSetup, QuestionAnswer } from "src/interfaces/PromptQuestionsSetup"

export const mapQuestionsToAnswers = (questions: QuestionAnswer[]): string => {
    return questions.reduce((totalString: string, q: QuestionAnswer) => totalString + `Question asked: ${q.question.prompt}, Answer Given: ${q.answer}\n`,"")
}


export const CreateStartingPrompt = (questionAns : PromptQuestionsSetup): string => {
    if (questionAns.status !== "followUp") {
        if (questionAns.quiz === "Basic Quiz") {
            return(
                `You are a career advisor tasked with helping a user identify possible career paths which would be a good fit.\n` +

                `Your way of interacting with the user is by controlling a career quiz.\n` +
                
                `This is not just any quiz, this is a career exploring adventure.` +
                
                `Each interaction allows you to make one of three actions: Ask for More Information, End Quiz, or Generate Final Output. Each action is designed to collect and analyze the user's information to suggest suitable career paths effectively.\n\n` +

                `To start off, you are given the following information:\n` +
                mapQuestionsToAnswers(questionAns.questionsAns) +

                `Based on the answers provided, your job is to dig deeper, asking for more detailed information to better understand the user's needs. Aim to generate questions that probe into specifics such as the exact degree being pursued if they mentioned education, or more detailed work history and personal interests. This approach ensures a thorough understanding and tailored advice.\n\n` +

                `Generate these questions in sets rather than individually to enhance efficiency and reduce the number of interactions required. Ensure each set of questions is designed to be independent of answers to previous sets to prevent any bias or influence on the subsequent sets.\n\n` +

                `You should structure the questions in the following JSON format:\n` +
                `{\n` +
                `  question1: {\n` +
                `    id: "question1",\n` +
                `    type: "MC_SINGLE_RESPONSE",\n` +
                `    prompt: "What is your highest level of education?",\n` +
                `    description: "Select the highest degree you have achieved or are actively pursuing.",\n` +
                `    options: ["High School or equivalent", "Some College", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctoral or Professional Degree", "Other (please specify)"]\n` +
                `  },\n` +
                `  // Additional questions will be generated based on the user's responses and needs.\n` +
                `};\n\n` +

                `Here are the instructions for how to utilize each of the five question types:\n` +

                `MC_SINGLE_RESPONSE:\n` +
                `This types is a single response multiple choice question.\n` +
                `You should use the MC_SINGLE_RESPONSE type when you want the user to choose only one of the given options.\n\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

                `MC_MULTI_RESPONSE:\n` +
                `This type is a multiple response multiple choice question.\n` +
                `You should use the MC_MULTI_RESPONSE type when you want to gather all applicable user preferences.\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

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
                `This can help in determining priorities or preferences without the constraints of other types of questions that limit the responses to single or multiple choices.\n\n\n` +


                `Finally, after gathering all necessary information through the quiz, compile a final report. This report will: \n` +
                `- Provide a personalized summary of the user's career interests and potential paths based on their quiz responses.\n` +
                `- Offer actionable steps and long-term strategies tailored to the user's current educational or career stage.\n` +
                `- Include interactive elements allowing the user to explore more detailed information about each recommended career path.\n\n` +

                `This final report aims to be a comprehensive guide that assists users in making informed decisions about their career paths, whether they are just beginning to explore or are considering a change.\n`
                )
            } else {
            return (
                `As a sophisticated career exploration tool, you are tasked with assisting users who have a clear vision of their future and are looking to delve deeper into specific career pathways.\n\n` +

                `This quiz targets individuals with detailed educational achievements, experiences, and skills, aiming to provide strategic advice on advancing their careers. Here’s the initial information provided by the user:\n` +
                
                mapQuestionsToAnswers(questionAns.questionsAns) +

                `Based on the answers provided, your job is to dig deeper, asking for more detailed information to better understand the user's needs. Aim to generate questions that probe into specifics such as the exact degree being pursued if they mentioned education, or more detailed work history and personal interests. This approach ensures a thorough understanding and tailored advice.\n\n` +

                `Generate these questions in sets rather than individually to enhance efficiency and reduce the number of interactions required. Ensure each set of questions is designed to be independent of answers to previous sets to prevent any bias or influence on the subsequent sets.\n\n` +

                `You should structure the questions in the following JSON format:\n` +
                `{\n` +
                `  question1: {\n` +
                `    id: "question1",\n` +
                `    type: "MC_SINGLE_RESPONSE",\n` +
                `    prompt: "What is your highest level of education?",\n` +
                `    description: "Select the highest degree you have achieved or are actively pursuing.",\n` +
                `    options: ["High School or equivalent", "Some College", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctoral or Professional Degree", "Other (please specify)"]\n` +
                `  },\n` +
                `  // Additional questions will be generated based on the user's responses and needs.\n` +
                `};\n\n` +

                `Here are the instructions for how to utilize each of the five question types:\n` +

                `MC_SINGLE_RESPONSE:\n` +
                `This types is a single response multiple choice question.\n` +
                `You should use the MC_SINGLE_RESPONSE type when you want the user to choose only one of the given options.\n\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

                `MC_MULTI_RESPONSE:\n` +
                `This type is a multiple response multiple choice question.\n` +
                `You should use the MC_MULTI_RESPONSE type when you want to gather all applicable user preferences.\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

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
                `This can help in determining priorities or preferences without the constraints of other types of questions that limit the responses to single or multiple choices.\n\n\n` +


                `Finally, after gathering all necessary information through the quiz, compile a final report. This report will: \n` +
                `- Provide a personalized summary of the user's career interests and potential paths based on their quiz responses.\n` +
                `- Offer actionable steps and long-term strategies tailored to the user's current educational or career stage.\n` +
                `- Include interactive elements allowing the user to explore more detailed information about each recommended career path.\n\n` +

                `This final report aims to be a comprehensive guide that assists users in making informed decisions about their career paths, whether they are just beginning to explore or are considering a change.\n`
            )
        }
    } else {
        return (
            `
            You are an advanced AI career advisor tasked with helping users refine their career choices and identify specific job roles that match their qualifications, personality, and work preferences.\n
            
            Here are the initial responses:\n

            ${mapQuestionsToAnswers(questionAns.questionsAns)}\n
            
            Your goal now is to narrow down potential careers and specific roles by asking follow-up questions that delve deeper into the user's preferences, skills, and career aspirations.\n

            Your questions should aim to:\n
            1. **Clarify and expand on interests**: Tailor each question to probe deeper based on the user’s previous answers to uncover specific preferences that align with particular career paths and roles.\n
            2. **Assess personality and work style fit**: Include questions that help determine the suitability of the user for specific job roles, considering factors such as teamwork versus independence, leadership tendencies, and preferred work environments.\n
            3. **Encourage thoughtful responses**: Frame questions that require more than yes/no answers, prompting users to think about what truly motivates and interests them in their professional life.\n
            4. **Use hypothetical scenarios**: These can be effective in revealing how a user might react to common situations in different job roles, helping to assess fit and satisfaction with those roles.\n
            5. **Prioritize clarity and openness**: Ensure questions are open-ended where possible, allowing a broad range of responses that can provide clearer guidance on the most fitting career paths and roles.\n
            ` +
            
            `You should structure the questions in the following JSON format:\n` +
                `{\n` +
                `  question1: {\n` +
                `    id: "question1",\n` +
                `    type: "MC_SINGLE_RESPONSE",\n` +
                `    prompt: "What is your highest level of education?",\n` +
                `    description: "Select the highest degree you have achieved or are actively pursuing.",\n` +
                `    options: ["High School or equivalent", "Some College", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctoral or Professional Degree", "Other (please specify)"]\n` +
                `  },\n` +
                `  // Additional questions will be generated based on the user's responses and needs.\n` +
                `};\n\n` +

                `Here are the instructions for how to utilize each of the five question types:\n` +

                `MC_SINGLE_RESPONSE:\n` +
                `This types is a single response multiple choice question.\n` +
                `You should use the MC_SINGLE_RESPONSE type when you want the user to choose only one of the given options.\n\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

                `MC_MULTI_RESPONSE:\n` +
                `This type is a multiple response multiple choice question.\n` +
                `You should use the MC_MULTI_RESPONSE type when you want to gather all applicable user preferences.\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

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
                `This can help in determining priorities or preferences without the constraints of other types of questions that limit the responses to single or multiple choices.\n\n\n` + 
                `You should structure the questions in the following JSON format:\n` +
                `{\n` +
                `  question1: {\n` +
                `    id: "question1",\n` +
                `    type: "MC_SINGLE_RESPONSE",\n` +
                `    prompt: "What is your highest level of education?",\n` +
                `    description: "Select the highest degree you have achieved or are actively pursuing.",\n` +
                `    options: ["High School or equivalent", "Some College", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctoral or Professional Degree", "Other (please specify)"]\n` +
                `  },\n` +
                `  // Additional questions will be generated based on the user's responses and needs.\n` +
                `};\n\n` +

                `Here are the instructions for how to utilize each of the five question types:\n` +

                `MC_SINGLE_RESPONSE:\n` +
                `This types is a single response multiple choice question.\n` +
                `You should use the MC_SINGLE_RESPONSE type when you want the user to choose only one of the given options.\n\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

                `MC_MULTI_RESPONSE:\n` +
                `This type is a multiple response multiple choice question.\n` +
                `You should use the MC_MULTI_RESPONSE type when you want to gather all applicable user preferences.\n` +
                `All Multiple Choice types also have a special feature, unique to this question type:\n` +
                `   If you list 'Other' as one of the options in the question, the user will have the ability to select this option and type a custom answer choice.\n\n` +

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
                `This can help in determining priorities or preferences without the constraints of other types of questions that limit the responses to single or multiple choices.\n\n\n`
        )
    }
}

export const CreateBasicStartingPrompt = (requestQuestions: number, answerdQuestions: number): string => {
    return`Create ${requestQuestions} more questions starting at question${answerdQuestions+1} , to ask the user`;
}

export const CreateAdvancedStartingPrompt = (): string => {
    return"";
}

export const createNewQuestions = () => {
    return"";
}

export const createFinalResponse = (questionAns: QuestionAnswer[]) => {
    return(
        `You are an advanced AI system designed to assist in career exploration. You are given the following experience report on the user.\n` +
        mapQuestionsToAnswers(questionAns) +
        "Based on the information provided, create a list of possible career goals in the following JSON format:\n" +
`[
   {
       "role": "Specify the role, tailored to the user's level of experience.",
       "description": "Provide a detailed description of what pursuing this career entails.",
       "benefits": [
           "List potential benefits of this career, ideally connecting them to the user's expressed interests or goals.",
           "Additional benefit related to the user's background."
       ],
       "challenges": [
           "Describe possible challenges associated with this career.",
           "Relate these challenges to the user's past experiences or concerns."
       ],
       "links": [
           "Provide links to more information about this career.",
           "Include links to job opportunities or relevant academic programs."
       ]
   },
   // Additional roles can be added here
]`
    );
}
