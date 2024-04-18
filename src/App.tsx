import "./App.css";
import "./components/Navbar.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { BasicPage } from "./pages/basicPage";
import { DetailedPage } from "./pages/detailedPage";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/basicPage" element={<BasicPage />} />
          <Route path="/detailedPage" element={<DetailedPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
