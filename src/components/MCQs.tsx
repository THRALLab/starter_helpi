import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ProgressBar from "./bar";

export function MCQs(): JSX.Element {
    //state variables to store the selected answers
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(14).fill(''));

    //state variables to store the progress of the MCQs
    const[progress,setProgress] = useState<number>(0);

    //state variables to store the selected options
    const[isSelected1,setIsSelected] = useState<boolean>(false);
    const[isSelected2,setIsSelected2] = useState<boolean>(false);
    const[isSelected3,setIsSelected3] = useState<boolean>(false);
    const[isSelected4,setIsSelected4] = useState<boolean>(false);
    const[isSelected5,setIsSelected5] = useState<boolean>(false);
    const[isSelected6,setIsSelected6] = useState<boolean>(false);
    const[isSelected7,setIsSelected7] = useState<boolean>(false);
    const[isSelected8,setIsSelected8] = useState<boolean>(false);
    const[isSelected9,setIsSelected9] = useState<boolean>(false);
    const[isSelected10,setIsSelected10] = useState<boolean>(false);
    const[isSelected11,setIsSelected11] = useState<boolean>(false);
    const[isSelected12,setIsSelected12] = useState<boolean>(false);
    const[isSelected13,setIsSelected13] = useState<boolean>(false);
    const[isSelected14,setIsSelected14] = useState<boolean>(false);
    
// functions to update the progress bars
    function updateProgress1(){
        if(!isSelected1){
            setProgress(progress+1);
            setIsSelected(true);

        }
        
    }
    function updateProgress2(){
        if(!isSelected2){
            setProgress(progress+1);
            setIsSelected2(true);

        }
    }
    function updateProgress3(){
        if(!isSelected3){
            setProgress(progress+1);
            setIsSelected3(true);

        }
    }
    function updateProgress4(){
        if(!isSelected4){
            setProgress(progress+1);
            setIsSelected4(true);

        }
    }
    function updateProgress5(){
        if(!isSelected5){
            setProgress(progress+1);
            setIsSelected5(true);

        }
    }
    function updateProgress6(){
        if(!isSelected6){
            setProgress(progress+1);
            setIsSelected6(true);
        }
    }
    function updateProgress7(){
        if(!isSelected7){
            setProgress(progress+1);
            setIsSelected7(true);

        }
    }
    function updateProgress8(){
        if(!isSelected8){
            setProgress(progress+1);
            setIsSelected8(true);

        }
    }
    function updateProgress9(){
        if(!isSelected9){
            setProgress(progress+1);
            setIsSelected9(true);

        }
    }
    function updateProgress10(){
        if(!isSelected10){
            setProgress(progress+1);
            setIsSelected10(true);

        }
    }
    function updateProgress11(){
        if(!isSelected11){
            setProgress(progress+1);
            setIsSelected11(true);

        }
    }
    function updateProgress12(){
        if(!isSelected12){
            setProgress(progress+1);
            setIsSelected12(true);

        }
    }
    function updateProgress13(){
        if(!isSelected13){
            setProgress(progress+1);
            setIsSelected13(true);

        }
    }
    function updateProgress14(){
        if(!isSelected14){
            setProgress(progress+1);
            setIsSelected14(true);

        }
    }
    

    // function to handle the selection of the answers
    function handleAnswerSelection(index: number, value: string) {
        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[index] = value;
            console.log(newAnswers);
            return newAnswers;
        });
        if(index === 0){
            updateProgress1();
        }
        else if(index === 1){
            updateProgress2();
        }
        else if(index === 2){
            updateProgress3();
        }
        else if(index === 3){
            updateProgress4();
        }
        else if(index === 4){
            updateProgress5();
        }
        else if(index === 5){
            updateProgress6();
        }
        else if(index === 6){
            updateProgress7();
        }
        else if(index === 7){
            updateProgress8();
        }
        else if(index === 8){
            updateProgress9();
        }
        else if(index === 9){
            updateProgress10();
        }
        else if(index === 10){
            updateProgress11();
        }
        else if(index === 11){
            updateProgress12();
        }
        else if(index === 12){
            updateProgress13();
        }
        else if(index === 13){
            updateProgress14();
        }

    }

    
//arrays of basic questions in the form of MCQs
    let questions = [
        "What type of work environment do you prefer?",
        "What skill are you most proud of?",
        "How do you handle challenges or setbacks?",
        "Which of the following activities do you enjoy the most?",
        "What motivates you in your work?",
        "How do you prefer to learn new skills or information?",
        "What industry or field interests you the most?"
    ];
// options for the MCQs in the form of arrays
    let options = [
        ["Fast-paced and dynamic", "Quiet and structured", "Collaborative and team-oriented", "Independent and self-directed"],
        ["Creativity and innovation", "Analytical thinking and problem-solving", "Communication and interpersonal skills", "Attention to detail and organization"],
        ["Embrace them as opportunities for growth", "Analyze the situation and devise a strategic solution", "Seek support and advice from others", "Stay focused and determined until the issue is resolved"],
        ["Coming up with new ideas and brainstorming", "Solving complex puzzles or problems", "Working closely with others to achieve a common goal", "Following step-by-step instructions to complete a task"],
        ["Making a positive impact on others or society", "Challenging yourself and reaching new goals", "Building strong relationships with colleagues or clients", "Maintaining stability and security in your career"],
        ["Experimenting and trying things out on your own", "Reading books or articles", "Participating in workshops or group discussions", "Watching tutorials or receiving hands-on training"],
        ["Technology and innovation", "Finance and business", "Healthcare and social services", "Arts and entertainment"]
    ];
    let moreQuestions = [["What role do you usually play in group projects or teams?"], ["What type of work schedule would you prefer"], ["What type of tasks do you enjoy the most?"], ["What do you value most in a company culture?"], ["What's your preferred level of interaction with clients or customers?"], ["How important is work-life balance to you?"], ["What's your approach to problem-solving?"]];
    let moreOptions = [["The leader who sets direction and delegates tasks", "The meticulous organizer who ensures everything runs smoothly", "The creative thinker who generates new ideas", "The team player who supports and motivates others"], ["Standard 9 to 5 schedule", "Flexible hours or remote work options", "Irregular hours with breaks in between", "Part-time or freelance work"], ["Problem-solving and analysis", "Routine tasks with clear instructions", "Collaborative projects with a team", "Innovative and experimental projects"], ["A supportive and inclusive environment", "A competitive and results-driven atmosphere", "A creative and innovative culture", "A stable and structured organization"], ["I enjoy building relationships with clients and understanding their needs", "I prefer to focus on delivering results without direct client interaction", "I thrive on providing excellent customer service and building rapport", "I prefer to leave client interactions to sales or customer service teams"], ["It's essential for my well-being", "It's important, but not a deal-breaker", "It's not a priority for me", "I prefer to fully immerse myself in work"], ["I break down the problem into smaller parts and analyze each one systematically", "I brainstorm solutions with a group to gather diverse perspectives", "I try different approaches until I find one that works", "I seek advice from experts or mentors to guide my problem-solving process"]];
    const [page, setPage] = useState<string>("");
    const [click, setClick] = useState<boolean>(false);
    const [moreBasic, setMoreBasic] = useState<boolean>(false);
    function generateQ(){
        setPage("moreBasic");
        setClick(true); 
        setMoreBasic(true);
    }

    return (
        //pprogress bar for the MCQs
        <><div className="Progress-Bar">
            
            {moreBasic ?(<><div className="Progress">{Math.round((progress / 14) * 100)}% </div><ProgressBar value={progress} maxValue={14} /></>)
            :(<><div className="Progress">{Math.round((progress / 7) * 100)}% </div><ProgressBar value={progress} maxValue={7} /></>)}
        </div>
            <><div className="Center">
                    <Form.Group controlId="MCQs">
                        {questions.map((question, index) => (
                            <div key={index}>
                                <Form.Label className="Bold">{`${index + 1}. ${question}`}</Form.Label>
                                <div className="Space">
                                    {options[index].map((option: string, optionIndex: number) => (
                                        <Form.Check
                                            key={option}
                                            type="radio"
                                            label={option}
                                            name={`question-${index}`}
                                            value={option}
                                            checked={selectedAnswers[index] === option}
                                            onChange={() => handleAnswerSelection(index, option)} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Form.Group>
        

            <div>
                {page === 'moreBasic' && (
                    <> 
                    <div className="Center">
                    <div className="Progress-Bar">
            
        </div>
                <Form.Group controlId="MCQs">
                    {moreQuestions.map((question, index) => (
                        <div key={index+7}>
                            <Form.Label className="Bold">{`${index + 8}. ${question}`}</Form.Label>
                            <div className="Space">
                                {moreOptions[index].map((option: string, optionIndex: number) => (
                                    <Form.Check
                                        key={option}
                                        type="radio"
                                        label={option}
                                        name={`question-${index+7}`}
                                        value={option}
                                        checked={selectedAnswers[index+7] === option}
                                        onChange={() => handleAnswerSelection(index+7, option)} />
                                ))}
                            </div>
                        </div>
                    ))}
                </Form.Group>
            </div>
                    </>
                    )}
            </div>
        </div>
    <Button className="Submit-Button" variant="primary" onClick={generateQ} disabled={click}>Generate more questions</Button></>
</>
    );
}
