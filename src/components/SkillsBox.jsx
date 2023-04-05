import React from "react";

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

function Skills() {
  return (
    <div className="skill-box">
      <div className="box">
        <img src={html} />
      </div>
      <div className="box">
        <img src={css} />
      </div>
      <div className="box">
        <img src={javascript} />
      </div>
      <div className="box">
        <img src={php} />
      </div>
      <div className="box">
        <img src={mysql} />
      </div>
      <div className="box">
        <img src={react} />
      </div>
      <div className="box">
        <img src={node} />
      </div>
      <div className="box">
        <img src={java} />
      </div>
      <div className="box">
        <img src={github} />
      </div>
      <div className="box">
        <img src={figma} />
      </div>
    </div>
  );
}

export default Skills;
