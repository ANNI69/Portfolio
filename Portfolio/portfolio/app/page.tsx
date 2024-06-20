import { GridBackgroundDemo } from "@/components/GridBg";
import BentoGridThirdDemo from "@/components/GridDemo";
import Navbar from "@/components/Navbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MidPage from "@/components/MidPage";
import { CanvasRevealEffectDemo } from "@/components/Canvas";
import AnimatedPinDemo from "@/components/3dPin";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <GridBackgroundDemo />
        </div>

        <div className="relative z-10 h-screen overflow-y-auto">
          <Navbar />
          <div>
            <MidPage />
            <CanvasRevealEffectDemo />
          </div>
        </div>
      </div>
    </>
  );
}
