
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import APIsuff from "./API";
import Detailed_Question from "./detailed";
import Basic_Question from './basic';
import Home from './home';
import TopH from "./Top";
import Results from "./result";



function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <TopH />
        <Routes>
        <Route index element={<Home />} />
           <Route path="/home" Component={Home} />
           <Route path="/basic" Component={Basic_Question} />
           <Route path="/detailed" Component={Detailed_Question} />
           <Route path="/result" Component={Results} />
        </Routes>
        <APIsuff />
      </div>
    </Router>
  
  
  );
  }

export default App;