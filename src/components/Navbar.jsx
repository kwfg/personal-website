import React from "react";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <div className="NavDiv">
      <nav>
        <div className="website-name">Gary Fung</div>

        <NavbarLink />
      </nav>
    </div>
  );
}

export default Navbar;
