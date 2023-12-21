import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-text',
        start: 'top center+=100',
        end: 'bottom center',
        scrub: true,
      },
    });

    tl.from('.scroll-text', {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  return (
    <div className="scroll-text" style={{ opacity: 0 }}>
      <h2>
        I am a full stack developer and designer. I have been working in this
        field for more than 2 years. I have worked on various projects and have
        a good knowledge of various technologies.
      </h2>
    </div>
  );
};

export default ScrollText;
