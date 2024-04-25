import { Question } from "../../interfaces/QuestionTypes";

export const basicQuiz: Record<string, Question> = {
  question1: {
    id: "basic1",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What level of education are you currently pursuing or have completed?",
    description: "Select the highest level of education you have achieved or are currently pursuing.",
    options: ["Middle School or lower", "High School", "Some College", "Associate Degree", "Bachelor’s Degree"]
  },
  question2: {
    id: "basic2",
    type: "MC_SINGLE_RESPONSE",
    prompt: "How would you describe your current understanding of potential careers?",
    description: "Choose the option that best describes your current situation.",
    options: [
      "I'm just starting to think about careers",
      "I have some ideas but need to learn more",
      "I know what interests me but not how to get there",
      "I'm exploring several options",
      "I'm not sure where to start"
    ],
  },
  question3: {
    id: "basic3",
    type: "MC_MULTI_RESPONSE",
    prompt: "What are your main interests?",
    description: "Select the area that you are most interested in learning about career opportunities.",
    options: ["Sciences", "Arts and Humanities", "Business and Finance", "Technology and Engineering", "Healthcare"],
  },
  question4: {
    id: "basic4",
    type: "TEXT_RESPONSE",
    prompt: "What hobbies or activities do you enjoy most?",
    description: "This can include anything from extracurricular activities to personal hobbies.",
    options: []
  },
  question5: {
    id: "basic5",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What do you value most in a future career?",
    description: "Select the factor that is most important to you in a career.",
    options: ["Job stability", "High income", "Helping others", "Working with technology", "Creative expression"]
  }
};
