import React, { useState } from "react";

const ShopCard = ({ title, bgPath, tags }) => {
  const [quantity, setQuantity] = useState(100);

  return (
    <div className="shrink-0">
      {/* <div className="relative flex flex-col rounded-[1.3rem] bg-[#e4d5f4] pb-[1.25rem]"> */}
      <div className="relative flex w-[19rem] flex-col rounded-[1.3rem] bg-[#e4d5f4] pb-[1.25rem] max-sm:w-[90vw]">
        <a target="_top">
          <div className="flex h-60 w-[19rem] items-center justify-center overflow-hidden rounded-[1.3rem] bg-[#ffffff] max-md:h-53 max-sm:w-70 max-sm:w-full">
            <img
              alt="Blackberry Pucker"
              loading="lazy"
              className="max-h-full object-contain"
              src={bgPath}
            />
          </div>

          <div className="absolute top-0 left-0 flex flex-row flex-wrap gap-1.5 px-3 py-4">
            {tags.map((tag) => {
              return (
                <span
                  className={`font-Roundo rounded-full px-3 py-0.5 text-[9px] font-semibold uppercase ${tag.color}`}
                >
                  {tag.label}
                </span>
              );
            })}
          </div>
        </a>

        <div className="flex flex-col items-start gap-0 px-3 py-4 text-[#212121]">
          <p className="font-Roundo line-clamp-2 h-16 text-[22px] font-semibold">
            {title}
          </p>

          <div className="font-Roundo flex w-full items-center justify-between text-[15px] font-medium">
            550.0 RSD
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (quantity == 100) return;
                  else setQuantity(quantity - 100);
                }}
                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-[#ece7f2] transition-all duration-300 hover:bg-[#7a58a8]/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fa6-solid"
                  width="19"
                  height="19"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32"
                  ></path>
                </svg>
              </button>
              <div className="price lowercase">{quantity}g</div>
              <button
                onClick={() => {
                  setQuantity(quantity + 100);
                }}
                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-[#ece7f2] transition-all duration-1200 hover:bg-[#7a58a8]/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fa6-solid"
                  width="19"
                  height="19"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full items-stretch justify-between gap-4 px-[1rem] max-sm:flex-col">
          <button className="flex-1 cursor-pointer rounded-full border-4 border-[#e9ff83] bg-[#e9ff83] px-8 py-1 text-[16.5px] font-[650] tracking-widest text-[#212121] uppercase hover:bg-[#f4ffc4]">
            Add to cart +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
