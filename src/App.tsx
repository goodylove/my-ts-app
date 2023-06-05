import React from "react";
import "./App.css";
import Home from "./components/Home/index";

import About from "./components/About/index";
import Project from "./components/Project/index";
import Skill from "./components/Skill/index";
import Contact from "./components/Contact/index";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
