"use client";
import React from "react";
import "./page.css";
import Nav from "../../Components/Nav/Nav";
import styles from "../../Components/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div className="custom-scrollbar">
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
          <h1 id="theh1">/ Contact</h1>
          <div id="contactbody">
            <div id="leftdiv">
              <p>Lets Start A Project Together!</p>
              <form action="">
                <p>
                  <span>01</span> Enter Name
                </p>
                <input type="text" placeholder="Eg. Aniruddh Nagare" />
                <p>
                  <span>02</span> Enter Email
                </p>
                <input type="email" placeholder="Eg. anii@gmail.com" />
                <p>
                  <span>03</span> Enter Number
                </p>
                <input type="text" placeholder="Eg. 77 4578 2390" />
                <p>
                  <span>04</span> Subject
                </p>
                <input type="text" placeholder="Eg. Subject"></input>

                <div id="Circle">
                  <button type="submit">
                    <image
                      src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                      alt="Aniruddh Nagare"
                    />
                  </button>
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
                  <span>Instagram </span>
                  <a href="https://www.instagram.com/aniruddhnagare/">
                    <image
                      id="social"
                      src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                      alt="Aniruddh Nagare"
                    />
                  </a>
                </p>
                <p>
                  <span>LinkedIn </span>
                  <a href="https://www.linkedin.com/in/aniruddhnagare/">
                    <image
                      id="social"
                      src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                      alt="Aniruddh Nagare"
                    />
                  </a>
                </p>
                <p>
                  <span> GitHub </span>
                  <a href="https://github.com/ANNI69">
                    <image
                      id="social"
                      src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                      alt="Aniruddh Nagare"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div id="fourth">
            <div id="footer">
              <h1>Get In Touch</h1>
              <p>
                I am available for freelance work. Connect with me via
                <a href="mailto:aniruddhnagare@4127@gmail.com">
                  {" "}
                  <u>email</u>
                </a>
              </p>
            </div>
            <a href="/contact">
              <div id="Circle">
                <Image
                  width={100}
                  height={100}
                  src="https://i.ibb.co/XZJxHHk/diagonal-arrow-svgrepo-com-2.png"
                  alt="Aniruddh Nagare"
                />
              </div>
            </a>
            <div id="socials">
              <a
                target="blank"
                href="https://www.linkedin.com/in/aniruddh-nagare-698787208"
              >
                <h6>LinkedIn ↗</h6>
              </a>
              <a target="blank" href="https://github.com/ANNI69">
                <h6>Github ↗</h6>
              </a>
              <a target="blank" href="https://twitter.com/AniruddhNagare">
                <h6>X(Twitter) ↗</h6>
              </a>
              <a target="blank" href="https://www.instagram.com/_exotic.anii">
                <h6>Instagram ↗</h6>
              </a>
              <a target="blank" href="https://resolutionbelike.netlify.app/">
                <h6>Photography ↗</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
