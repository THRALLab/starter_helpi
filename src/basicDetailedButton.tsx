import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./basicDetailedButton.css"
import {useState} from "react";


function BasicDetailedButtons() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <div>
           {!clicked && (<div>
                <Link to="/basic">
                    <button onClick={handleClick}>Basic Quiz</button>
                </Link>
            </div>)}
            {!clicked && (<p>
            <p>This is a 10 - 15 minute quiz aimed to gauge</p>
            <p>interests and skills in order to provide suggestions</p>
            <p>and information on potential careers.</p></p>)}

            {!clicked && (<div>
                <Link to="/detailed">
                    <div><button>Detailed Quiz</button></div>
                </Link>
            </div>)}
            {!clicked && (<p>
                <p>This is a 30 - 35 minute quiz aimed to</p>
                <p>understand your goals and passions in</p>
                <p>order to provide potential careers.</p>
            </p>)}
        </div>  
)}
export default BasicDetailedButtons;