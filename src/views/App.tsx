import logo from "../logo.svg";
import "../App.css";
import { Footer } from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../views/Home"
import Basic from "../views/Basic_Questions"
import Detail from "../views/Detail_Questions"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>Zhicheng Liu</div>
          <div>Qingjian Xu</div>
          <div>Max De Jesus</div>
          <div>Marc Madlangbayan</div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Home/>
      
    </div>
  );
}

export default App;
