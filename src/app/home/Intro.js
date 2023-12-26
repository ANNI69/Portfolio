"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Intro.css"

const Intro = () => {
  const languages = ["Hola", "Salut", "नमस्ते", "你好", "こんにちは", "Hello", "안녕하세요", "Ciao", "Olá", "Hallo", "Hej", "Ahoj", "Привет", "Merhaba", "Xin chào", "สวัสดี"];

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    // Automatically switch to the next language every 2 seconds
    const interval = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 200);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro">
      <h1><span>~ </span>{languages[currentLanguageIndex]}</h1>
    </div>
  );
};

export default Intro;
