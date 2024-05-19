import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Dropdown, DropdownButton, ButtonGroup, Container } from 'react-bootstrap';
import playIcon from './images/Jukebox_JE2_BE2.webp';
import stopIcon from './images/stop-song.png';
import nextIcon from './images/Music_Disc_Creator_(Music_Box)_JE1_BE1.webp';
import './Music.css';
import Subwoofer from './sounds/C418 - Subwoofer Lullaby - Minecraft Volume Alpha.mp3';
import BestMiner from './sounds/C418 - Moog City - Minecraft Volume Alpha.mp3';
import DefaultAlpha from './sounds/C418 - Minecraft - Minecraft Volume Alpha.mp3';
const tracks = [BestMiner, Subwoofer, DefaultAlpha];
const MusicPlayer = forwardRef((props, ref) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex]));

  useImperativeHandle(ref, () => ({
    stopMusic() {
      handleStop();
    },
  }));

  useEffect(() => {
    audioRef.current.src = tracks[currentTrackIndex];
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  useEffect(() => {
    const handleEnd = () => {
      handleNext();
    };
    audioRef.current.addEventListener('ended', handleEnd);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef.current.removeEventListener('ended', handleEnd);
    };
  }, []);

  return (
    <div className="music">
      <Container className="container-music">
        <DropdownButton
          as={ButtonGroup}
          id="dropdown-basic-button"
          title="MUSIC STATION"
        >
          <Dropdown.Item id="item" onClick={handlePlay}>
            Play <img src={playIcon} alt="Play" id="icon" />
          </Dropdown.Item>
          <Dropdown.Item id="item" onClick={handleStop}>
            Stop <img src={stopIcon} alt="Stop" id="icon" />
          </Dropdown.Item>
          <Dropdown.Item id="item" onClick={handleNext}>
            Next <img src={nextIcon} alt="Next" id="icon" />
          </Dropdown.Item>
        </DropdownButton>
      </Container>
    </div>
  );
});

export default MusicPlayer;
