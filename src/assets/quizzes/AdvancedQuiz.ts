import { Question } from "../../interfaces/QuestionTypes";

export const advancedQuiz: Record<string, Question> = 
{
  "question1": {
    "id": "question1",
    "type": "MC_SINGLE_RESPONSE",
    "prompt": "What is your highest level of education?",
    "description": "Select the highest degree you have achieved or are actively pursuing.",
    "options": [
      "High School or equivalent",
      "Some College",
      "Associate's Degree",
      "Bachelor's Degree",
      "Master's Degree",
      "Doctoral or Professional Degree",
      "Other (please specify)"
    ]
  },
  "question2": {
    "id": "question2",
    "type": "TEXT_RESPONSE",
    "prompt": "Please describe your most recent job or professional experience, including your role and main responsibilities.",
    "description": "This will help us understand your current professional capabilities and experience.",
    "options": []
  },
  "question3": {
    "id": "question3",
    "type": "MC_MULTI_RESPONSE",
    "prompt": "Which industries have you worked in or are particularly interested in?",
    "description": "Select all that apply to give a clearer view of your industry preferences.",
    "options": [
      "Technology",
      "Education",
      "Healthcare",
      "Finance",
      "Engineering",
      "Art and Design",
      "Marketing",
      "Other (please specify)"
    ]
  },
  "question4": {
    "id": "question4",
    "type": "TEXT_RESPONSE",
    "prompt": "Within your field of interest, are there specific areas or topics that particularly excite you? Please describe.",
    "description": "This question aims to uncover more detailed aspects of your interests within your broader industry field.",
    "options": []
  }
}

// {
//   question1: {
//     id: "question1",
//     type: "TEXT_RESPONSE",
//     prompt: "Briefly summarize your current professional or academic experience.",
//     description: "Keep in mind that giving more information improves the AI responsiveness.",
//     options: [],
//   },
//   question2: {
//     id: "question2",
//     type: "TEXT_RESPONSE",
//     prompt: "How do you feel about your current path?",
//     description: "If you aren't sure, describe what you like learning about.",
//     options: []
//   },
//   question3: {
//     id: "question3",
//     type: "MC_SINGLE_RESPONSE",
//     prompt: "Which of these describe you best?",
//     description: "If you have an unique situation, describe it in the other option.",
//     options: [
//       "Unsure about what Career I want",
//       "Know the general field I would like to pursue",
//       "Know the specific field I would like to specialize in",
//       "Already have a lot of exprience and am looking to take the next step to further my career",
//       "Have a lot of expeience in my current career, but am looking to make a career change",
//       "Other"
//     ]
//   }
// };
