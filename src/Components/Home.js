"use client";
import React from "react";
import "../public/IMG_3349.jpg";
import gsap from "gsap";
import "./Home.css";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".custom-scrollbar"),
      smooth: true,
    });

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Update ScrollTrigger on Locomotive Scroll update
    locoScroll.on("scroll", ScrollTrigger.update);

    // Scroller proxy for ScrollTrigger
    ScrollTrigger.scrollerProxy(".custom-scrollbar", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(".custom-scrollbar").style.transform
        ? "transform"
        : "fixed",
    });

    // Update ScrollTrigger on window resize
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      locoScroll.destroy();
    };
  }, []);
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
      <div id="smooth-scroll" className="custom-scrollbar">
        <div className="navbar" id="nav">
          <h4 id="firstH4">@anii</h4>
          <h4 id="secondH4" className="hidden">
            code by Anii
          </h4>
          <div id="menu">
            <h3>Contact</h3>
            <h3>About</h3>
            <h3>Work</h3>
          </div>
        </div>
        <div id="main">
          <div id="intro">
            <h1 id="name">
              Aniruddh Nagare <br />
            </h1>
            <p id="add">Mumbai, India</p>
            <h1 id="name">↗</h1>
          </div>
        </div>
        <div>
          <div className="ticker" id="ticker">
            <span>Anirudh nagare - Developer &amp; Designer</span>
          </div>
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
