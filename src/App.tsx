import React from "react";
import Home from "./components/Home/index";
import { AiOutlineArrowUp } from "react-icons/ai";
import About from "./components/About/index";
import Project from "./components/Project/index";
import Skill from "./components/Skill/index";
import Contact from "./components/Contact/index";
import "./App.css";

function App() {
  return (
    <div className="App relative">
      <div className="fixed bottom-[4rem] md:right-10 w-10 h-10 rounded-full bg-white text-blue-400 flex justify-center items-center cursor-pointer right-4">
        <a href="#top">
          <AiOutlineArrowUp
            className="text-blue text-[30px] arrow
        "
          />
        </a>
      </div>
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
