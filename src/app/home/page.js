"use client";
import React from "react";
import gsap from "gsap";
import "./page.css";
import { useEffect } from "react";
import styles from "./Home.module.scss";
import { AnimatePresence } from "framer-motion";
import Nav from "../../Components/Nav/Nav";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    const initAnimation = () => {
      const intro = document.getElementById("intro");
      const name = document.getElementById("name");
      const add = document.getElementById("add");
      // GSAP Animation
      gsap.fromTo(
        intro,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, delay: 1 }
      );
      // GSAP Animation
      gsap.fromTo(
        add,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, delay: 1 }
      );

      const sphere = document.getElementById("quote");
      // GSAP Animation
      gsap.fromTo(
        sphere,
        { opacity: 1, x: 1000 },
        { opacity: 1, x: 0, duration: 2, delay: 1 }
      );

      // Your GSAP animation code here
      const ticker = document.getElementById("ticker");
      const newsText = ticker.querySelector("span");
      const duration = newsText.offsetWidth / 60; // Adjust the divisor for different speeds
      // GSAP Animation
      gsap.fromTo(
        newsText,
        { x: window.innerWidth },
        {
          x: -newsText.offsetWidth,
          duration: duration,
          repeat: -1,
          ease: "linear",
        }
      );
    };

    // Check if the DOM is fully loaded before initializing the animation
    if (document.readyState === "complete") {
      initAnimation();
    } else {
      window.addEventListener("load", initAnimation);
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("load", initAnimation);
    };
  }, []);
  const path = "../public/Arrow.png";
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div className="custom-scrollbar">
        <div className="navbar" id="nav">
          <h4 id="firstH4">/Home</h4>
          <h4 id="secondH4" className="hidden">
            code by Anii
          </h4>
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
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
          </div>
        </div>
        <div id="main">
          <div id="intro">
            <h1 id="name">Aniruddh Nagare</h1>
            <p id="add">Mumbai, India</p>
            <div id="aCircle">
              <Image
                width={100}
                height={100}
                src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                alt="Aniruddh Nagare"
              />
            </div>
          </div>
        </div>
        <div className="ticker" id="ticker">
          <span>Anirudh nagare - Developer &amp; Freelancer</span>
        </div>
        <div id="second">
          <div id="1sthalf">
            {/* <ScrollText/> */}
            <div id="leftText">
              <h1>
                I am a full stack developer and designer. I have been working in
                this field for more than 2 years. I have worked on various
                projects and have a good knowledge of various technologies.
              </h1>
            </div>
            <div id="About">
              <h2>About</h2>
            </div>
            <div id="FCircle">
              <a href="/about">
                <Image
                  width={100}
                  height={100}
                  src="https://i.ibb.co/qxG8F77/diagonal-arrow-svgrepo-com-4.png"
                  alt="Aniruddh Nagare"
                />
              </a>
            </div>
          </div>
        </div>
        <div id="third">
          <div id="Firstprj">
            <a target="blank" href="https://github.com/ANNI69/e-commerce.git">
              <h1>E-Commerce App </h1>
              <p>Mern Stack - Payload CMS</p>
            </a>
          </div>
          <div id="Firstprj">
            <a target="blank" href="https://github.com/ANNI69/e-commerce.git">
              <h1>News App - Flutter</h1>
              <p>REST APi - Google Firebase</p>
            </a>
          </div>
          <div id="Firstprj">
            <a target="blank" href="https://github.com/ANNI69/WeatherApp.git">
              <h1>Weather App </h1>
              <p>REST APi - ReactJs</p>
            </a>
          </div>
          <div id="Firstprj">
            <a target="blank" href="https://github.com/ANNI69/Sudo-Player.git">
              <h1>Music Player - Flutter &amp; NextJs</h1>
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
      </div>
    </>
  );
};

export default Home;
