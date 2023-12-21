"use client";
import React from "react";
import "./page.css";
import Nav from "../../Components/Nav/Nav";
import styles from "../../Components/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const contact = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div id="main">
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
        <div id="contactbody">
          <div id="leftdiv">
            <p>Lets Start A Project Together!</p>

            <form>
              <p>
                <span>01</span> Enter Name
              </p>
              <input type="text" placeholder="Aniruddh Nagare" />
              <p>
                <span>02</span> Enter Email
              </p>
              <input type="email" placeholder="anii@gmail.com" />
              <p>
                <span>03</span> Enter Subject
              </p>
              <input type="text" placeholder="Subject" />
              <p>
                <span>04</span> Improvements
              </p>
              <input type="text" placeholder="Suggestion here.."></input>

              <div id="Circle">
                <img
                  src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                  alt="Aniruddh Nagare"
                />
              </div>
            </form>
          </div>
          <div id="rightdiv">
            <div>
              <h6>Contact Details</h6>
              <p>
                <span>Email </span>
                <a href="mailto:aniruddhnagare@4127@gmail.com">
                  aniruddhnagare4127@gmail.com
                </a>
              </p>
              <p>
                <span>Phone: </span> +91 7709 9667 38
              </p>
            </div>
            <br />
            <br />
            <div id="social">
              <h6>Socials</h6>
              <p>
                <span>Instagram: </span>
                <a href="https://www.instagram.com/aniruddhnagare/">
                  <img
                    id="social"
                    src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                    alt="Aniruddh Nagare"
                  />
                </a>
              </p>
              <p>
                <span>LinkedIn </span>
                <a href="https://www.linkedin.com/in/aniruddhnagare/">
                  <img
                    id="social"
                    src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                    alt="Aniruddh Nagare"
                  />
                </a>
              </p>
              <p>
                <span> GitHub </span>
                <a href="https://github.com/ANNI69">
                  <img
                    id="social"
                    src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                    alt="Aniruddh Nagare"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
