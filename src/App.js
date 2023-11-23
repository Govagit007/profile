import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Career from "./components/Career";

function App() {
  return (
    <div
      id="main"
      className="App w-full h-auto bg-neutral-700 text-slate-300 font-f"
    >
      <div className=" bg-neutral-800 h-12 top-0 w-full">
        <Header />
      </div>
      <div className="flex flex-col gap-10">
        <Main />
        <Career />
        <Skills id="skills" />
        <Projects id="projects" />
        <Footer id="contact" />
      </div>
    </div>
  );
}

export default App;
