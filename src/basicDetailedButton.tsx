import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./basicDetailedButton.css"

function BasicDetailedButtons() {
    return (
    <div>
        <div>
            <Link to="/basic">
                <button>Basic Quiz</button>
            </Link>
        </div>
        <p>
            This is a 10 - 15 minute quiz aimed to gauge
            interests and skills in order to provide suggestions
            and information on potential careers.

        </p>
        <div>
            <Link to="/detailed">
                <div><button>Detailed Quiz</button></div>
            </Link>
        </div>
        <p>
            This is a 30 - 35 minute quiz aimed to
            understand your goals and passions in
            order to provide potential careers.

        </p>
   </div>     

)}
export default BasicDetailedButtons;