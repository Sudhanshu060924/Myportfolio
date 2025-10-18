import Home from "./components/Home";

import Contact from "./components/Contact";
import About from "./components/About";
import React from "react";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="scroll-smooth">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
