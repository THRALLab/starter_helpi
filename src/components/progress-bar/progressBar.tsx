import React from 'react';

interface ProgressBarProps {
    progress: number;
    max: number;
    color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, max, color = "#2c6fbb" }) => {
    const percentage = (progress / max) * 100; // Calculate progress as a percentage
  
    return (
      <div style={{ width: '100%', height: '20px', background: '#ddd', borderRadius: '10px' }}>
        <div
          style={{
            width: `${percentage}%`, // Width based on the calculated percentage
            height: '100%',
            background: color,       // Use the provided or default color
            borderRadius: '10px',    // Smooth edges
            transition: 'width 0.3s', // Smooth transition for progress changes
          }}
        />
      </div>
    );
  };
  
  export default ProgressBar;