import { Question } from "../../interfaces/QuestionTypes";

export const basicQuiz: Record<string, Question> = {
  question1: {
    id: "question1",
    type: "TEXT_RESPONSE",
    prompt: "When activities do you enjoy doing the most?",
    description: "Can be anything from academic interests, hobbies, or anything that excites you.",
    options: []
  },
  question2: {
    id: "question2",
    type: "MC_MULTI_RESPONSE",
    prompt: "Which topics do you enjoy learning the most about?",
    description: "If none sound appealing, select other and say what interests you.",
    options: ["Science and Technology",
    "Arts and Humanities",
    "Business and Economics",
    "Health and Medicine",
    "Engineering and Mechanics",
    "Social Sciences",
    "Environmental and Earth Sciences",
    "Other (please specify)"]
  },
  question3: {
    id: "question3",
    type: "TEXT_RESPONSE",
    prompt: "Do you have any career interests or past job experience you would like to mention?",
    description: "The most you talk about, the better the questions that the AI will generate",
    options: []
  }
};





// export const basicQuiz: Record<string, Question> = {
//   question1: {
//     id: "question1",
//     type: "TEXT_RESPONSE",
//     prompt: "What specific goals do you hope to achieve with this career guidance session?",
//     description: "Please share what you are looking to get out of this quiz, such as discovering potential career paths, identifying educational needs, or getting specific job-seeking advice.",
//     options: []
//   },
//   question2: {
//     id: "question2",
//     type: "MC_SINGLE_RESPONSE",
//     prompt: "What is your highest completed level of education?",
//     description: "Select the highest level of education you have completed or are currently pursuing.",
//     options: ["No formal education", "High school diploma or equivalent", "Some college, no degree", "Associate degree", "Bachelor’s degree", "Master’s degree", "Doctoral or professional degree"]
//   },
//   question3: {
//     id: "question3",
//     type: "MC_MULTI_RESPONSE",
//     prompt: "Which of these areas have you worked in or have experience with?",
//     description: "Select all applicable areas.",
//     options: ["Business", "Technology", "Education", "Healthcare", "Art and Design", "Science and Engineering", "Hospitality and Tourism", "Other (Please specify)"]
//   },
//   question4: {
//     id: "question4",
//     type: "SLIDER_RESPONSE",
//     prompt: "How would you rate your current professional skills relevant to your desired career path?",
//     description: "Slide to select, where 1 is 'No experience or skill' and 10 is 'Highly skilled and experienced.'",
//     options: []
//   },
//   question5: {
//     id: "question5",
//     type: "TEXT_RESPONSE",
//     prompt: "What specific career areas or industries are you most interested in exploring?",
//     description: "Mention any specific industries or job roles you are curious about or have previously considered.",
//     options: []
//   },
//   question6: {
//     id: "question6",
//     type: "MC_MULTI_RESPONSE",
//     prompt: "What are your key values or preferences when considering a career?",
//     description: "Select all that apply.",
//     options: ["Work-life balance", "High earning potential", "Job security", "Opportunities for advancement", "Social impact", "Creative freedom", "Remote work possibilities", "Other (Please specify)"]
//   },
//   question7: {
//     id: "question7",
//     type: "TEXT_RESPONSE",
//     prompt: "How would you like the results of this quiz to be presented?",
//     description: "Specify if you prefer a detailed report, a summary with bullet points, a visual presentation, or any other specific format.",
//     options: []
//   }
// };
