import { OpenAI } from 'openai';
const openai = new OpenAI({ apiKey: JSON.parse(localStorage.getItem("MYKEY") || '""') 
, dangerouslyAllowBrowser: true });

export async function generateDetailed(detailedAnswers: string[]) {
  const questions = [ // Array of detailed questions to be asked
    "How do you approach solving complex problems?",
    "How would you describe your communication style in a professional setting?",
    "What type of work environment do you thrive in?",
    "How do you make decisions when faced with multiple options?",
    "If given the opportunity, how would you lead a team?",
    "How do you respond to unexpected changes or challenges in the workplace?",
    "What are your long-term career aspirations?"
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
    generateBasic(detailedAnswers);
  }
  if (result[0].length > 200) {
    console.log("Error");
    generateBasic(detailedAnswers);
  }
  const result1 = result[0].split(":");
  const result2 = result[1].split(":");
  const result3= result[2].split(":");

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
    if (result[0].length > 200) {
      console.log("Error");
      generateBasic(basicAnswers);
    }
    const result1 = result[0].split(":");
    const result2 = result[1].split(":");
    const result3= result[2].split(":");
  
  
    return [result1[0], result1[1], result2[0], result2[1], result3[0], result3[1]];
  }