import React, { useState, useEffect } from "react";
import Github from "../images/github-ani.gif";
import ArrowUp from "../images/scroll.png";

function Extra() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300); // over 300px display the arrow go to top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed-right">
      <a href="https://github.com/kwfg" target="_blank">
        <img src={Github} id="fixed-image" />
      </a>
      {showTop && (
        <button className="scroll-to-top" onClick={scrollToTop} title="Back to Top">
          <img src={ArrowUp} alt="Scroll to Top" className="scroll-icon" />
        </button>
      )}
    </div>
  );
}

export default Extra;
