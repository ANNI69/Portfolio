import React from "react";
import "./Home.css"
const Footer = () => {
  return (
    <>
      <div id="fourth">
        <div id="footer">
          <h1>Get In Touch</h1>
          <p>
            I am available for freelance work. Connect with me via
            <a href="mailto:aniruddhnagare@4127@gmail.com"> email</a>
          </p>
        </div>
        <a href="/contact">
          <div id="Circle">
            <img
              src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
              alt="Aniruddh Nagare"
            />
          </div>
        </a>
        <div id="social">
          <a
            target="blank"
            href="https://www.linkedin.com/in/aniruddh-nagare-698787208"
          >
            <h6>LinkedIn ↗</h6>
          </a>
          <a target="blank" href="https://github.com/ANNI69">
            <h6>Github ↗</h6>
          </a>
          <a target="blank" href="https://twitter.com/AniruddhNagare">
            <h6>X(Twitter) ↗</h6>
          </a>
          <a target="blank" href="https://www.instagram.com/_exotic.anii">
            <h6>Instagram ↗</h6>
          </a>
          <a target="blank" href="https://resolutionbelike.netlify.app/">
            <h6>Photography ↗</h6>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
