import { useEffect, useRef, useState } from 'react';
import { Form, Button, ToggleButton, FormControl } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa'; // This line imports a question circle icon from Font Awesome


export function McSingleResponse({
    question,
    description,
    options,
    onNext,
    isFirst,
    prevAnswer
}: {
    question: string;
    description: string;
    options: string[];
    onNext: (answer: string, forewards: boolean) => void;
    isFirst: boolean;
    prevAnswer: string;
}): JSX.Element {
    const [tooltip, setTooltip] = useState<string>("");
    const [localAnswer, setLocalAnswer] = useState<string>(prevAnswer);
    const questionRef = useRef<HTMLHeadingElement>(null);
    const [questionWidth, setQuestionWidth] = useState<number>(0);
    const [customAnswer, setCustomAnswer] = useState<string>("");

    useEffect(() => {
        /**
        * Positioning for dynamic tooltip that appears when the user hovers over
        * an informational icon, providing additional context for the question.
        *
        * The tooltip's horizontal position adjusts dynamically to align with the
        * end of the question text. This alignment is recalculated on window resize
        * to maintain the correct position across different screen sizes.
         */
        const updateTooltipPosition = () => {
            if (questionRef.current) {
                setQuestionWidth(questionRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', updateTooltipPosition);
        updateTooltipPosition();

        return () => window.removeEventListener('resize', updateTooltipPosition);
    }, [question]);

    const DisplayOther = ({thisKey}:{thisKey : string}): JSX.Element => {
        if (!localAnswer.includes("other")) {
            return(
                <ToggleButton
                    className="App-quiz"
                    variant={localAnswer === thisKey ? "selected" : "outline-secondary"}
                    type="radio"
                    id="other"
                    value="Other"
                    onChange={() => setLocalAnswer("Other")}
                >
                    Other
                </ToggleButton>
            )
        } else return <></>
    }
    
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <h4 ref={questionRef} style={{maxWidth: "60%"}}>{question}</h4>
                <FaQuestionCircle className="quiz-tooltip"
                    onMouseEnter={() => setTooltip(description)}
                    onMouseLeave={() => setTooltip('')}
                    size={35}
                />
            </div>
            {tooltip && (
                <div style={{
                    position: "absolute",
                    top: "0%",
                    right: `calc(10% - ${questionWidth / 2}px - 20px)`,
                    transform: 'translateX(-100%)',
                    width: "max-content",
                    maxWidth: "200px",
                    border: "1px solid #ccc",
                    padding: "10px",
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    zIndex: "1000",
                    pointerEvents: "none"
                }}>
                    {tooltip}
                </div>
            )}
            <Form>
                <div>
                    {options.map((choice) => (
                        choice.toLowerCase().includes("other")
                        ? (
                            <>
                            <DisplayOther thisKey={choice}/>
                            {(localAnswer === "Other") && (
                                <FormControl
                                    style={{ marginTop: '10px' }}
                                    placeholder="Type your custom answer here"
                                    value={customAnswer}
                                    onChange={(event) => setCustomAnswer(event.target.value)}
                                />
                            )}
                        </>
                        ) :
                        <>
                            <ToggleButton  
                                className="App-quiz"
                                key={`${choice}Select`}
                                type="radio"
                                id={choice}
                                value={choice}
                                checked={localAnswer === choice}
                                variant={localAnswer === choice ? "selected" : "single-selected"}
                                onChange={() => setLocalAnswer(choice)}
                                    > {choice}
                            </ToggleButton>
                            <br></br>
                        </>
                    ))}
                </div>
                <Button
                    variant={isFirst ? "nav-disabled" : "nav"}
                    disabled={isFirst}
                    onClick={() => onNext(localAnswer, false)}>Back</Button>
                <Button
                    variant={localAnswer === "" ? "nav-disabled" : "nav"}
                    disabled={localAnswer === ""}
                    onClick={() => onNext(localAnswer, true)}> Next</Button>
            </Form>
        </div>
    );
}
