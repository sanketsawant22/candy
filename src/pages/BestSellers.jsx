import React, { useRef, useState, useEffect } from "react";
import ShopCard from "../components/ShopCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BestSellers = () => {
  const products = [
    {
      title: "Blackberry Pucker",
      image: "/Images/bestSellers/Frame1.webp",
      tags: [
        { label: "gluten free", color: "bg-[#f8eaf2]" },
        { label: "sweet", color: "bg-[#f9b7d2]" },
      ],
    },
    {
      title: "Sweet & Cute",
      image: "/Images/bestSellers/Frame3.webp",
      tags: [
        { label: "gluten free", color: "bg-[#f8eaf2]" },
        { label: "sweet", color: "bg-[#f9b7d2]" },
      ],
    },
    {
      title: "Strawberry Teddy",
      image: "/Images/bestSellers/Frame2.webp",
      tags: [
        { label: "gelatin free", color: "bg-[#ddc7ff]" },
        { label: "gluten free", color: "bg-[#f8eaf2]" },
        { label: "sweet", color: "bg-[#f9b7d2]" },
      ],
    },
    {
      title: "The Crown",
      image: "/Images/bestSellers/Frame4.webp",
      tags: [
        { label: "gelatin free", color: "bg-[#ddc7ff]" },
        { label: "gluten free", color: "bg-[#f8eaf2]" },
        { label: "sour", color: "bg-[#bbd948]" },
      ],
    },
    {
      title: "Choco & Almond Blend",
      image: "/Images/bestSellers/Frame14.webp",
      tags: [
        { label: "chocolate", color: "bg-[#f39e60]" },
        { label: "gelatin free", color: "bg-[#ddc7ff]" },
        { label: "gluten free", color: "bg-[#f8eaf2]" },
      ],
    },
    {
      title: "Sweet & Green",
      image: "/Images/bestSellers/Frame46.webp",
      tags: [
        { label: "gluten free", color: "bg-[#f8eaf2]" },
        { label: "sweet", color: "bg-[#f9b7d2]" },
      ],
    },
    {
      title: "The knot",
      image: "/Images/bestSellers/Frame19.webp",
      tags: [{ label: "Liquorice", color: "bg-[#d0b6bb]" }],
    },
  ];

  const sliderRef = useRef(null);
  const cardRefs = useRef([]);

  const cloud1 = useRef(null);
  const cloud2 = useRef(null);
  const cloud3 = useRef(null);

  useGSAP(() => {
    gsap.to(cloud1.current, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: cloud1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    gsap.to(cloud2.current, {
      y: -220,
      ease: "none",
      scrollTrigger: {
        trigger: cloud2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    gsap.to(cloud3.current, {
      y: -330,
      ease: "none",
      scrollTrigger: {
        trigger: cloud3.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.6,
      },
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;

      const distance = Math.abs(sliderCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section className="flex flex-col items-center overflow-x-hidden bg-[radial-gradient(ellipse,_#9A88B6_0%,_#ECE7F2_68%)] py-25 pb-0 max-sm:mt-[-1px]">
      <div className="flex flex-col items-center overflow-x-hidden px-4 md:px-22">
        {/* heading */}
        <div className="container flex flex-col justify-start max-md:items-center">
          <p className="font-Roundo mb-[1rem] text-[24px] font-semibold text-[#212121] max-md:text-center">
            SHOP THE LATEST SWEETS
          </p>

          <h1 className="font-Akina text-6xl leading-[65px] font-medium tracking-wider text-[#212121] uppercase max-md:w-full max-md:text-center max-md:text-[40px] max-md:leading-[50px]">
            OUR BESTSELLING TREATS
          </h1>

          <p className="font-Roundo mt-6 w-10/12 text-lg font-medium text-[#212121] max-md:mt-7 max-md:w-10/12 max-md:text-center">
            Sweet, sour, chewy, or fruity we've got the right candy for every
            mood. From sharp bursts of sour to soft bites of sweetness, there's
            always something to enjoy. Whatever you're craving, there's a flavor
            here to make you smile.
          </p>
        </div>

        <div className="relative flex w-screen max-md:flex-col">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="hide-scrollbar mt-13 flex w-full snap-x snap-mandatory flex-row gap-6 overflow-x-auto scroll-smooth max-2xl:px-24 max-lg:px-12 max-sm:mt-12 max-sm:px-5"
          >
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="flex snap-center justify-center"
                >
                  <ShopCard
                    title={product.title}
                    bgPath={product.image}
                    tags={product.tags}
                  />
                </div>
              );
            })}

            <div className="h-full min-w-[1200px]"></div>
          </div>

          <div className="mt-12 flex justify-center gap-4 md:hidden">
            {products.map((_, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-125 bg-[#bb9ceb]"
                      : "bg-[#ece7f2] hover:scale-110"
                  }`}
                ></button>
              );
            })}
          </div>

          <div className="absolute right-[10vw] flex w-40 -translate-y-[100%] justify-end gap-8 max-md:hidden">
            <button onClick={() => scroll("left")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--fa6-solid text-[#7a58a8] opacity-100"
                width="43"
                height="43"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M512 256a256 256 0 1 0-512 0a256 256 0 1 0 512 0M271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87l87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9z"
                ></path>
              </svg>
            </button>
            <button onClick={() => scroll("right")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--fa6-solid text-[#7a58a8] opacity-100 max-lg:opacity-100"
                width="43"
                height="43"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M0 256a256 256 0 1 0 512 0a256 256 0 1 0-512 0m241 121c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87l-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <a target="_top" className="mt-12 max-sm:w-full max-sm:px-4" href="">
          <button className="font-Roundo rounded-full border-4 border-[#472a82] bg-[#472a82] px-8 py-2 text-[16px] font-semibold tracking-widest text-white max-sm:w-full">
            TREAT YOURSELF
          </button>
        </a>
      </div>

      {/* clouds */}
      <div className="relative h-[300px] w-full overflow-y-visible max-md:h-[35vh] max-md:h-[100px]">
        <img
          ref={cloud1}
          src="/Images/clouds/oblak1.webp"
          className="absolute bottom-0 left-0 w-1/2 mix-blend-screen will-change-transform"
        />

        <img
          ref={cloud2}
          src="/Images/clouds/oblak2.webp"
          className="absolute right-0 bottom-0 w-1/2 mix-blend-screen will-change-transform"
        />

        <img
          ref={cloud3}
          src="/Images/clouds/oblak3.webp"
          className="absolute bottom-0 left-1/2 w-1/4 -translate-x-1/2 mix-blend-screen will-change-transform"
        />
      </div>
    </section>
  );
};

export default BestSellers;
