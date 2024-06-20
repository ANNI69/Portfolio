"use client";
import React from "react";
import ThemeButton from "./ThemeButton";
import MenuButton from "../components/Menubar";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  return (
    <nav suppressHydrationWarning  className="border-gray-200 backdrop-blur dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between  p-4 ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {isDarkMode ? (
            <img
              src="https://i.ibb.co/rfZ0YHR/151.png" //this is dark mode logo
              className="h-8"
              alt="  Logo"
            />
          ) : (
            <img
              src="https://i.ibb.co/fGK0Pvm/151-1.png" //this is light mode logo
              className="h-8"
              alt="  Logo"
            />
          )}

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-[Nexa]">
            Aniruddh Nagare
          </span>
        </a>
        <div className="space-x-4 flex items-center">
          <div className="hidden md:flex items-center">
            <ThemeButton />
            <MenuButton />
          </div>
          <div className="md:hidden ">
            <Button
              onClick={toggleMenu}
              className="dark:text-white dark:bg-black white:bg-white white:text-black"
              variant="outline"
            >
              {isMenuOpen ? "X" : "|||"}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="dark:text-white dark:bg-black white:bg-white white:text-black p-4 flex items-center justify-between">
          <MenuButton />
          <ThemeButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
