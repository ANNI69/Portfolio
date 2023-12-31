"use client";
import React from "react";
import "./page.css";
import Nav from "../../Components/Nav/Nav";
import styles from "../../Components/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const About = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div className="custom-scrollbar">
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

        <h1>/ About</h1>

        <div id="full">
          <div id="whoami">
            <h1>
              <span>01 </span>Who Am I?
            </h1>
            <h3>
              I am more than just a developer; I am a problem solver, a lifelong
              learner, and a technology enthusiast. My journey in the world of
              coding began At Highschool. Over the years, I have had the
              privilege of working on diverse projects that have honed my skills
              in Nextjs, flutter, Django, MongoDB, Mysql.
            </h3>
          </div>

          <div id="whoami">
            <h1>
              <span>02 </span>I can help You With
            </h1>
            <h3>
              I specialize in web development, offering expertise in both
              frontend and backend technologies to create seamless, end-to-end
              digital experiences. Whether you are looking for a custom software
              solution to address specific needs, a standout mobile app, or
              seamless API integrations, I have got you covered.
            </h3>
          </div>
        </div>

        <div className="logos">
          <div className="logos-slide">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              width={100}
              height={100}
            />
          </div>
          <div className="logos-slide">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              width={100}
              height={100}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              width={100}
              height={100}
            />
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
            <a target="blank" href="https://www.instagram.com/aniiyarr">
              <h6>Instagram ↗</h6>
            </a>
            <a target="blank" href="https://resolutionbelike.netlify.app/">
              <h6>Photography ↗</h6>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
