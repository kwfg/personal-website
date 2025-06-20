import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const currentPath = location.pathname;

  const handleLinkClick = () => {
    setMenuOpen(false); // when click the link , it hidden the menu
  };

  return (
    <div className="NavDiv">
      <nav className="navbar">
        <div className="website-name">
          <Link to="/" onClick={handleLinkClick} style={{ textDecoration: "none", color: "inherit" }}>
            Gary Fung
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/projects" onClick={handleLinkClick}
              className={currentPath.startsWith("/projects") ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/articles" onClick={handleLinkClick}
              className={currentPath.startsWith("/articles") ? "active" : ""}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}
              className={currentPath === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
