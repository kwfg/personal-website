import React from "react";
import Electronics from "../images/ele.png";
import html from "../images/icon/html.png";
import css from "../images/icon/css.png";
import javascript from "../images/icon/js.png";
import php from "../images/icon/php.png";
import mysql from "../images/icon/mysql.png";
import react from "../images/icon/react.png";
import java from "../images/icon/java.png";
import figma from "../images/icon/figma.png";
import node from "../images/icon/node.png";
import github from "../images/github.png";

import SkillsIcon from "./SkillsIcon";
import SkillsBox from "./SkillsBox";

function Skills() {
  return (
    <div className="skill-container">
      <SkillsIcon />
      <SkillsBox />
    </div>
  );
}

export default Skills;
