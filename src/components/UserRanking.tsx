import { useEffect, useRef, useState } from "react";
import { Button } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa";






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
    const [categories, setCategories] = useState<string[]>(prevAnswer ? prevAnswer.split(",").filter((item:string) => (!item.toLowerCase().includes("other"))) : options.filter((item:string) => (!item.toLowerCase().includes("other"))));
    const questionRef = useRef<HTMLHeadingElement>(null);
    const [questionWidth, setQuestionWidth] = useState<number>(0);

    function compressAnswer(): string {
        return categories.reduce((combined: string, selected: string) => combined ? combined + ", " + selected : selected, "");
    }

    const handleDragStart = (index: number) => (event: React.DragEvent<HTMLLIElement>) => {
        event.dataTransfer.setData("text/plain", index.toString());
    };

    const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
        event.preventDefault();  // Necessary for allowing drop
    };

    const handleDrop = (index: number) => (event: React.DragEvent<HTMLLIElement>) => {
        const draggedIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
        if (draggedIndex !== index) {
            const newCategories = [...categories];
            const item = newCategories.splice(draggedIndex, 1)[0];
            newCategories.splice(index, 0, item);
            setCategories(newCategories);
        }
    };

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
                <BsFillInfoCircleFill className="quiz-tooltip"
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
            <ol style={{textAlign: "left"}}>
                {categories.map((category, index) =>  (
                    <li className="quiz-drag-drop"
                    key={category}
                    draggable={true}
                    onDragStart={handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop(index)}>
                    <FaGripLines></FaGripLines>{category}
                </li>
                ))}
            </ol>
            <Button
                    variant={isFirst ? "nav-disabled" : "nav"}
                    disabled={isFirst}
                    onClick={() => onNext(compressAnswer(), false)}>Back</Button>
            <Button variant="nav" onClick={() => onNext(compressAnswer(), true)}>Next</Button>  
        </div>
    )
}