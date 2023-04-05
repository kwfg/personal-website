import React from "react";
import Electronics from "../images/ele.png";

function SkillsIcon() {
  return (
    <div>
      <img src={Electronics} className="ele-img" />
      <p className="skill-desc">SKILLS</p>
    </div>
  );
}

export default SkillsIcon;
