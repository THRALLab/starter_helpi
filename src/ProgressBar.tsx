import React, { useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './ProgressBar.css';
import catSleep from './images/CISC-progress-cat-sleep.png';
import catWakeUp from './images/CISC-progress-cat-wakeUp.png';
import catYawn from './images/CISC-progress-cat-yawn.png';
import catWalk from './images/CISC-progress-cat-walking.gif';
import catFight from './images/CISC-progress-cat-fight.gif';
import catEat from './images/CISC-progress-cat-eat.gif';
import mouse from './images/CISC-progress-mouse-eat.gif';


interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress}) => {
  const [currentProgress, setCurrentProgress] = useState(progress);
  const showMouse = currentProgress < 58; // Show mouse when progress is less than 84%
  let imageSrc: string;

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  if (currentProgress === 0) {
    imageSrc = catSleep;
  } else if (currentProgress >= 1 && currentProgress <= 14) {
    imageSrc = catWakeUp;
  } else if (currentProgress >= 15 && currentProgress <= 28) {
    imageSrc = catYawn;
  } else if (currentProgress >= 29 && currentProgress <= 57) {
    imageSrc = catWalk;
  } else if (currentProgress >= 58 && currentProgress <= 71) {
    imageSrc = catFight;
  } else if (currentProgress >= 72 && currentProgress <= 100) {
    imageSrc = catEat;
  } else {
    imageSrc = catEat;
  }  

  const calculateCatPosition = () => {
    if (currentProgress >= 0 && currentProgress <= 16) {
      return 0;
    } else if (currentProgress > 16 && currentProgress <= 30) {
      return 25;
    } else if (currentProgress > 30 && currentProgress <= 41) {
      return 45;
    } else if (currentProgress > 41 && currentProgress <= 50) {
      return 60;
    } else if (currentProgress > 50 && currentProgress <= 57) {
      return 75;
    }
    else {
      return 90;
    }
  };


  return (
    <div className="progress-container">
            <img
                src={imageSrc}
                alt="Progress-cat"
                className="progress-asset-cat"
                style={{ marginLeft: `${calculateCatPosition()}%`, transition: 'margin-left 0.5s ease-in-out'}}
            ></img>

            {showMouse && (
                <img
                    src={mouse}
                    alt="Mouse"
                    className="progress-asset-mouse"
                />
            )}

        <div className="progress-bar-com">
            <div 
                className="progress-bar-active-comp" 
                role="progressbar" 
                aria-valuenow= {currentProgress}
                aria-valuemin= {0} 
                aria-valuemax= {101} 
                style={{ width: `${currentProgress}%` }}
            >
            </div>
        </div>
    </div>
  );
};

export default ProgressBar;
            
