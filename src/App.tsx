import "./App.css";
// importing components from react-router-dom package
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
// import Home component
import Home from "./Components/Home";
import DetailedQuestions from "./Components/DetailedQuestions";
import BasicQuestions from "./Components/BasicQuestions";
import About from "./Components/About"
 
function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        path="/About"
                        element={<About />}
                    />

                    
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/BasicQuestions"
                        element={<BasicQuestions />}
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/DetailedQuestions"
                        element={<DetailedQuestions />}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
    );
}
 
export default App;

