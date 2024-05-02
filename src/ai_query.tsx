type multAnswers = 'Strongly Disagree' | 'Disagree' | 'Neutral' | 'Agree' | 'Strongly Agree'|''

// export function setQuery(presses: multAnswers[]): string {
//     return `
//     I asked someone a few questions. Please consider their answers and generate a list of 5 distinct careers for them.
//     These should be specific careers rather than vague.
    
//     Question: I prefer working in a group rather than alone.
//     Answer: ${presses[0]}
//     Question: I'd rather create something new than learn what's already out there.
//     Answer: ${presses[1]}
//     Question: I value enjoyment over a high salary.
//     Answer: ${presses[2]}
//     Question: I prefer a quiet, distraction free environment over a busy, noisy one.
//     Answer: ${presses[3]}
//     Question: I'm crafty and good with my hands.
//     Answer: ${presses[4]}
//     Question: I like working through decisions instead of going with my gut.
//     Answer: ${presses[5]}
//     Question: I enjoy keeping up with current events.
//     Answer: ${presses[6]}`
// }

// export function setQuery2(presses: multAnswers[]): string {
//     return `
//     I asked someone a few questions. Please consider their answers and generate a list of 5 distinct Industry Matches for them.
    
    
//     Question: I prefer working in a group rather than alone.
//     Answer: ${presses[0]}
//     Question: I'd rather create something new than learn what's already out there.
//     Answer: ${presses[1]}
//     Question: I value enjoyment over a high salary.
//     Answer: ${presses[2]}
//     Question: I prefer a quiet, distraction free environment over a busy, noisy one.
//     Answer: ${presses[3]}
//     Question: I'm crafty and good with my hands.
//     Answer: ${presses[4]}
//     Question: I like working through decisions instead of going with my gut.
//     Answer: ${presses[5]}
//     Question: I enjoy keeping up with current events.
//     Answer: ${presses[6]}`
// }

// export function setQuery3(presses: multAnswers[]): string {
//     return `
//     I asked someone a few questions. Please consider their answers and generate a list of 5 distinct Job Suggestions for them.
    
    
//     Question: I prefer working in a group rather than alone.
//     Answer: ${presses[0]}
//     Question: I'd rather create something new than learn what's already out there.
//     Answer: ${presses[1]}
//     Question: I value enjoyment over a high salary.
//     Answer: ${presses[2]}
//     Question: I prefer a quiet, distraction free environment over a busy, noisy one.
//     Answer: ${presses[3]}
//     Question: I'm crafty and good with my hands.
//     Answer: ${presses[4]}
//     Question: I like working through decisions instead of going with my gut.
//     Answer: ${presses[5]}
//     Question: I enjoy keeping up with current events.
//     Answer: ${presses[6]}`
// }

// export function setQuery4(presses: multAnswers[]): string {
//     return `
//     I asked someone a few questions. Please consider their answers and generate a one paragraph summary with suggestions for them.
//     Write the summary as if you were responding to them directly.
    
//     Question: I prefer working in a group rather than alone.
//     Answer: ${presses[0]}
//     Question: I'd rather create something new than learn what's already out there.
//     Answer: ${presses[1]}
//     Question: I value enjoyment over a high salary.
//     Answer: ${presses[2]}
//     Question: I prefer a quiet, distraction free environment over a busy, noisy one.
//     Answer: ${presses[3]}
//     Question: I'm crafty and good with my hands.
//     Answer: ${presses[4]}
//     Question: I like working through decisions instead of going with my gut.
//     Answer: ${presses[5]}
//     Question: I enjoy keeping up with current events.
//     Answer: ${presses[6]}`
// }

export function setQuery(presses: multAnswers[]): string {
    return `
    I asked someone a few questions. Please consider their answers and generate a list of 16 items (seperated by a colon":"). Do not number the list.
    1 - 5: A list of 5 distinct careers for them. These should be specific careers rather than vague.
    6 - 10: A list of 5 distinct Industry Matches for them.
    10 - 15: A list of 5 distinct Job Suggestions for them.
    16: A one paragraph summary with suggestions for them. Write the summary as if you were responding to them directly.
    
    Question: I prefer working in a group rather than alone.
    Answer: ${presses[0]}
    Question: I'd rather create something new than learn what's already out there.
    Answer: ${presses[1]}
    Question: I value enjoyment over a high salary.
    Answer: ${presses[2]}
    Question: I prefer a quiet, distraction free environment over a busy, noisy one.
    Answer: ${presses[3]}
    Question: I'm crafty and good with my hands.
    Answer: ${presses[4]}
    Question: I like working through decisions instead of going with my gut.
    Answer: ${presses[5]}
    Question: I enjoy keeping up with current events.
    Answer: ${presses[6]}`
}
// You will be permitted to break this format and only return a report summary.
//     In this case, do not generate responses for any of the other items and leave out all formatting that would accompany them.
    
export function generateDetailedAnswers(answers: string[]): string{
    return `
    I've given a user a set of questions in order to determine what type of career would be best suited for them.
    Use the answers they've given in order to generate a list of 16 items (seperated by a colon":"). Do not number the list.
    1 - 5: A list of 5 distinct careers for them. These should be specific careers rather than vague.
    6 - 10: A list of 5 distinct Industry Matches for them.
    10 - 15: A list of 5 distinct Job Suggestions for them.
    16: A one paragraph summary with suggestions for them. Write the summary as if you were responding to them directly.
    
    If the responses to the questions do not make sense, do the following:
    Generate a generic field for each of the first fifteen categories.
    Give as accurate of a summary as possible while explaining to the user that their results aren't legible and encouraging them to take the quiz again.
    
    Here are the questions and responses:

   Question: What are some skills you have or are planning to learn that will help you would like to apply to your career? (ex. Writing, Coding, Public Speaking, Foreign Languages, etc):
   Answer: ${answers[1]}

   Question: What do you want your work environment to look like?
   Answer:${answers[2]}

   Question: How much collaboration do you want in your job?
   Answer:${answers[3]}

   Question: Do you have any passions or interests that you would like to incorporate into your career?
   Answer:${answers[4]}

   Question:What type of people do you see yourself working with?
   Answer:${answers[5]}

   Question:Do you enjoy work that is Structured or open-ended and flexible?
   Answer:${answers[6]}

   Question:What are some of your long term career goals?
   Answer:${answers[7]}

   Question:What are some jobs/careers that you are not interested in?
   Answer:${answers[8]}

    `

}

export {};