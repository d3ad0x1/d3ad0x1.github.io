import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Languages from './components/Languages';
import Technologies from './components/Technologies';
import ToolsEnvironment from './components/ToolsEnvironment';
import ScrollArrow from "./components/ScrollArrow";

function App() {
  return (
    <div className="bg-background text-textGray font-sans">
      <Navbar />
      <Hero />
      <Languages />
      <Technologies />
      <ToolsEnvironment />
      <Projects />
      <Contact />
      <Footer />
      <ScrollArrow />
    </div>
  );
}

export default App;