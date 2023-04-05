import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProjectTop from "./components/ProjectTop";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Skills />
      <ProjectTop />
      <Footer />
    </div>
  );
}

export default App;
