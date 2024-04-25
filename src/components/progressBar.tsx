// ProgressBar.tsx
import React from 'react';
import '../styles/progressBar.css'; // Import CSS for styling

interface ProgressBarProps {
  totalQuestions: number; // Total number of questions in the quiz
  answeredQuestions: number; // Number of questions answered by the user
}
// Define the type for ProgressBarProps
interface ProgressBarProps {
  totalQuestions: number;
  answeredQuestions: number;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ totalQuestions, answeredQuestions }) => {
  // Calculate the percentage of completion
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
