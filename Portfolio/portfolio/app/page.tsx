import { GridBackgroundDemo } from "@/components/GridBg";
import BentoGridThirdDemo from "@/components/GridDemo";
import Navbar from "@/components/Navbar";
import MultiStepLoaderDemo from "@/components/StepLoader";
import ThemeButton from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const testimonials = [
    {
      quote:
        "The MERN stack lets me move seamlessly from crafting the frontend to architecting the backend. It's a full-stack developer's dream.",
      name: "John Doe",
      title: "Full Stack Engineer, TechGiant",
    },
    {
      quote:
        "Flutter is a game-changer for cross-platform development. Its declarative UI, hot reload, and rich widget library make building beautiful and performant apps a breeze.",
      name: "Sarah Johnson",
      title: "Flutter Developer, InnovationLabs",
    },
    {
      quote:
        "Python's clarity and readability are a breath of fresh air. It lets me focus on solving problems, not wrestling with syntax.",
      name: "Aisha Khan",
      title: "Data Scientist, BigData Inc.",
    },
    {
      quote:
        "MERN development is a symphony of technologies – the elegance of React, the robustness of Node.js, the expressiveness of Express, and the power of MongoDB come together in perfect harmony.",
      name: "Jane Smith",
      title: "Senior Web Developer, Acme Corp",
    },
    {
      quote:
        "With Flutter, I can write a single codebase and deliver stunning experiences on both iOS and Android – talk about efficiency!",
      name: "Michael Lee",
      title: "Mobile App Architect, StartupX",
    },
    {
      quote:
        "The Python ecosystem is incredible – a rich library for every task, from web development to machine learning. It's truly versatile.",
      name: "David Patel",
      title: "Python Engineer, TechStart",
    },
    // ... you can add more if you'd like
  ];
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 z-0">
          <GridBackgroundDemo />
        </div>

        <Navbar />
        <div className="relative z-10 p-8">
          {/* <ThemeButton /> */}
          <BentoGridThirdDemo />
          {/* <div className="shadow-lg rounded-lg p-6 mb-4"></div> */}
          {/* <BentoGridThirdDemo /> */}
        </div>
        <div className="ml-0 mr-0 mt-4 mb-4">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            className="dark:text-white dark:bg-black white:bg-white white:text-black"
          />
        </div>
      </div>
    </>
  );
}
