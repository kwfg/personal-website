import React from "react";
import coverImg from "../images/hero.gif";

function Hero() {
  return (
    <div className="hero-container">
      <div className="intro">
        <p className="intro-name">Hi, my name is Gary</p>
        <p className="intro-desc">
          As an enthusiastic learner, I am eager to continuously grow my skills
          and knowledge in Information Technology. I am passionate about
          exploring new technologies and finding innovative solutions to
          challenges. With a strong work ethic and dedication to excellence, I
          am excited to contribute my talents to the industry and make a
          positive impact.
        </p>
      </div>
      <img src={coverImg} className="hero-img" />
    </div>
  );
}

export default Hero;
