import Navbar from "@/components/Navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

const page = () => {
  return (
    <>
      <div suppressHydrationWarning className="h-screen overflow-hidden">
        <Navbar />
        {/* <AnimatedPinDemo /> */}
        <div className="flex flex-col items-center justify-center mt-20">
          <PinContainer
            title="/doot.vercel.app"
            href="/doot.vercel.app"
          >
            <div
              suppressHydrationWarning
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
            >
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Doot
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  News App Made With Flutter And Firebase
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
};

export default page;
