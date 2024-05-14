import React, { useState } from "react";
import './DetailedQuestions.css';
import paw_button  from "./images/cat-paw-button.png";
import { Button, Container, Row , Col, Form } from "react-bootstrap";
import catSleep from './images/CISC-progress-cat-sleep.png';
import catWakeUp from './images/CISC-progress-cat-wakeUp.png';
import catYawn from './images/CISC-progress-cat-yawn.png';
import catWalking from './images/trythis.gif';
import mouseEat from './images/CISC-progress-mouse-eat.gif';
import catFight from './images/CISC-progress-cat-fight.gif';
import catEat from './images/CISC-progress-cat-eat.gif';
import transparent from './images/transparent.png';
import prevButtonImage from './images/detailed_prev_button.png';
import nextButtonImage from './images/detailed_next_button.png';
import { CSSTransition } from "react-transition-group";
import { useNavigate } from 'react-router-dom';
import OpenAI from "openai";
import Loading from "./Loading";


let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}
export function DetailedQuestions(): JSX.Element {

    // States
    const [questionIndex, setQuestionIndex] = useState<number>(0); // Current question state
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({}); // Dictionary, used to correlate question -> selected answer
    const [progress, setProgress] = useState<number>(0); // Progress bar state
    const [imagesIndex, setImagesIndex] = useState<number>(0); // Cat image array indexing

    // Cat image array
    const catImages = [catSleep, catWakeUp, catYawn, catWalking, catWalking, catWalking, transparent, transparent];
    const mouseImages = [mouseEat, mouseEat, mouseEat, mouseEat, mouseEat, mouseEat, catFight, catEat];

    const navigate = useNavigate(); 
    const [key] = useState<string>(keyData); //for api key input
    const prompt = `You are tasked with creating a concise and readable career suggestions report fully in HTML format stylized with CSS. All text should be black using CSS.
    You will be provided quiz-takers answers to career-based questions. You will use this information to generate the suggestions. Center all text.
    Do not include any quotation marks in the report. Do not include any html tags in the report. Do not preset the font size in any css styling.

    Strengths and Work Environment: Generate a personal paragraph with a 30px font size that includes the quiz-taker's personal strengths and preferences for a work environment. 
    Use "you" statements. Apply bold formatting to the title of the section. Center all content.

    Possible Career Industries: List 3 industries that match the quiz-taker, along with 3 famous people in each industry. They should be labeled "Famous people: " directly underneath the industry name.
    Do not use bullet points, just list the famous people in one line.
    The first industry should be their top match and
    should be labeled as "Top Industry Match: ", bolded. Bold each industry name. Use a font size of 30px and no bullet points.
    Add bold to the title of the section. Center all content.

    Jobs in Top Career Industry: List 5 well-fitting jobs in the top career industry identified in the previous section, 
    along with their average salary in an HTML table. Use a font size of 26px and create an HTML table with the following specifications:
    Job Name and Average Salary boxes should have a background color of #FFA3B1.
    Rest of the table boxes should have a background color of #F3CACA.
    Include black lines that mark each row and column.
    Bold the Job Name and Average Salary text.
    Bold the title of the section.
    Center all the content.

    Job Descriptions: Provide descriptions for each of the listed jobs, with each description being at least five sentences long. 
    Use a font size of 26px and bold the job titles. Center all content.

     Below are the quiz questions along with the quiz-takers answers. Use this information to generate the report following the format above.`; 
     const [isLoading,setIsLoading] = useState(false);



    // 7 questions and their possible answers
    const questions = [
        {
            question: "You are placed in a project team tasked with creating a marketing campaign for a new product launch; which part of the project would you most enjoy focusing on?",
            possibleAnswers: ['Crafting a compelling message and storytelling to communicate the product\'s unique value, helping it resonate and connect with the target audience.', 
            'Collaborating with creative teams to design visually appealing graphics, videos, and other multimedia content that capture attention and drive engagement.', 
            'Providing strategic direction and guidance to team members, ensuring alignment with overall campaign objectives, efficiency, and good-quality work.', 
            'Conducting market research and consumer behavior analysis to identify key insights and opportunities, analyzing the data and creating reports.']
        },
        {
            question: "What overarching goals, values, and aspirations resonate with you? Consider the impact you'd like to make and what guides your actions and decisions.",
            possibleAnswers: ['I aspire to be a leader in my field, innovating and driving positive change, inspiring others to make a difference in the world. I feel fulfilled when I manage others.', 
            'I am driven by a desire to make an impact on society, addressing social and environmental challenges and creating sustainable future.', 
            'I am committed to personal and professional growth, continuously challenging myself to learn, striving for excellence and continuous improvement.', 
            'I prioritize work-life balance and well-being, valuing fulfillment, happiness, and harmony in all aspects of my life. My life does not have to revolve around my career.']
        },
        {
            question: "Imagining your ideal work environment, describe the cultures and values that would help you thrive. Think about organizational structure, leadership style, communication, and opportunities for collaboration.",
            possibleAnswers: ['I thrive in dynamic environments that embrace change and innovation, where adaptability and forward-thinking is encouraged and employees are supported.', 
            'I value a culture of inclusivity and diversity, where all voices are heard and respected, and where collaboration and teamwork are foundational principles.',
            'I seek a structured and organized work environment with clearly defined roles and responsibilities, ensuring that efforts are recognized and rewarded.', 
            'I prioritize flexibility and independence in my work as well as creative expression, balanced with opportunities for collaboration and mentorship.']
        },
        {
            question: "Imagine you have the opportunity to design your ideal physical work environment. In which setting would you find yourself the most productive and happy?",
            possibleAnswers: ['An outdoor workspace surrounded by nature, offering fresh air, natural light, and opportunities for relaxation and rejuvenation. I enjoy working with nature.', 
            'An open-floor-plan office with collaborative workspaces and communal areas, encouraging interaction, creativity, and spontaneous idea-sharing among team members. ',
            'A traditional office setting with private workstations or cubicles, providing quiet and focused environments for individual concentration and productivity.',
            'A flexible workspace with a mix of private offices, open areas, and breakout rooms, fostering collaboration and teamwork amongst coworkers and leadership.']
        },
        {
            question: "Imagine you're presented with an opportunity to pursue further education or training to advance your career. Which option would you be most inclined to choose?",
            possibleAnswers: ['Enrolling in specialized courses or workshops to deepen my expertise and skills in a specific area relevant to my field, or putting time into learning a new skill.',
             'Pursuing a degree or certification program that offers a broader understanding of various disciplines, providing versatility and adaptability in my career.',
             'Participating in leadership development programs or executive coaching to enhance my management and decision-making abilities, building my leadership skills.',
             'Engaging in experiential learning opportunities such as internships or apprenticeships to gain hands-on experience and practical knowledge.']
        },
        {
            question: "Reflect on your preferred communication style and interpersonal interactions in a professional setting. Which approach resonates most with you?",
            possibleAnswers: ['Engaging in open and transparent communication, fostering trust and mutual respect by sharing ideas and feedback openly with colleagues and stakeholders.', 
             'Cultivating empathy and active listening skills, seeking to understand other perspectives and experiences to build meaningful connections and collaboration.',
             'Demonstrating assertiveness and confidence in expressing opinions and advocating for ideas, contributing to dialogue and decision-making processes.', 
             'Adapting communication styles to suit different audiences and situations, effectively conveying information and ideas comfortably as needed.']
        },
        {
            question: "Imagine you're offered two job opportunities: one with a well-established company known for its stability and benefits, and the other with a startup known for its innovation and risk-taking culture. Which factors would most influence your decision?",
            possibleAnswers: ['Stability and job security, prioritizing a steady income and established benefits package to support financial stability and long-term career growth.', 
             'Innovation and growth potential, valuing the opportunity to contribute to groundbreaking projects and shape the future of a dynamic and rapidly evolving industry.', 
             'Company culture and values, prioritizing a supportive and inclusive work environment that fosters both collaboration and creativity amongst employees.',
             'Career advancement opportunities, such as leadership development programs, and potential for skill development and promotion within the organization.']
        }
    ];

    /*
        Handles selection of an answer for a question. Updates state to record selected answer
        and updates the progress bar based on the number of questions answered.
        Parameters: 
            -answer (string): the selected answer
        Returns:
            -N/A
    */
    const handleAnswerSelection = (answer: string) => { 
        // Records selected answer
        setSelectedAnswers({ ...selectedAnswers, [`Question${questionIndex + 1}`]: answer }); 

        // Updates progress bar
        const answeredQuestionsCount = Object.keys(selectedAnswers).length + 1;
        const newProgress = (answeredQuestionsCount / questions.length) * 100;
        if (!selectedAnswers[`Question${questionIndex + 1}`]) {
            setProgress(newProgress);
            // Updates gif images in textbox
            setImagesIndex(imagesIndex + 1);

            // Move cat towards mouse in textbox
            let currClass = document.querySelector("#cat-gifs");
            if(imagesIndex === 2) {
                currClass?.classList.replace("cat-gifs", "cat-walk-1")
            } 
            if(imagesIndex === 3) {
                currClass?.classList.replace("cat-walk-1", "cat-walk-2")
            } 
            if(imagesIndex === 4) {
                currClass?.classList.replace("cat-walk-2", "cat-walk-3")
            }
        }
    };  

    const prevButton = (index: number) => {
        if(index === 0){
            return;
        } else {
            setQuestionIndex(index-1);
        }
    }

    const nextButton = (index: number) => {
        if(index === 6){
            return;
        } else {
            setQuestionIndex(index+1);
        }
    }
    
    const handleSubmission = async () => {
        setIsLoading(true);
        console.log('Submitting...');
        try {
            const openAI = new OpenAI({
                apiKey: key,
                dangerouslyAllowBrowser: true,
            });
            // Prepare the answers string with formatted questions and answers
            let answersString = '';
            Object.keys(selectedAnswers).forEach((questionKey, index) => {
                answersString += `Question ${index + 1}: ${questions[index].question}\n`;
                answersString += `Answer: ${selectedAnswers[questionKey]}\n\n`;
            });
    
            /*Open AI set up*/
            const completion = await openAI.chat.completions.create({
                messages: [
                    /*Sets up the system and user roles for gpt-4-turbo*/ 
                    { role: 'system', content: prompt },
                    { role: 'user', content: `My answers are:\n${answersString}` }
                ],
                model: 'gpt-4-turbo',
            });
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('API call completed');
            if (completion.choices[0].message.content != null) {
                /*Takes what gpt prints out and routes it the result page which will then displays the result  */
                navigate('/result', { state: { result: completion.choices[0].message.content } });
            } else {
                /*Error handling */
                console.log('Error! Maybe you forgot the API key.');
            }
        } catch (error) {
            console.error('Error in OpenAI integration:', error);
        }finally{
            setIsLoading(false); // Set loading to false after API call completes
            console.log('Loading set to false');
        }
    };

    // Component return
    return (      
        <div style={{ width: '100%' }}>
            {isLoading ? (
                <Loading></Loading>
            ):(
                <>
            <img className="cat-header" alt="Cat header"></img> 
            <div>
                <Container className="question-row">
                    <Row className="horizontal-questions">
                        {questions.map((_, index) => (
                        <Col
                            style={{ display: 'flex', justifyContent: 'center' }}
                            className={`question-${index + 1}`}
                            xs={2}
                            key={index}
                        >
                            <Button
                            onClick={() => setQuestionIndex(index)}
                            style={{
                                backgroundImage: `url(${paw_button})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '75px',
                                height: '75px',
                                borderColor: selectedAnswers[`Question${index + 1}`] ? '#92b8ec' : '#FFA3B1', // Adds border to indicate question was answered
                                borderWidth: selectedAnswers[`Question${index + 1}`] ? '5px' : '0px',
                                backgroundColor: '#FFA3B1',
                                fontSize: '24px',
                                color: 'black',
                                borderRadius: '50%',
                            }}
                            >
                            {index + 1}
                            </Button>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            
            <div className="progress-bar-section">
                <div className="progress-bar-shape">
                    <div className="progress-bar">
                        <div className="update-progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="detailed-prev-button">
                    <Button
                        onClick={() => prevButton(questionIndex)}
                        style={{
                                backgroundImage: `url(${prevButtonImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '75px',
                                height: '75px',
                                backgroundColor: '#FFA3B1',
                                fontSize: '24px',
                                color: 'black',
                                borderRadius: '50%',
                            }}
                    />
                </div>

                <div className="question-textbox">
                    <CSSTransition // Question text fade-in
                        key={`question-${questionIndex}`} // Change key to include questionIndex
                        in={true} 
                        appear={true} 
                        timeout={1000} 
                        classNames="fade" 
                    >
                        <p className="question-number">QUESTION #{questionIndex+1}</p>
                    </CSSTransition>

                    <CSSTransition // Question text fade-in
                        key={questionIndex} 
                        in={true} 
                        appear={true} 
                        timeout={1000} 
                        classNames="fade" 
                    >
                        <p className="question-text-detailed">{questions[questionIndex].question}</p>
                    </CSSTransition>
                    <div className="gifs">
                        <div className="cat-gifs" id="cat-gifs">
                            <img
                                src={catImages[imagesIndex]}
                                alt="logo"
                                id="cat-image"
                            />
                        </div>
                        <div className="mouse-gifs" id="mouse-gifs">
                            <img
                                src={mouseImages[imagesIndex]}
                                alt="logo"
                                id="mouse-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="detailed-next-button">
                    <Button
                            onClick={() => nextButton(questionIndex)}
                            style={{
                                    backgroundImage: `url(${nextButtonImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '75px',
                                    height: '75px',
                                    backgroundColor: '#FFA3B1',
                                    fontSize: '24px',
                                    color: 'black',
                                    borderRadius: '50%',
                                }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Container className = "answer-row" style={{ width: '75%', justifyContent: 'center', display: 'flex'}}>
                    <Row style={{ display: 'flex', height: 'auto', width: '100%' }}>
                        {questions[questionIndex].possibleAnswers.slice(0, 2).map((possibleAnswer, j) => ( // Creates 1st row of answers for each question
                        <Col key={j} style={{ width: '50%'}}>
                            <Form.Check
                                type="radio"
                                name="selectedAnswer"
                                id={`answer-${j + 2}`}
                                label={<span style={{
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    padding: '10px',
                                    width: '100%', 
                                    fontSize: '18px',
                                    fontWeight: '500'
                                  }}>
                                    {possibleAnswer}
                                  </span>}
                                className="custom-radio"
                                style={{
                                textAlign: 'center',
                                padding: '10px',
                                backgroundColor: selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer ? '#f5afaf' : '#F3CACA'
                                }}
                                onChange={() => handleAnswerSelection(possibleAnswer)}
                                checked={selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer}
                            />
                        </Col>
                    ))}
                    </Row>
                </Container>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Container className = "Answer-row" style={{ width: '75%', justifyContent: 'center', display: 'flex'}}>
                    <Row style={{ display: 'flex', height: 'auto', width: '100%' }}>
                        {questions[questionIndex].possibleAnswers.slice(2, 4).map((possibleAnswer, j) => ( // Creates 2nd row of answers for each question
                        <Col key={j} style={{ width: '50%', marginLeft: "1px", marginRight: "1px" }}>
                            <Form.Check
                                type="radio"
                                name="selectedAnswer"
                                id={`answer-${j}`}
                                label={<span style={{
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    padding: '10px',
                                    width: '100%',
                                    fontSize: '18px',
                                    fontWeight: '500'

                                  }}>
                                    {possibleAnswer}
                                  </span>}
                                className="custom-radio"
                                style={{
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    padding: '10px',
                                    backgroundColor: selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer ? '#f5afaf' : '#F3CACA'
                                }}
                                onChange={() => handleAnswerSelection(possibleAnswer)}
                                checked={selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer}
                                />
                        </Col>
                        ))}
                    </Row>
                </Container>
            </div>
                
            <div className = "get-answers-button">
                {Object.keys(selectedAnswers).length === questions.length ? (
                    <Button onClick={handleSubmission}>Get Answers</Button>
                ) : (
                    <Button onClick={handleSubmission}>Get Answers</Button>
                )}
            </div>
            </>
        )}
        </div>   
    );
}

export default DetailedQuestions;
