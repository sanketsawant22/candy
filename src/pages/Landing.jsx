import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const candies = [
  "/Images/candy/herocandy1.webp",
  "/Images/candy/herocandy2.webp",
  "/Images/candy/herocandy3.webp",
  "/Images/candy/herocandy4.webp",
  "/Images/candy/herocandy5.webp",
  "/Images/candy/herocandy6.webp",
  "/Images/candy/herocandy7.webp",
  "/Images/candy/herocandy8.webp",
  "/Images/candy/herocandy9.webp",
  "/Images/candy/herocandy10.webp",
  "/Images/candy/herocandy11.webp",
  "/Images/candy/herocandy12.webp",
  "/Images/candy/herocandy13.webp",
  "/Images/candy/herocandy14.webp",
  "/Images/candy/herocandy15.webp",
  "/Images/candy/herocandy16.webp",
  "/Images/candy/herocandy17.webp",
];

const blurCandies = [
  "/Images/candy/blur1.webp",
  "/Images/candy/blur2.webp",
  "/Images/candy/blur3.webp",
  "/Images/candy/blur4.webp",
  "/Images/candy/blur5.webp",
  "/Images/candy/blur6.webp",
  "/Images/candy/blur7.webp",
  "/Images/candy/blur8.webp",
  "/Images/candy/blur9.webp",
  "/Images/candy/blur10.webp",
  "/Images/candy/blur11.webp",
  "/Images/candy/blur12.webp",
  "/Images/candy/blur13.webp",
  "/Images/candy/blur14.webp",
];

const line1 = "Bombon Royal";
const line2 = "Swedish Candy";

const sub1 =
  "In the land of Bombon, flavor holds the crown. Experience the elegance of Sweden in its sweetest form.";

const Landing = () => {
  const stickerRef = useRef();
  const candyRefs = useRef([]);
  const blurCandyRefs = useRef([]);

  const headingRef = useRef();
  const subtitleRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      // 📱 MOBILE
      initCandy(0.4, 0.6, 0.3, 0.5);
    });

    mm.add("(min-width: 768px)", () => {
      // 💻 TABLET & LAPTOP
      initCandy(0.8, 0.9, 0.6, 0.9);
    });

    return () => mm.revert();
  });

  const initCandy = (spawnMin, spawnMax, rainMin, rainMax) => {
    const spawnCandy = () => {
      const freeCandies = candyRefs.current.filter(
        (el) => el && !gsap.isTweening(el),
      );

      if (!freeCandies.length) return;

      const el = gsap.utils.random(freeCandies);

      const angle = gsap.utils.random(-60, 60);
      const distance = gsap.utils.random(
        window.innerHeight * 1.2,
        window.innerHeight * 1.5,
      );

      const x = Math.sin((angle * Math.PI) / 180) * distance;
      const y = -distance;

      gsap.fromTo(
        el,
        {
          opacity: 1,
          scale: gsap.utils.random(spawnMin, spawnMax),
          x: 0,
          y: 0,
          rotate: gsap.utils.random(-180, 180),
        },
        {
          opacity: 1,
          x,
          y,
          scale: 1,
          rotate: gsap.utils.random(-720, 720),
          duration: gsap.utils.random(4, 5),
          ease: "power2.out",
          onComplete: () => gsap.set(el, { opacity: 0 }),
        },
      );
    };

    const rainCandy = () => {
      const freeCandies = blurCandyRefs.current.filter(
        (el) => el && !gsap.isTweening(el),
      );

      if (!freeCandies.length) return;

      const el = gsap.utils.random(freeCandies);

      const angle = gsap.utils.random(-50, 50);
      const distance = gsap.utils.random(
        window.innerHeight * 1.5,
        window.innerHeight * 1.5,
      );

      const x = Math.sin((angle * Math.PI) / 180) * distance;
      const y = distance;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: gsap.utils.random(rainMin, rainMax),
          x: gsap.utils.random(-100, 100),
          y: 0,
          rotate: gsap.utils.random(-90, 90),
        },
        {
          opacity: 1,
          x,
          y,
          rotate: gsap.utils.random(-360, 360),
          duration: gsap.utils.random(5, 7),
          ease: "power1.out",
          onComplete: () => gsap.set(el, { opacity: 0 }),
        },
      );
    };

    gsap.timeline({ repeat: -1 }).call(spawnCandy).to({}, { duration: 0.25 });
    gsap
      .timeline({ repeat: -1, delay: 2.5 })
      .call(rainCandy)
      .to({}, { duration: 0.35 });
  };

  useGSAP(() => {
    gsap.to(stickerRef.current, {
      rotate: -360,
      duration: 9,
      repeat: -1,
      ease: "linear",
    });

    const HeadingWords = headingRef.current.querySelectorAll(".word");

    gsap.fromTo(
      HeadingWords,
      {
        y: 150,
        opacity: 0,
        scaleY: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scaleY: 1,
        stagger: 0.3,
        duration: 1.5,
        ease: "power4.out",
      },
    );

    const subWords = subtitleRef.current.querySelectorAll(".word");

    gsap.fromTo(
      subWords,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "bounce.out",
        delay: 0.1,
      },
    );
  });

  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-b from-[#ece7f2] to-transparent max-md:max-h-162.5">
      <div className="absolute -top-[30%] left-1/2 w-[80%] -translate-x-1/2">
        {blurCandies.map((src, i) => (
          <img
            key={i}
            ref={(el) => (blurCandyRefs.current[i] = el)}
            src={src}
            alt=""
            className="pointer-events-none absolute top-1/2 left-1/2 z-47 w-50 -translate-x-1/2 -translate-y-1/2"
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col">
        <div className="z-48 flex flex-col items-center justify-center pt-40 max-md:pt-30">
          <div
            ref={headingRef}
            className="font-Akina flex flex-col items-center justify-center gap-2 text-[82px] leading-21.25 text-[#212121] uppercase max-md:text-[58px] max-md:leading-12"
          >
            <div className="flex items-center justify-center gap-2 gap-x-5 max-md:flex-col">
              {line1.split(" ").map((word, i) => (
                <span key={i} className="word inline-block">
                  {word}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 gap-x-5 max-md:flex-col">
              {line2.split(" ").map((word, i) => (
                <span key={i} className="word inline-block">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={subtitleRef}
            className="font-Roundo mt-8 flex max-w-150 flex-col items-center justify-center text-[22.5px] font-semibold max-md:max-w-[85%] max-sm:text-[18px]"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-1">
              {sub1.split(" ").map((word, i) => (
                <span key={i} className="word inline-block">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-auto flex w-full justify-center">
          {/* CANDY PACKET CONTAINER */}
          <div className="relative w-[60%] max-md:w-full">
            <img
              src="/Images/candy/candy-packet.png"
              alt=""
              className="block w-full object-contain"
            />

            <div className="absolute bottom-[30%] left-1/2 w-50 -translate-x-1/2">
              {candies.map((src, i) => (
                <img
                  key={i}
                  ref={(el) => (candyRefs.current[i] = el)}
                  src={src}
                  alt=""
                  className="pointer-events-none absolute top-1/2 left-1/2 z-47 w-100 -translate-x-1/2 -translate-y-1/2 max-md:scale-50"
                />
              ))}
            </div>

            <img
              src="/Images/candy/candy-packet-overlay.png"
              alt=""
              className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-contain"
            />
          </div>

          <div className="pointer-events-none absolute -top-20 left-1/2 w-screen -translate-x-1/2 mix-blend-screen max-md:top-1">
            <img
              src="/Images/clouds/cloud.webp"
              className="w-screen mix-blend-screen"
            />
            <img
              src="/Images/clouds/cloud.webp"
              className="absolute inset-0 w-screen opacity-100 mix-blend-screen"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-auto absolute top-[calc(100dvh-120px)] right-[min(6vw,6vh)] z-50 block max-md:hidden md:top-[calc(100vh-200px)] md:right-[min(10vh,10vw)]">
        <div className="relative w-[min(20vh,25vw)]">
          <img
            ref={stickerRef}
            src="/svg/stiker.svg"
            alt=""
            className="h-full w-full object-contain"
          />
          <img
            src="/svg/game.svg"
            alt=""
            className="absolute inset-0 h-full w-full scale-75 transform object-contain duration-300 hover:scale-90 hover:-rotate-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
