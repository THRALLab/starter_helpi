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
      <Home/>
    </div>
  );
}

export default App;
