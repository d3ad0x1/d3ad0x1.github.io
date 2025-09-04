import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Languages from './components/Languages';
import Technologies from './components/Technologies';
import ToolsEnvironment from './components/ToolsEnvironment';

function App() {
  return (
    <div className="bg-background text-textGray font-sans">
      <Navbar />
      <Hero />
      <About />
      <Languages />
      <Technologies />
      <ToolsEnvironment />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;