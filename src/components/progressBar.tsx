import "./progressBar.css";

export function ProgressBar({
  numAnswered,
}: {
  numAnswered: number;
}): JSX.Element {
  return (
    <div>
      <center className="progressBox">
        <progress
          className="progressBar"
          color={"red"}
          value={numAnswered}
          max={100}
        />
        <span>{numAnswered}%</span>
      </center>
    </div>
  );
}
