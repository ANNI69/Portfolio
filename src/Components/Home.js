"use client";
import React from "react";
import "../public/IMG_3349.jpg";
import gsap from "gsap";
import "./Home.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive Scroll CSS
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
  return (
    <>
      <div className="custom-scrollbar">
        <div className="navbar" id="nav">
          <h4 id="firstH4">@anii</h4>
          <h4 id="secondH4" className="hidden">
            code by Anii
          </h4>
          <div id="menu">
            <h3>Menu</h3>
          </div>
        </div>
        <div id="main">
          <div id="intro">
            <h1 id="name">Aniruddh Nagare</h1>
            <p id="add">Mumbai, India</p>
            <h1 id="name">↗</h1>
          </div>
        </div>
        <div className="ticker" id="ticker">
          <span>Anirudh nagare - Developer &amp; Designer</span>
        </div>
        <div id="second">
          <div id="divcenter">
            <h1>This is my portfolio</h1>
          </div>
        </div>
        <div id="third">
          <div id="divcenter">
            <h1>This is my portfolio 2 </h1>
          </div>
        </div>
        <div id="fourth">
          <div id="divcenter">
            <h1>This is my portfolio 3 </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
