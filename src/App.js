import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import SecurityStack from "./components/SecurityStack";
import SecurityProfiles from "./components/SecurityProfiles";
import TerminalSection from "./components/TerminalSection";
import TimelineSection from "./components/TimelineSection";
import Projects from "./components/Projects";
import Writeups from "./components/Writeups";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import WriteupPage from "./pages/WriteupPage";

function HomePage() {
  return (
    <>
      <Hero />
      <SecurityStack />
      <SecurityProfiles />
      <TerminalSection />
      <TimelineSection />
      <Projects />
      <Writeups />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="relative bg-[#050505] text-white overflow-hidden">

      {/* Glow */}
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="fixed bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/writeups/:slug"
            element={<WriteupPage />}
          />

        </Routes>

      </div>
    </div>
  );
}