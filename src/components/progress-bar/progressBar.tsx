import React from 'react';

interface ProgressBarProps {
  progress: number;
  max: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, max, color = '#2c6fbb' }) => {
  const percentage = (progress / max) * 100; // Calculate progress as a percentage

  return (
    <div style={{ width: '100%', height: '40px', position: 'relative', overflow: 'hidden' }}>
      {/* Base background */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#ddd',
          borderRadius: '20px',
          position: 'absolute',
        }}
      />
      {/* Wave effect */}
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '20px',
          background: color,
          transform: `translateX(-${100 - percentage}%)`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Wave animation */}
        <div
          style={{
            width: '200%',
            height: '100%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            animation: 'wave 2s linear infinite',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
