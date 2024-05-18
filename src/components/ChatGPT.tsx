import { OpenAI } from 'openai';
const openai = new OpenAI({ apiKey: JSON.parse(localStorage.getItem("MYKEY") || '""') 
, dangerouslyAllowBrowser: true });

export async function generateDetailed(detailedAnswers: string[]) {
  const questions = [ // Array of detailed questions to be asked
    "Consider the role of failure in career growth. How do you approach setbacks and challenges, and what strategies do you employ to bounce back and persevere?",
    "Reflect on the impact you want to have on your community or society through your career.",
    "Reflect on a moment in your life when you felt completely immersed and engaged in what you were doing. What were you doing, and how can you incorporate similar elements into your future career?",
    "Consider the lifestyle you envision for yourself in the future. How does your ideal work-life balance look, and which career paths align with your desired lifestyle?",
    "Consider the future of work and emerging industries. Which trends or technologies do you find most exciting, and how could you position yourself to capitalize on these opportunities?",
    "Reflect on a moment when you felt deeply fulfilled and energized by your work, regardless of whether it was a paid job or a volunteer opportunity. What aspects of that experience can you identify as key drivers for your career satisfaction?",
    "Reflect on your preferred work style and environment. Are you more drawn to structured routines, flexibility, or a mix of both?"
  ];

  const completion = await openai.chat.completions.create({ // Generate the completion for the detailed questions
    model: "gpt-4-turbo",
    messages: [
      { role: 'system', content: 'You are a Career Assessment quiz results generator. Always use title case.' },
      { role: 'user', content: `Give me a list of careers using these answers: ${detailedAnswers} to these Questions: ${questions}. The first question uses the first answer, the second question uses the second answer and so on. Just give me the name of 3 options. No extra info is needed. Number them. Also put them in this form: job name: indeed.com/q-JOBLINK-jobs.html. The job name should be just the name of the job. JOBLINK should have separated words with hyphens not spaces and put it in the JOBNAMEHERE spot. Split up the jobs by a comma so that I can turn the string into an array. Please only say what the jobs are don't give any extra info or say anything else about the prompt. I want only the career and the link.` }
    ],
    temperature: .75,
  });


  const result = completion.choices[0].message.content?.split(",") ?? [];
  if (result === undefined) {
    await generateDetailed(detailedAnswers);
  }
  const result1 = result[0].split(":");
  const result2 = result[1].split(":");
  const result3= result[2].split(":");
  if (result1[0] === "Job Name" || result1[0].length > 200){ // error handling scenario for if ChatGPT returns the jobs as just "Job Name" instead of their actual title
    console.log("error, regenerating")                        // or if the job title is too long because chatgpt freaks out and doesn't follow the prompt
    await generateDetailed(detailedAnswers);
  }

  return [result1[0], result1[1], result2[0], result2[1], result3[0], result3[1]];
}
export async function generateBasic(basicAnswers: string[]) {
  let questions = [ // Array of basic questions to be asked
    "What type of work environment do you prefer?",
    "What skill are you most proud of?",
    "How do you handle challenges or setbacks?",
    "Which of the following activities do you enjoy the most?",
    "What motivates you in your work?",
    "How do you prefer to learn new skills or information?",
    "What industry or field interests you the most?"
];

  const completion = await openai.chat.completions.create({ // Generate the completion for the basic questions
    model: "gpt-4-turbo",
    messages: [
      { role: 'system', content: 'You are a Career Assessment quiz results generator. Always use title case.' },
      { role: 'user', content: `Give me a list of careers using these answers: ${basicAnswers} to these Questions: ${questions}. The first question uses the first answer, the second question uses the second answer and so on. The last question and answer should be the style of jobs the person is looking for. Just give me the name of 3 options. No extra info is needed. Number them. Also put them in this form: job name: indeed.com/q-JOBLINK-jobs.html. The job name should be just the name of the job. JOBLINK should have separated words with hyphens not spaces and put it in the JOBNAMEHERE spot. Split up the jobs by a comma so that I can turn the string into an array. Please only say what the jobs are don't give any extra info or say anything else about the prompt. I want only the career and the link.` }
    ],
    temperature: .75,
  });

  const result = completion.choices[0].message.content?.split(",") ?? [];
  if (result === undefined) {
    generateBasic(basicAnswers);
  }
  const result1 = result[0].split(":");
  const result2 = result[1].split(":");
  const result3= result[2].split(":");
  if (result1[0] === "Job Name" || result1[0].length > 200){ // error handling scenario for if ChatGPT returns the jobs as just "Job Name" instead of their actual title
    console.log("error, regenerating")                       // or if the job title is too long because chatgpt freaks out and doesn't follow the prompt
    await generateBasic(basicAnswers);
  }
  return [result1[0], result1[1], result2[0], result2[1], result3[0], result3[1]];
}

