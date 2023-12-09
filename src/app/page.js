"use client";
import "./IMG_3349.jpg";
import gsap from "gsap";
import "./page.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initAnimation = () => {
      // Your GSAP animation code here
      const ticker = document.getElementById("ticker");
      const newsText = ticker.querySelector("span");

      // Calculate the duration based on the text length
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
            <h1 id="name">
              Aniruddh Nagare <br />
            </h1>
            <p id="add">Mumbai, India</p>
            <h1 id="name">↗</h1>
          </div>
        </div>
        <div>
          <div id="quote">
            <div id="sphere">
              <lord-icon
                src="https://cdn.lordicon.com/pbbsmkso.json"
                trigger="loop"
                state="loop-rotate"
                colors="primary:#D7BF8A,secondary:#D7BF8A"
                style={{ width: 90, height: 80 }}
              ></lord-icon>
              <h5> "Code By Anii"</h5>
            </div>
          </div>
          <div className="ticker" id="ticker">
            <span>Anirudh nagare - Developer &amp; Designer</span>
          </div>
        </div>
        <div id="second">
          <div id="divcenter">
            <h1>This is my portfolio</h1>
          </div>
        </div>
      </div>
    </>
  );
}
