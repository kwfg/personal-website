import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import DATA from "./data";

import CodeSolid from "./images/code.png";
function App() {
  const dataElement = DATA.map((item) => {
    return <Project {...item} />;
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Skills />
      <img src={CodeSolid} className="code-solid" />
      <p className="project-intro">Projects</p>
      <div className="project-box">{dataElement}</div>
      <Footer />
    </div>
  );
}

export default App;
