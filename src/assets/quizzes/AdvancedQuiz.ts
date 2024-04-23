import { Question } from "../../interfaces/QuestionTypes";

export const advancedQuiz: Record<string, Question> = {
  question1: {
    id: "question1",
    type: "MC_SINGLE_RESPONSE",
    prompt: "What is your current level of education?",
    description: "If currently in school, select your current level",
    options: ["High School (or earlier)", "College (BA/BS)", "Master's Degree", "PhD", "No formal education"]
  },
  question2: {
    id: "question2",
    type: "MC_SINGLE_RESPONSE",
    prompt: "Which describes you best?",
    description: "It is ok to be unsure",
    options: [
        "I am unsure about what Career I want",
        "I know the general field I would like to pursue",
        "I know the specific field I would like to specialize in",
        "I already have a lot of exprience and am looking to take the next step to further my career",
        "I have a lot of expeience in my current career, but am looking to make a change",
        "None of these fit me"
      ],
  },
  question3: {
    id: "question3",
    type: "MC_MULTI_RESPONSE",
    prompt: "Which area interests you the most?",
    description: "",
    options: ["Science", "Arts", "Business", "Technology", "Other(click to specify)"],
  },
  question4: {
    id: "question4",
    type: "TEXT_RESPONSE",
    prompt: "Do you have any relavant work or academic experience you would like to mention?",
    description: "Include anything from past jobs to courses you have taken",
    options: []
  },
  question5: {
    id: "question5",
    type: "TEXT_RESPONSE",
    prompt: "What do you hope to get out of this quiz?",
    description: "If you are unsure about what you want, talk about your current interests",
    options: []
  }
};
