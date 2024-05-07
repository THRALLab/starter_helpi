import React from "react";

export function ButtonAudio() {
  return (
    <div className="General-Button-Audio">
      <audio controls>
        <source src="/Audio/Piggyback.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
