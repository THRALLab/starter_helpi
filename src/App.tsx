import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basic from "./basic";
import Detailed from "./detailed";
import Navigation from "./navbar";
import Footer from "./Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/basic" Component={Basic} />
					<Route path="/detailed" Component={Detailed} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
export default App;
