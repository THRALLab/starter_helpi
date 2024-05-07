import "../styles/App.css";
import NavigationBar from "../components/NavigationBar";

import HeroSection from "../components/HeroSection";
import ChooseYourPathSection from "../components/ChooseYourPathSection";
import CustomFooter from "../components/CustomFooter";
//import { HashRouter, Routes, Route } from 'react-router-dom';

export function Home() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div className="content">
        <HeroSection sectionToScroll="choose-path-section" />
        <ChooseYourPathSection />
      </div>
      <CustomFooter />
    </div>
  );
}

export default Home;
