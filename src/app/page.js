"use client";
import Home from '../app/home/page.js';
import Intro from '@/app/home/Intro.js';
import React from 'react'
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
