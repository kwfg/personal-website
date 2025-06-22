import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
//import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProjectTop from "./components/ProjectTop";
import Extra from "./components/Extra";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ArticlePost from "./pages/ArticlePost";
import Articles from "./article/Articles";
import LatestArticles from "./article/LatestArticles";


//import Loading from "./components/Loading";
import ScrollToTop from "./helper/ScrollToTop";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//import './css/markdown.css';






function App() {
  const location = useLocation();

  useEffect(() => {
  const path = location.pathname;

  if (path === "/") {
    document.title = "Home | Gary Fung";
  } else if (path.startsWith("/projects/")) {
    document.title = "Project Details | Gary Fung";
  } else if (path === "/projects") {
    document.title = "Projects | Gary Fung";
  } else if (path === "/about") {
    document.title = "About | Gary Fung";
  } else if (path.startsWith("/articles/")) {
    document.title = "Article Details | Gary Fung";
  } else if (path === '/articles'){
    document.title = "Articles | Gary Fung"
  }else {
    document.title = "404 | Gary Fung";
  }
}, [location]);

  return (
    <div className="app-wrapper"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <main style={{ flex: 1 }}>
    <div className="container">
      <ScrollToTop />
      <Navbar />
      {/*<Loading />*/}
      <Routes>
        {/* home page*/}
        <Route path="/" element={
          <>
            <Hero />
            <LatestArticles />
            {/*<Skills />*/}
            <ProjectTop />
            
          </>
        } />
        <Route path="/articles/:slug" element={<ArticlePost />} />
        
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />


        

        {/* （Dynamic project routes） */}
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      
    </div>
    </main>
     <Extra />
    <Footer />
    </div>
  );
}

export default App;
