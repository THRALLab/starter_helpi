import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basic from "./basic";
import Detailed from "./detailed";
import Navigation from "./navbar";
import Footer from "./Footer";
import BasicDetailedButtons from "./basicDetailedButton";
import Results from "./Results";
import Home from "./Home";

function App() {
	return (
		<Router basename="/starter_helpi">
			<>
				<Navigation />
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/basic" Component={Basic} />
					<Route path="/detailed" Component={Detailed} />
					<Route path="/basicDetailedButton" Component={BasicDetailedButtons} />
					<Route path="/results" Component={Results} />
				</Routes>
				<Footer />
			</>
		</Router>
	);
}
export default App;
