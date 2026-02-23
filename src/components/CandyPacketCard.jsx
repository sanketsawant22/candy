import React from "react";

const CandyPacketCard = ({
  pattern,
  product,
  candy1,
  candy2,
  candy3,
  candy4,
  name,
  desc,
  background,
}) => {
  return (
    <a
      target="_top"
      className="group card w-[45vw] max-w-[828px] space-y-2 max-md:w-full"
      href="/"
    >
      <div className="relative">
        <div className="absolute bottom-0 left-0 h-[85%] w-full overflow-hidden rounded-3xl bg-[#fff]">
          <div
            class={`absolute top-0 left-0 h-full w-full scale-200 opacity-100 mix-blend-multiply ${background}`}
          ></div>
          <img
            alt="The sweet spot"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover transition-all duration-[600ms] group-hover:scale-150"
            src={pattern}
          />
        </div>

        {/* candy section */}
        <div className="absolute top-1/2 left-1/2 h-[130%] w-[120%] -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 max-md:h-[110%] max-md:w-[110%]">
          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute bottom-0 left-0 max-w-[15rem] rotate-90 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy1}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute top-0 left-0 max-w-[15rem] rotate-90 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy2}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute top-0 right-0 max-w-[15rem] -rotate-90 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy3}
          />

          <img
            alt="Sugar Rush"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            className="absolute right-0 bottom-0 max-w-[15rem] -rotate-90 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 max-lg:max-w-48 max-md:!max-w-[10rem]"
            src={candy4}
          />
        </div>

        <div className="relative z-10 w-full overflow-hidden">
          <img
            alt="The sweet spot"
            className="transition-all duration-[900ms] group-hover:translate-y-8"
            src={product}
          />
        </div>
      </div>

      <div className="space-y-4 px-6 pt-5">
        <h4 className="font-Roundo scale-y-95 text-[40px] leading-[30px] font-bold tracking-normal text-[#212121] uppercase">
          {name}
        </h4>

        <p className="font-Roundo line-clamp-3 min-h-16 text-lg font-medium text-[#212121]">
          {desc}
        </p>
      </div>

      <button className="mx-6 inline-flex cursor-pointer items-center justify-center rounded-full bg-[#e9ff83] px-6 py-3 text-base font-bold tracking-widest whitespace-nowrap text-[#212121] uppercase transition-all outline-none group-hover:bg-[#f4ffc4] max-md:mx-auto max-md:max-w-fit max-md:px-10 [&_svg]:pointer-events-none">
        Shop now
      </button>
    </a>
  );
};

export default CandyPacketCard;
