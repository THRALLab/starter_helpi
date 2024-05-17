/* Imports */
import React, { useEffect, useState } from 'react';
import Timer from './Timer';

interface TimerPartsProps {
  updateCount?: (count: number) => void;
}



/* Consts and Returns for Timer Logic and Functionality */
const TimerParts: React.FC<TimerPartsProps> = ({ updateCount }) => {
  const [timer] = useState<Timer>(new Timer());
  const [timerRunning, setTimerRunning] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const updateTimer = () => {
      const newCount = timer.getCount();
      setCount(newCount);
      if (updateCount) {
        updateCount(newCount);
      }
    };

    if (timerRunning) {
      timer.start();
      interval = setInterval(updateTimer, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, timerRunning, updateCount]);

  const toggleTimer = () => {
    if (timerRunning) {
      timer.stop();
    } else {
      timer.start();
    }
    setTimerRunning(!timerRunning);
  };

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">{formatTime(count)}</div>
      <button className="timer-start-stop" onClick={toggleTimer}>{timerRunning ? 'Stop' : 'Start'}</button>
    </div>
  );
};

export default TimerParts;