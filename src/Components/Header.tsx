import { AudioPlayer } from "./AudioPlayer";
import { LinkButton } from "./LinkButton";
import { ThemeSelect } from "./ThemeSelect";
import "../Formatting/General.css";

export function Header() {
  return (
    <div className="Header-general" id="Header-Full">
      <span className="Header-toggle">
        <ThemeSelect></ThemeSelect>
      </span>
      <span className="Header-text">The Career Lab</span>
      <span className="Header-Audio">
        <AudioPlayer></AudioPlayer>
      </span>
      <span className="Header-button">
        <LinkButton
          to="/"
          label="Home"
          classNameGive="Button-link"
        ></LinkButton>
      </span>
    </div>
  );
}
