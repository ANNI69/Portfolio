import { GridBackgroundDemo } from "@/components/GridBg";
import BentoGridThirdDemo from "@/components/GridDemo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 z-0">
          <GridBackgroundDemo />
        </div>

        <div className="relative z-10 p-8 min-h-screen">
          <BentoGridThirdDemo />
          {/* <div className="shadow-lg rounded-lg p-6 mb-4"></div> */}
          <div className="shadow-lg rounded-lg p-6 mb-4"></div>
          <BentoGridThirdDemo />
        </div>
      </div>
    </>
  );
}
