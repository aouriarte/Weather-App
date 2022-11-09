import React from "react";

import "./About.css";
import gitHub from "../../img/github.png";
import linkedIn from "../../img/linkedln.png";
import gmail from "../../img/gmail.png";

function About() {
  return (
    <div className="card">
      <h2>About Me</h2>
      <p className="description">
        My name is Alexis Uriarte. <br /> I'm Full-Stack Web Developer <br/>
        This is my first project using React.js and a API.
      </p>
      <br />
      <h5>Contact me:</h5>
      <a href="mailto:uriarte2001alexis@gmail.com" className="links" target="_blank">
        <img
          className="ico"
          src={gmail}
          alt="Img Not Found"
          width="30"
          height="30"
        />
        Email
      </a>
      <a className="links" href="https://github.com/Auriarte20" target="_blank">
        <img
          className="ico"
          src={gitHub}
          alt="Img Not Found"
          width="30"
          height="30"
        />
        GitHub
      </a>
      <a
        className="links"
        href="https://www.linkedin.com/in/aouriarte/"
        target="_blank"
      >
        <img
          className="ico"
          src={linkedIn}
          alt="Img Not Found"
          width="30"
          height="30"
        />
        LinkedIn
      </a>
    </div>
  );
}

export default About;
