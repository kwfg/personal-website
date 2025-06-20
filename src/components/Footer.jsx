import React from "react";
import Github from "../images/github.png";
  const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer-conitainer">
      <div className="first">
        <p className="footer-text">Copyright © {currentYear} Gary Fung. All rights reserved.</p>
        <a href="https://github.com/kwfg" target="_blank">
          <img className="footer-github" src={Github} />
        </a>
      </div>
    </div>
  );
}
export default Footer;
