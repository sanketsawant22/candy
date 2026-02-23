import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import CandyPacketCard from "../components/CandyPacketCard";

const Carosal = () => {
  const triggerRef = useRef(null);
  const scrollerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ✅ ONLY DESKTOP PIN SCROLL
      mm.add("(min-width: 768px)", () => {
        const scroller = scrollerRef.current;
        const trigger = triggerRef.current;

        const scrollWidth = scroller.scrollWidth;
        const viewportWidth = window.innerWidth;
        const distance = scrollWidth - viewportWidth;

        gsap.to(scroller, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top-=20 top",
            end: () => "+=" + scrollWidth / 1.2,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-x-clip bg-[#ece7f2] px-4 py-20 md:px-22">
      <div className="flex w-full flex-row justify-between max-md:flex-col">
        <div className="flex w-7/12 flex-col gap-8 max-md:mb-8 max-md:w-full max-md:items-center">
          <p className="font-Roundo text-blackish text-lg font-medium">
            GUMMY MIXES
          </p>

          <h2 className="font-Akina text-6xl leading-[65px] font-medium tracking-wider text-[#212121] uppercase max-md:w-full max-md:text-center max-md:text-[40px] max-md:leading-[50px]">
            4 Flavor Mixes Beloved across the land
          </h2>
        </div>

        <p className="font-Roundo flex w-5/12 items-end text-lg font-medium text-[#212121] max-md:w-full max-md:text-center">
          The most celebrated sweets in the realm. Every piece is a little
          spell: color, texture, and taste woven into a moment of wonder: the
          kind of magic that only Swedish sweets can deliver. At Bombon, we
          embrace that heritage & elevate it into something enchanting.
        </p>
      </div>

      {/* SCROLLER */}
      <div className="relative">
        <div
          ref={triggerRef}
          className="trigger flex min-h-screen items-center max-md:min-h-0"
        >
          <div
            ref={scrollerRef}
            className="scroller flex w-max flex-nowrap gap-24 pr-[20vw] max-md:w-full max-md:flex-col max-md:gap-12 max-md:pr-0"
          >
            <CandyPacketCard
              pattern={"/Images/carosal/pattern1.svg"}
              product={"/Images/carosal/product1.webp"}
              candy1={"/Images/carosal/candy1-1.webp"}
              candy2={"/Images/carosal/candy2-1.webp"}
              candy3={"/Images/carosal/candy3-1.webp"}
              candy4={"/Images/carosal/candy4-1.webp"}
              name={"The sweet spot"}
              desc={
                "Heart-stealing, taste-bud-thrilling sweets you won't forget!"
              }
              background={"bg-gradient-to-b from-[#D9A3B9]/10 to-[#D9A3B9]/100"}
            />

            <CandyPacketCard
              pattern={"/Images/carosal/pattern2.svg"}
              product={"/Images/carosal/product2.webp"}
              candy1={"/Images/carosal/candy1-2.webp"}
              candy2={"/Images/carosal/candy2-2.webp"}
              candy3={"/Images/carosal/candy3-2.webp"}
              candy4={"/Images/carosal/candy4-2.webp"}
              name={"Tangy tango"}
              desc={"A tangy adventure with the sweetest epilogue!"}
              background={"bg-gradient-to-b from-[#DCFF74]/10 to-[#96AE33]/100"}
            />

            <CandyPacketCard
              pattern={"/Images/carosal/pattern3.svg"}
              product={"/Images/carosal/product3.webp"}
              candy1={"/Images/carosal/candy1-3.webp"}
              candy2={"/Images/carosal/candy2-3.webp"}
              candy3={"/Images/carosal/candy3-3.webp"}
              candy4={"/Images/carosal/candy4-3.webp"}
              name={"oops! all choco!"}
              desc={"No notes, 100% chocolate euphoria!"}
              background={"bg-gradient-to-b from-[#E69970]/10 to-[#C07337]/100"}
            />

            <CandyPacketCard
              pattern={"/Images/carosal/pattern4.svg"}
              product={"/Images/carosal/product4.webp"}
              candy1={"/Images/carosal/candy1-4.webp"}
              candy2={"/Images/carosal/candy2-4.webp"}
              candy3={"/Images/carosal/candy3-4.webp"}
              candy4={"/Images/carosal/candy4-4.webp"}
              name={"Lakrits mixtape"}
              desc={"A bold flavour for true candy connoisseurs!"}
              background={"bg-gradient-to-b from-[#D7C9C4]/10 to-[#968985]/100"}
            />

            {/* desktop buffer only */}
            <div className="h-full w-[15vw] max-md:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carosal;
