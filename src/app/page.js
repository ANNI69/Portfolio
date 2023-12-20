"use client";
import Home from '@/Components/Home';
import Intro from '@/Components/Intro';
import React from 'react'
import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the Intro component after 3 seconds
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <>
      {showIntro && <Intro />}
      {!showIntro && <Home />}
    </>
  );
};


export default Page
