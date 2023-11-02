import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProjectTop from "./components/ProjectTop";
import Extra from "./components/Extra";
//import Loading from "./components/Loading";

function App() {
  return (
    <div className="container">
      {/*<Loading />*/}
      <Navbar />
      <Hero />
      <Skills />
      <ProjectTop />
      <Footer />
      <Extra />
    </div>
  );
}

export default App;
