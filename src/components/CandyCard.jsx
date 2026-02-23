import React, { Suspense } from "react";

const CandyCard = ({
  banner,
  logo,
  candy1,
  candy2,
  candy3,
  candy4,
  candy5,
  heading,
  subtitle,
}) => {
  return (
    <a className="group relative z-0 space-y-8 hover:z-10 max-md:flex max-md:flex-col max-md:justify-center max-sm:space-y-6">
      <div className="relative">
        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl px-16 py-15 max-sm:px-10 max-sm:py-20">
          <img
            alt="Sugar Rush"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150"
            src={banner}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="600"
            height="260"
            decoding="async"
            className="relative z-1 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:-rotate-2"
            src={logo}
          />
        </div>

        <div className="absolute top-1/2 left-1/2 h-[130%] w-[120%] -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 max-md:h-[110%] max-md:w-[110%]">
          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute bottom-0 left-0 max-w-[15rem] rotate-6 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy1}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute top-0 left-0 max-w-[15rem] rotate-8 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy2}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute -top-16 left-1/2 max-w-[15rem] -translate-x-1/2 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy3}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute top-0 right-0 max-w-[15rem] -rotate-6 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy4}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute right-0 bottom-0 max-w-[15rem] -rotate-4 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy5}
          />
        </div>
      </div>

      <div className="space-y-4 px-6 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-sm:px-4">
        <h3 className="font-Roundo text-[38px] font-bold text-[#212121] uppercase max-md:text-center">
          {heading}
        </h3>

        <p className="font-Roundo line-clamp-3 min-h-16 text-lg font-medium text-[#212121] max-md:text-center">
          {subtitle}
        </p>
      </div>

      <button className="mx-6 hover:bg-[#f4ffc4] inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#e9ff83] px-6 py-2 text-lg font-semibold whitespace-nowrap text-[#212121] uppercase transition-all outline-none max-md:mx-auto max-md:max-w-fit max-md:px-10 [&_svg]:pointer-events-none">
        Shop now
      </button>
    </a>
  );
};

export default CandyCard;
