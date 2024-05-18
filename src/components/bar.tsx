import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
    value: number; // The current value of the progress bar
    maxValue: number; // The maximum value of the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue }) => {
    const [progress, setProgress] = useState(0); // State to hold the progress value

    useEffect(() => {
        const calculateProgress = () => {
            const calculatedProgress = (value / maxValue) * 100; // Calculate the progress percentage
            setProgress(calculatedProgress); // Update the progress state
        };

        calculateProgress(); // Call the calculateProgress function when the value or maxValue changes
    }, [value, maxValue]);

    return (
        <div>
            
            <div style={{backgroundColor: '#f0f0f0', height: '20px', marginBottom: '-20px'}}></div>
            <div style={{width: `${progress}%`, height: '20px', backgroundColor: 'rgb(12, 128, 173)'}}></div>
        </div>
    );
};

export default ProgressBar;