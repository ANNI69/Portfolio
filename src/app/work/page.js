"use client";
import React from "react";
// import "./page.css";
import Nav from "../../Components/Nav/Nav";
import styles from "../../Components/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import "./page.css";

const Work = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div id="main">
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
                href="https://github.com/ANNI69/Sudo-Player.git"
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
      </div>
    </>
  );
};

export default Work;
