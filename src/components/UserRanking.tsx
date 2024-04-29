import { useEffect, useRef, useState } from "react";
import { Button } from 'react-bootstrap';
import { FaQuestionCircle } from "react-icons/fa";

export function UserRanking({
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
    const [categories, setCategories] = useState<string[]>(prevAnswer.split(","));
    const questionRef = useRef<HTMLHeadingElement>(null);
    const [questionWidth, setQuestionWidth] = useState<number>(0);
    
    /**
    const updatePriorities = (priority: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked
            ? setCategories([...categories, priority])
            : setCategories(
                [...categories].filter((chosenMember: string): boolean => chosenMember !== priority)
            )
    }
     */

    function compressAnswer(): string {
        return categories.reduce((combined: string, selected: string) => combined ? combined + ", " + selected : selected, "");
    }
    const pushUp = (priority: string) => {
        const currIndex = categories.findIndex((chosenMember: string): boolean => chosenMember === priority);
        if (currIndex > 0) {
            // Swap with the previous item
            const newPriorities = [...categories];
            [newPriorities[currIndex - 1], newPriorities[currIndex]] = [newPriorities[currIndex], newPriorities[currIndex - 1]];
            setCategories(newPriorities);
        }
    }

    const pushDown = (priority: string) => {
        const currCount = categories.reduce((count: number, chosenMember: string) => count += 1, 0);
        const currIndex = categories.findIndex((chosenMember: string): boolean => chosenMember === priority);
        if (currIndex < (currCount - 1)) {
            // Swap with the previous item
            const newPriorities = [...categories];
            [newPriorities[currIndex + 1], newPriorities[currIndex]] = [newPriorities[currIndex], newPriorities[currIndex + 1]];
            setCategories(newPriorities);
        }
    }

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
                <h4 ref={questionRef} style={{maxWidth: "60%"}}>{question}</h4>
                <FaQuestionCircle
                    onMouseEnter={() => setTooltip(description)}
                    onMouseLeave={() => setTooltip('')}
                    size={35}
                    style={{ cursor: 'pointer',  color: "red", marginLeft: '5px'}}
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
            <ol style={{textAlign: "left"}}>
                {categories.map((category) => (
                    <li key={category}>
                        <Button
                            className="App-quiz"
                            key={`${category}⬆️`}
                            variant="outline-success"
                            size="sm"
                            onClick={() => pushUp(category)}
                        >⬆</Button>
                        {' '}
                        <Button
                            className="App-quiz"
                            key={`${category}⬇️`}
                            variant="outline-danger"
                            size="sm"
                            onClick={() => pushDown(category)}
                        >⬇</Button>
                        {' '}
                        {category}
                    </li>
                ))}
            </ol>
            <Button
                    variant={isFirst ? "outline-primary" : "primary"}
                    disabled={isFirst}
                    onClick={() => onNext(compressAnswer(), false)}>Back</Button>
            <Button onClick={() => onNext(compressAnswer(), true)}>Next</Button>  
        </div>
    )
}