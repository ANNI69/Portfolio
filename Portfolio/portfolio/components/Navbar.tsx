"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import ThemeButton from "./ThemeButton";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className="border-gray-200 backdrop-blur dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between  p-4 ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.ibb.co/rfZ0YHR/151.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-[Nexa]">
            Aniruddh Nagare
          </span>
        </a>
        <div className="space-x-4 flex items-center">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
