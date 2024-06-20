"use client";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MidPage = () => {
  const ref = useGSAP();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = [
      // Target each text element separately for individual control
      "#making",
      "#ss",
      "#year",
    ];

    // Initial drop from above animation (optional)
    gsap.fromTo(
      textElements,
      { y: -200, opacity: 1 },
      {
      y: 0,
      opacity: 1,
      duration: 3, // Increase the duration to make the animation slower
      ease: "power2.inOut",
      }
    );

    // Scroll animations with fade-in and fade-out on scroll trigger
    textElements.forEach((elementId) => {
      gsap.to(elementId, {
        scrollTrigger: {
          trigger: elementId,
          start: "top top", // Fade in when element is fully visible
          end: "bottom 70%", // Fade out when 20% below viewport
          scrub: true, // Animate smoothly as user scrolls
          toggleActions: "play reverse play reverse", // Reset animation on scroll back
        },
        opacity: 1, // Fade out on scroll trigger
        y: -100, // Move element upwards on scroll
        duration: 2,
        ease: "power3.out", // Adjust easing for smooth fade-out
      });
    });
  }, []);

  return (
    <div id="screen" className="h-screen flex flex-col mr-5 mt-10">
      <p
        id="text"
        className="dark:text-white white:text-black text-9xl text-right font-[Akira]">
        <span id="making">Building</span>{" "}
        <span id="ss">
          {" "}
          <br /> S#it Since
        </span>{" "}
        <span id="year">
          <br />
          2020 .
        </span>
      </p>
    </div>
  );
};

export default MidPage;
