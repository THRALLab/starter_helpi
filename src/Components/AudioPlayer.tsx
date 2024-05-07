import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import ButtonClick from "../Audio/Button-Click.mp3";
import BackgroundSound from "../Audio/Mii-Channel.mp3";

const buttonSoundEffect = new Audio(ButtonClick);
const sliderSoundEffect = new Audio(ButtonClick);
const backgroundMusic = new Audio(BackgroundSound);

//Sound effect played when buttons clicked
export function playButtonClick() {
  buttonSoundEffect.play();
}
//Sound effect played when slider placed
export function playSliderSet() {
  sliderSoundEffect.play();
}

//Base music player
export function AudioPlayer() {
  let isPlaying = false;

  //Music Button for Header
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //Plays / Pauses the music
  function backgroundMusicPlayer() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }

  return (
    <div className="Header-audio-top">
      <Button className="Header-audio-button" onClick={backgroundMusicPlayer}>
        🎧
      </Button>
    </div>
  );
}
