"use client";
import React from "react";
import "./page.css";
import Nav from "../../Components/Nav/Nav";
import styles from "../../Components/Home.module.scss";
import { AnimatePresence } from "framer-motion";

const About = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div>
        <div>
          <div>
            <div id="menu">
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={styles.button}
              >
                <div
                  className={`${styles.burger} ${
                    isActive ? styles.burgerActive : ""
                  }`}
                ></div>
              </div>
              <AnimatePresence mode="wait">
                {isActive && <Nav />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
