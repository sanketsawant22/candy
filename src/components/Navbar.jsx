import React, { useRef } from "react";

const Navbar = ({ isMenuOpen, openMenu, closeMenu, toggleCart }) => {
  const menuSvg = useRef(null);
  const closeSvg = useRef(null);

  return (
    <nav className="fixed top-0 z-52 w-full">
      <div className="flex w-full items-center justify-between bg-transparent px-4 py-3 md:px-22 md:py-7 lg:px-22">
        <div className="w-full">
          <img src="/svg/logo.svg" alt="logo" className="h-4 md:h-6.25" />
        </div>

        {/* menu button */}
        <div
          onClick={isMenuOpen ? closeMenu : openMenu}
          className="relative flex w-16.5 cursor-pointer justify-center rounded-[14px] border-b-2 border-b-[#af9ccc] bg-[#ece7f2] px-4 py-2 max-md:w-13 max-md:rounded-[10px] max-md:py-1"
        >
          {/* burger */}
          <div
            ref={menuSvg}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              isMenuOpen ? "scale-90 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <svg className="w-9 max-md:w-6" height="8">
              <path
                fill="none"
                stroke="#212121"
                strokeWidth="2"
                strokeLinecap="round"
                d="M0 4H64"
              />
            </svg>
            <svg className="w-9 max-md:w-6" height="8">
              <path
                fill="none"
                stroke="#212121"
                strokeWidth="2"
                strokeLinecap="round"
                d="M0 4H64"
              />
            </svg>
            <svg className="w-9 max-md:w-6" height="8">
              <path
                fill="none"
                stroke="#212121"
                strokeWidth="2"
                strokeLinecap="round"
                d="M0 4H64"
              />
            </svg>
          </div>

          {/* close */}
          <svg
            ref={closeSvg}
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute top-1/2 left-1/2 h-6.25 w-6.25 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isMenuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
            }`}
            viewBox="0 0 32 32"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 30L30 2m0 28L2 2"
            />
          </svg>
        </div>

        {/* right side */}
        <div className="block flex w-full items-center justify-end">
          <div className="font-Roundo flex items-center gap-14 text-[23px] font-bold text-[#212121]">
            <button className="block cursor-pointer max-md:hidden">shop</button>
            <button onClick={toggleCart} className="cursor-pointer">
              cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
