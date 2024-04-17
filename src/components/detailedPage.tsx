import "./pages.css";
import { AIKey } from "../interfaces/AIKeyInterface";
import { Button, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { QuestionProgressBar } from './progressBar';

export function DetailedQuestions(key: AIKey): JSX.Element {
    const questions = [
        {
            question: "What type of work environment do you thrive in?",
            options: [
                "A fast-paced, ever-changing environment.",
                "A stable, predictable, and structured environment.",
                "An independent, flexible, and remote-friendly workplace.",
                "A collaborative, team-oriented, and social environment.",
                "Other (please specify)"
            ]
        },
        {
            question: "How do you prefer to solve problems?",
            options: [
                "Through systematic research and analysis.",
                "By inventing creative and innovative solutions.",
                "Through collaboration and team brainstorming.",
                "By following established guidelines and procedures.",
                "Other (please specify)"
            ]
        },
        {
            question: "What motivates you to succeed in your work?",
            options: [
                "Financial rewards and job security.",
                "Making a difference in society and helping others.",
                "Personal growth and learning new skills.",
                "Recognition and the potential for career advancement.",
                "Other (please specify)"
            ]
        },
        {question: "Which of these tasks would you enjoy doing the most?",
        options: [
            "Analyzing data to find trends and patterns.",
            "Designing graphics or products.",
            "Writing reports, articles, or other content.",
            "Teaching or training others.",
            "Other (please specify)"
        ]
        },
        {
            question: "What size company do you see yourself working at?",
            options: [
                "A large, multinational corporation.",
                "A small to medium-sized enterprise.",
                "A start-up",
                "Freelancing or running my own business",
                "Other (please specify)"
            ]
        },
        {
            question: "Which of these subjects did you most enjoy studying?",
            options: [
                "Mathematics and statistics",
                "Art and design",
                "History and literature",
                "Biology and chemistry",
                "Other (please specify)"
            ]
        },
        {
            question: "Which aspect of a project do you find most appealing?",
            options: [
                "Starting and planning the project.",
                "The development and active working phase.",
                "The finalization and presentation of results.",
                "Overseeing the project and leading the team.",
                "Other (please specify)"
            ]
        },
        {
            question:"When thinking about your future career, what is most important to you?",
            options: [
                "Work-life balance and flexible hours.",
                "Opportunities for international travel and work.",
                "High earning potential and benefits.",
                "Job stability and a clear career path.",
                "Other (please specify)"
            ]
        },
        {
            question: "If you had to teach something, what would you choose?",
            options: [
                "A technical skill, like coding or engineering principles.",
                "A creative skill, like painting or creative writing.",
                "A practical skill, like cooking or carpentry.",
                "An academic subject, like history or science.",
                "Other (please specify)"
            ]
        },
        {
            question: "What describes your approach to team projects?",
            options: [
                "I am a natrual leader and take charge of the group.",
                "I am a mediator and work to maintain group harmony.",
                "I am an idea generator and contribute creatively.",
                "I am the organizer who plans and keeps track of tasks.",
                "Other (please specify)"
            ]
        }

    ];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
    const [otherText, setOtherText] = useState<string>('');

    useEffect(() => {
        // Initialize otherText for the current question if needed
        const currentAnswer = answers[currentQuestionIndex];
        if (currentAnswer.startsWith("Other (please specify): ")) {
            setOtherText(currentAnswer.substring("Other (please specify): ".length));
        } else {
            setOtherText('');
        }
    }, [currentQuestionIndex, answers]);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = value === "Other (please specify)" ? `Other (please specify): ${otherText}` : value;
        setAnswers(updatedAnswers);
    };

    const handleOtherTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newOtherText = event.target.value;
        setOtherText(newOtherText);
        if (answers[currentQuestionIndex].startsWith("Other (please specify):")) {
            const updatedAnswers = [...answers];
            updatedAnswers[currentQuestionIndex] = `Other (please specify): ${newOtherText}`;
            setAnswers(updatedAnswers);
        }
    };

    const handleSubmit = async () => {
        // Replace with your API endpoint or backend handler
        const response = await fetch('/suggest-career', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers }),
        });

        const data = await response.json();
        console.log(data.careerSuggestion);  // Display or process the career suggestion
    };

    const canSubmit = answers.every(answer => answer.trim() !== '');

    return (
        <div className="Pages">
            <h1>Detailed Career Questions</h1>
            <QuestionProgressBar totalQuestions={questions.length} completedQuestions={currentQuestionIndex + 1} />
            <div>
                <h2>Question {currentQuestionIndex + 1}</h2>
                <p>{questions[currentQuestionIndex].question}</p>
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <Form.Check
                        key={`${currentQuestionIndex}-${index}`}
                        type="radio"
                        name={`question${currentQuestionIndex}`}
                        label={option}
                        value={option}
                        id={`option${index}`}
                        checked={answers[currentQuestionIndex] === option}
                        onChange={handleOptionChange}
                    />
                ))}
                {answers[currentQuestionIndex].startsWith("Other (please specify):") && (
                    <Form.Control
                        type="text"
                        value={otherText}
                        onChange={handleOtherTextChange}
                        placeholder="Please specify..."
                    />
                )}
            </div>
            <div className="navigation-buttons">
                <Button variant="secondary" onClick={() => setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0))} disabled={currentQuestionIndex === 0}>
                    Previous
                </Button>
                <Button variant="primary" onClick={() => setCurrentQuestionIndex(Math.min(currentQuestionIndex + 1, questions.length - 1))} disabled={currentQuestionIndex === questions.length - 1}>
                    Next
                </Button>
                {currentQuestionIndex === questions.length - 1 && (
                    <Button variant="success" onClick={handleSubmit} disabled={!canSubmit}>
                        Submit
                    </Button>
                )}
            </div>
        </div>
    );
}