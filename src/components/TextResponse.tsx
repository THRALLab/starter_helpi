import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import { FaQuestionCircle } from "react-icons/fa";

export function TextResponse({
    question,
    description,
    options,
    onNext
}: {
    question: string;
    description: string;
    options: string[];
    onNext: (answer: string) => void;
}): JSX.Element {
    const [tooltip, setTooltip] = useState<string>("");
    const [localAnswer, setLocalAnswer] = useState<string>("");
    const questionRef = useRef<HTMLHeadingElement>(null);
    const [questionWidth, setQuestionWidth] = useState<number>(0);

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

    
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <h3 ref={questionRef}>{question}</h3>
                <FaQuestionCircle
                    onMouseEnter={() => setTooltip(description)}
                    onMouseLeave={() => setTooltip('')}
                    style={{ cursor: 'pointer',  color: "darkblue", marginLeft: '5px'}}
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
            <Form.Group>
                <Form.Label>{question}</Form.Label>
                <Form.Control
                    value={localAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocalAnswer(event.target.value)}
                />
                <Button 
                    disabled={localAnswer === ""}
                    onClick={() => onNext(localAnswer)}
                >Next</Button>
            </Form.Group>
        </div>
    )
}

