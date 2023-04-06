import React from "react";
import Github from "../images/github.png";

function Extra() {
  return (
    <div className="fixed-right">
      <a href="https://github.com/gakary" target="_blank">
        <img src={Github} id="fixed-image"></img>
      </a>
    </div>
  );
}
export default Extra;
