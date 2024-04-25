import "./styles/App.css";
import DetailedQuestions from "./pages/DetailedQuestions";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";

import { HashRouter, Routes, Route } from "react-router-dom";
import BasicQuestions from "./pages/BasicQuestions";
import React from "react";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starter_helpi" element={<Home />} />
        <Route path="/DetailedQuestions" element={<DetailedQuestions />} />
        <Route path="/BasicQuestions" element={<BasicQuestions />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
