import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import CandyHotspot from "../components/CandyHotspot";

const Castel = () => {
  const frontRef = useRef(null);
  const smokeRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(frontRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(frontRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const showSmoke = () => {
    gsap.fromTo(
      smokeRef.current,
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
    );

    gsap.to(smokeRef.current, {
      backgroundPosition: "200% 200%",
      duration: 12,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  };

  const hideSmoke = () => {
    gsap.to(smokeRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="relative overflow-x-clip bg-gradient-to-b from-[#EDE6F6] to-[#D1BAD8] to-57%">
      {/* <div className="relative overflow-x-clip bg-black"> */}
      {/* smoke bg */}
      <div
        ref={smokeRef}
        className="pointer-events-none fixed inset-0 z-[5] opacity-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.55), rgba(255,255,255,0.25), rgba(255,255,255,0.1))",
          filter: "blur(8px)",
        }}
      />

      <div className="absolute bottom-0 left-0 h-90 w-full bg-gradient-to-b from-[#ece7f2]/0 to-[#ece7f2]/100"></div>

      {/* CASTLE */}
      <div className="relative w-screen max-lg:left-1/2 max-lg:mx-auto max-lg:w-450 max-lg:-translate-x-1/2 max-sm:w-380">
        <img
          alt="Castle Background"
          className="h-auto w-full max-w-none"
          src="/Images/castel/zamak-back.webp"
        />

        <img
          ref={frontRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          alt="Castle Front"
          className="absolute top-0 left-1/2 w-[30.2%] max-w-none -translate-x-1/2 opacity-0 transition"
          src="/Images/castel/zamak-front.webp"
        />

        {/* CANDY 1 */}
        <CandyHotspot
          candy="/Images/castel/candy1.webp"
          size={128}
          art="/Images/castel/art1.webp"
          title="Creation of the Bombon"
          pos="top-[46%] left-[28%]"
          posMobile="top-[52%] left-[40%]"
          svgPos="-right-8 -bottom-6"
          artPos="bottom-2 left-full ml-0"
          onOpen={showSmoke}
          onClose={hideSmoke}
        />
        <CandyHotspot
          candy="/Images/castel/candy2.webp"
          size={170}
          art="/Images/castel/art2.webp"
          title="The Birth of Teddy Bear"
          pos="top-[50%] right-[38%]"
          posMobile="top-[52%] left-[40%]"
          svgPos="-left-8 -bottom-4"
          artPos="bottom-3 right-full ml-0"
          onOpen={showSmoke}
          onClose={hideSmoke}
        />
        <CandyHotspot
          candy="/Images/castel/candy3.webp"
          size={220}
          art="/Images/castel/art3.webp"
          title="Lady with a Bombon"
          pos="top-[65%] left-[25%]"
          posMobile="top-[52%] left-[40%]"
          svgPos="-right-9 bottom-14"
          artPos="bottom-19 left-full ml-0"
          onOpen={showSmoke}
          onClose={hideSmoke}
        />
      </div>

      {/* CLOUD */}
      <img
        alt="Cloud"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-auto w-full translate-y-65 scale-x-150 object-cover mix-blend-screen"
        src="/Images/clouds/cloud2.webp"
      />
    </div>
  );
};

export default Castel;
