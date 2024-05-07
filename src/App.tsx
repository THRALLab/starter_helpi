import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basic from "./basic";
import Detailed from "./detailed";
import Navigation from "./navbar";
import Footer from "./Footer";
import BasicDetailedButtons from "./basicDetailedButton";
import Results from "./Results";

function App() {
	return (
		<Router>
			<>
				<Navigation />
				<BasicDetailedButtons />
				<Routes>
					<Route path="/basic" Component={Basic} />
					<Route path="/detailed" Component={Detailed} />
					<Route path="/results" Component={Results} />
				</Routes>
				<Footer />
			</>
		</Router>
	);
}
export default App;
