import React from "react";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="website-name">Gary Fung</div>

        <NavbarLink />
      </nav>
    </div>
  );
}

export default Navbar;
