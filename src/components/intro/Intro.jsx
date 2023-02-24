import React from "react";
import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="dsd" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Talha YUMNİ</h1>
          <h3>
            Freelance <span>Frontend Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon />
        </a>
      </div>
    </div>
  );
};

export default Intro;
