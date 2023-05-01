import React from "react";
import "./App.css";
import Home from "./components/Home/index";

import About from "./components/About/index";
import Project from "./components/Project/index";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
