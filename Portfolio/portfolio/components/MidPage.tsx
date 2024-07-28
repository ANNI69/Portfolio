"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const MidPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const AnimatedText = ({
    text,
    className,
  }: {
    text: string;
    className: string;
  }) => (
    <motion.span className={className} variants={lineVariants}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div
      id="screen"
      className="h-screen flex flex-col justify-center items-end mr-5 mt-10 pb-20"
    >
      <div className="">
        <Avatar>
          <AvatarImage className="" src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <motion.p
        id="text"
        className="mb-4 dark:text-white text-black text-right font-[Akira] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedText text="Building" className="block" />
        <AnimatedText text="S#it" className="block" />
        <AnimatedText text="Since" className="block" />
        <AnimatedText text="2020." className="block" />
      </motion.p>
    </div>
  );
};

export default MidPage;
