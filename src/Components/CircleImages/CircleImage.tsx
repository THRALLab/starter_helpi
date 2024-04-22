import React, {useState} from 'react';
import './CircleImage.css';

export const CircleImage = ({ imageUrl} : { imageUrl : string }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`circle ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt="Profile Pic"/>
    </div>
  );
}

export default CircleImage;