import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import CandyCard from "../components/CandyCard";

const CandyClassics = () => {
  const stickerRef = useRef(null);

  useGSAP(() => {
    gsap.to(stickerRef.current, {
      rotate: -360,
      duration: 18, // slower = premium
      repeat: -1,
      ease: "none", // true linear
    });
  });

  return (
    <div className="w-full bg-transparent px-4 py-3 text-black md:px-22 md:py-7 lg:px-22">
      <div className="mb-20 flex flex-col items-start max-md:mb-14 max-md:items-center max-sm:mb-10">
        <p className="font-Roundo mb-[1rem] text-[24px] font-semibold text-[#212121] max-md:text-center">
          SHOP THE LATEST SWEETS
        </p>

        <div className="flex flex-row items-center justify-between gap-4 max-md:justify-start">
          <div className="flex w-2/3 flex-col gap-7 max-md:w-full max-md:gap-2">
            <h2 className="font-Akina text-6xl leading-[65px] font-medium tracking-wider text-[#212121] uppercase max-md:w-full max-md:text-center max-md:text-[40px] max-md:leading-[45px]">
              Discover the 4 hidden realms of our Candy Kingdom
            </h2>

            <p className="font-Roundo text-lg max-md:text-lg font-medium text-[#212121] max-md:mt-7 max-md:text-center">
              Welcome to a kingdom of taste, where every realm tells its own
              story. Sugar Rush sparkles with playful sweetness, Sour Power
              zings with bold mischief, Cocoa Bliss glows with chocolatey
              warmth, and Licorizz whispers cool, smoky secrets. Together, they
              create a world where flavor becomes adventure.
            </p>
          </div>

          <a
            target="_top"
            className="relative aspect-square min-w-[14rem] cursor-pointer max-md:hidden"
          >
            <div className="relative h-full w-full">
              <img
                ref={stickerRef}
                alt="Button"
                loading="lazy"
                width="290"
                height="290"
                decoding="async"
                src="/svg/stiker.svg"
              />

              <img
                alt="Game"
                loading="lazy"
                width="120"
                height="120"
                decoding="async"
                className="absolute inset-0 h-full w-full scale-75 transform object-contain duration-300 hover:scale-90 hover:-rotate-10"
                src="/svg/certified.svg"
              />
            </div>
          </a>
        </div>
      </div>

      {/* card section */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-20 max-md:grid-cols-1 max-md:gap-y-10">
        {/* card 1 */}
        <CandyCard
          banner="/svg/sugar-rush/pattern.svg"
          logo="/svg/sugar-rush/stamp.svg"
          candy1="/svg/sugar-rush/candy1.webp"
          candy2="/svg/sugar-rush/candy2.webp"
          candy3="/svg/sugar-rush/candy3.webp"
          candy4="/svg/sugar-rush/candy4.webp"
          candy5="/svg/sugar-rush/candy5.webp"
          heading="sugar rush"
          subtitle="The pink heart of the kingdom ruled by sparkle, charm, and a dash of
          royal mischief."
        />
        <CandyCard
          banner="/svg/sour-power/pattern.svg"
          logo="/svg/sour-power/stamp.svg"
          candy1="/svg/sour-power/candy1.webp"
          candy2="/svg/sour-power/candy2.webp"
          candy3="/svg/sour-power/candy3.webp"
          candy4="/svg/sour-power/candy4.webp"
          candy5="/svg/sour-power/candy5.webp"
          heading="Sour Power"
          subtitle="A wild green land where clever minds and sour tongues play by their own rules."
        />
        <CandyCard
          banner="/svg/cocoa/pattern.svg"
          logo="/svg/cocoa/stamp.svg"
          candy1="/svg/cocoa/candy1.webp"
          candy2="/svg/cocoa/candy2.webp"
          candy3="/svg/cocoa/candy3.webp"
          candy4="/svg/cocoa/candy4.webp"
          candy5="/svg/cocoa/candy5.webp"
          heading="Cocoa Bliss"
          subtitle="The sun-drenched southern realm: warm, joyful, and steeped in chocolatey delight."
        />
        <CandyCard
          banner="/svg/licorizz/pattern.svg"
          logo="/svg/licorizz/stamp.svg"
          candy1="/svg/licorizz/candy1.webp"
          candy2="/svg/licorizz/candy2.webp"
          candy3="/svg/licorizz/candy3.webp"
          candy4="/svg/licorizz/candy4.webp"
          candy5="/svg/licorizz/candy5.webp"
          heading="Licorizz"
          subtitle="Elegant and enigmatic, Licorizz is the smoky-black capital of cool – where flavor speaks in whispers."
        />
      </div>
    </div>
  );
};

export default CandyClassics;
