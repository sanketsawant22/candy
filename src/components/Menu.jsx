import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Menu = ({ isMenuOpen, closeMenu }) => {
  const container = useRef();
  const bgRef = useRef();

  // background parallax
  useGSAP(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(bgRef.current, { x, y, duration: 0.6, ease: "power3.out" });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  });

  useGSAP(() => {
    gsap.to(container.current, {
      autoAlpha: isMenuOpen ? 1 : 0,
      duration: 0.4,
      ease: "power3.out",
      pointerEvents: isMenuOpen ? "auto" : "none",
    });
  }, [isMenuOpen]);

  return (
    <section
      ref={container}
      className="fixed top-0 z-51 h-screen w-full opacity-0"
    >
      <div className="absolute inset-0 -z-10">
        <img
          ref={bgRef}
          src="/svg/menu-bg.svg"
          className="h-full scale-110 object-cover"
          alt="bg"
        />
      </div>

      <div className="relative h-full w-full">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#ece7f2]">
          <div className="mb-10 flex w-full items-center justify-center gap-10 max-md:flex-col max-md:gap-3">
            <span
              onClick={closeMenu}
              className="font-Akina transform cursor-pointer text-6xl uppercase duration-300 hover:text-[80px] hover:text-[#212121] max-md:text-5xl"
            >
              home
            </span>
            <img
              src="/Images/candy/menu-candy.webp"
              alt="heart"
              className="h-24 w-auto object-contain max-md:h-12"
            />
            <span
              onClick={closeMenu}
              className="font-Akina transform cursor-pointer text-6xl uppercase duration-300 hover:text-[80px] hover:text-[#212121] max-md:text-5xl"
            >
              shop
            </span>
          </div>
          <div className="flex w-full items-center justify-center gap-10 max-md:flex-col max-md:gap-3">
            <span
              onClick={closeMenu}
              className="font-Akina transform cursor-pointer text-6xl uppercase duration-300 hover:text-[80px] hover:text-[#212121] max-md:text-5xl"
            >
              mixes
            </span>
            <img
              src="/Images/candy/menu-candy.webp"
              alt="heart"
              className="h-24 w-auto object-contain max-md:h-12"
            />
            <span
              onClick={closeMenu}
              className="font-Akina transform cursor-pointer text-6xl uppercase duration-300 hover:text-[80px] hover:text-[#212121] max-md:text-5xl"
            >
              contact
            </span>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 -translate-x-[50%] text-black">
          <div className="mb-5 flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--feather"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="transform cursor-pointer duration-300 hover:text-[#6350a8]"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--feather"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="transform cursor-pointer duration-300 hover:text-[#6350a8]"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--feather"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="transform cursor-pointer duration-300 hover:text-[#6350a8]"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </g>
            </svg>
          </div>
          <span className="font-Manrope text-[8.5px]">
            @2026 Bomban. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Menu;
