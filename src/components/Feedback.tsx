import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function Complete(): JSX.Element{
    return <Fireworks autorun={{ speed:3, duration:100}} />;
}

export default Complete;