import React from "react";
import Github from "../images/github.png";

function Footer() {
  return (
    <div className="footer-conitainer">
      <div className="first">
        <p className="footer-text">Gary Fung © 2023</p>
        <a href="https://github.com/gakary" target="_blank">
          <img className="footer-github" src={Github} />
        </a>
      </div>
    </div>
  );
}
export default Footer;
