export interface question {
    name: string;
    questionNumber: number;
    type: "check" | "short" | "radio";
    options: string[];
    answer: number;
    body: string;
}

export interface navigation {
    max: number;
    current: number;
}

export function generatePlaceholders(type: string): question { 
    return {name:"Lorem ipsum dolor sit amet", questionNumber:1, type: type, options:["one", "two", "three"], answer: -1, body:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."};
}

export const placeholders: question[] = [
    generatePlaceholders("check"),
    generatePlaceholders("radio"),
    generatePlaceholders("short"),
    generatePlaceholders("check"),
    generatePlaceholders("radio"),
    generatePlaceholders("radio"),
    generatePlaceholders("radio")];