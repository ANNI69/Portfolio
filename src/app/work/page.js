"use client";
import React from "react";
// import "./page.css";
import Nav from "../../Components/Nav/Nav";
import styles from "../../Components/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./page.css";


const Work = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div> 
        <div> 
          <div>
            <div id="menu">
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={styles.button}
              >
                <div
                  className={`${styles.burger} ${
                    isActive ? styles.burgerActive : ""
                  }`}
                ></div>
              </div>
              <AnimatePresence mode="wait">
                {isActive && <Nav />}
              </AnimatePresence>
            </div>
          </div>
        </div>

          <h1 id="theh1">/Work</h1>
        <div id="textbox">
          <div id="text">
            <h1> This is Some Of My Work</h1>
          </div>
          <div id="third">
            <div id="Firstprj">
              <a target="blank" href="https://github.com/ANNI69/e-commerce.git">
                <h1><span>01 </span>E-Commerce App </h1>
                <p>Mern Stack - Payload CMS</p>
              </a>
            </div>
            <div id="Firstprj">
              <a target="blank" href="https://github.com/ANNI69/e-commerce.git">
                <h1><span>02 </span>News App - Flutter</h1>
                <p>REST APi - Google Firebase</p>
              </a>
            </div>
            <div id="Firstprj">
              <a target="blank" href="https://github.com/ANNI69/WeatherApp.git">
                <h1><span>03 </span>Weather App </h1>
                <p>REST APi - ReactJs</p>
              </a>
            </div>
            <div id="Firstprj">
              <a
                target="blank"
                href="https://github.com/ANNI69/SyncBeat-Music-Player.git"
              >
                <h1><span>04 </span>Music Player - Flutter &amp; NextJs</h1>
                <p>REST APi - Flutter, NextJs & MongoDB </p>
              </a>
            </div>
            <div id="Firstprj">
              <a target="blank" href="https://github.com/ANNI69">
                <h1>More Work</h1>
                <p>........</p>
              </a>
            </div>
          </div>
        </div>
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
              <Image
                width={100}
                height={100}
                src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                alt="Aniruddh Nagare"
              />
            </div>
          </a>
          <div id="socials">
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
      </div>
    </>
  );
};

export default Work;
