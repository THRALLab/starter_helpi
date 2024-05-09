import { BasicOptions } from "./basicOption";

//interface for basic questions formatting
export interface QuestionFormatProps {
	question_number: number;
	question: string;
	options?: BasicOptions[]; //only applicable for multipleChoice question
	type: string;
}
