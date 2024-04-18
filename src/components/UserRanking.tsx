import { useState } from "react";
import { Button } from 'react-bootstrap';

export function UserRanking({
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
    const [categories, setCategories] = useState<string[]>(options);
    
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

    return (
        <div>
            <h3
                onMouseEnter={() => setTooltip(`${description}`)}
                onMouseLeave={() => setTooltip("")}
            >{question}</h3>
            {tooltip && (
                <div style={{
                    position: "relative", 
                    border: "1px solid black",
                    padding: "10px", 
                    backgroundColor: "white", 
                    pointerEvents: "none" 
                }}>
                    {tooltip}
                </div>
            )}
            <ol style={{textAlign: "left"}}>
                {categories.map((category) => (
                    <li key={category}>
                        <Button
                            key={`${category}⬆️`}
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => pushUp(category)}
                        >⬆️</Button>
                        {' '}
                        <Button
                            key={`${category}⬇️`}
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => pushDown(category)}
                        >⬇️</Button>
                        {' '}
                        {category}
                    </li>
                ))}
            </ol>
            <Button onClick={() => onNext(compressAnswer())}></Button>  
        </div>
    )
}