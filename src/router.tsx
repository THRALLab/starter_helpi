import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import App from "./App";
import Detailed from "./DetailedQuestions";
import Basic from "./BasicQuestions";
 



function Routerer() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/BasicQuestions"
                        element={<Basic />} />
                    <Route path="/DetailedQuestions"
                        element={<Detailed />} />
                    <Route path="/"
                        element={<App />} />
                </Routes>
            </Router>
        </div>
    );
}
 
export default Routerer;