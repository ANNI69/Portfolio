"use client";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MidPage = () => {
  useEffect(() => {
    const textElements = ["#making", "#ss", "#year"];

    // Initial drop from above animation
    gsap.fromTo(
      textElements,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.3, // Stagger the animation for each element
        ease: "power2.inOut",
      }
    );

    // Scroll animations with fade-in and fade-out on scroll trigger
    textElements.forEach((elementId) => {
      gsap.to(elementId, {
        scrollTrigger: {
          trigger: elementId,
          start: "top 80%", // Start animation when element is 80% from the top of the viewport
          end: "bottom 20%", // End animation when element is 20% from the bottom of the viewport
          scrub: true, // Smooth animation as user scrolls
        },
        opacity: 0, // Fade out on scroll trigger
        y: -100, // Move element upwards on scroll
        duration: 2,
        ease: "power3.out", // Adjust easing for smooth fade-out
      });
    });
  }, []);

  return (
    <div
      id="screen"
      className="h-screen flex flex-col justify-center items-end mr-5 mt-10"
    >
      <p
        id="text"
        className="dark:text-white text-black text-right font-[Akira] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight"
      >
        <span id="making" className="block">
          Building
        </span>
        <span id="ss" className="block">
          S#it Since
        </span>
        <span id="year" className="block">
          2020.
        </span>
      </p>
    </div>
  );
};

export default MidPage;
