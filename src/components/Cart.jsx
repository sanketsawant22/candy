import React from "react";

const Cart = ({ isCartOpen, setisCartOpen }) => {
  return (
    <div
      className={`pointer-events-auto fixed top-0 left-0 z-[99] h-[100svh] w-full transition-all duration-500 ${
        isCartOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* backdrop */}
      <div
        onClick={() => setisCartOpen(false)}
        className="fixed top-0 left-0 h-screen w-screen bg-[#C1B8CF]/70"
      ></div>

      {/* cart panel */}
      <div
        className={`fixed top-0 right-0 flex h-[100svh] w-125 flex-col overflow-hidden rounded-l-3xl bg-gradient-to-b from-purple-50 to-[#CFC3E0] to-70% transition-transform duration-500 max-md:h-200 max-md:w-full max-md:justify-between max-md:rounded-l-none max-md:rounded-b-4xl max-md:shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col pt-9">
          <div className="px-7">
            <div className="mb-16 flex items-start justify-between border-b-2 border-b-[#ffffff] pb-5 max-lg:mb-10">
              <p className="font-Akina max-w-90 text-[44px] leading-[50px] font-semibold tracking-wide text-wrap text-[#212121] capitalize">
                Shopping Cart
              </p>

              {/* close button */}
              <svg
                onClick={() => setisCartOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="h-7 w-7 cursor-pointer"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z"
                />
              </svg>
            </div>
          </div>

          <div className="flex-1" data-lenis-prevent="true">
            <div className="flex h-full flex-col items-center justify-between pb-12">
              <div className="mt-0 flex flex-col items-center">
                <p className="w-full text-center text-[22px] font-bold text-[#7a58a8]">
                  No products in the cart...yet!
                </p>

                <img
                  alt="No products in the cart"
                  loading="lazy"
                  width="534"
                  height="534"
                  decoding="async"
                  className="h-[50vh] w-auto max-w-none opacity-60 mix-blend-hard-light max-md:h-auto max-md:w-4/5"
                  src="/Images/gummy-empty.webp"
                />
              </div>

              <a href="/">
                <button className="font-Roundo mx-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#e9ff83] px-6 py-2 text-lg font-semibold whitespace-nowrap text-[#212121] uppercase transition-all outline-none hover:bg-[#f4ffc4] max-md:mx-auto max-md:max-w-fit max-md:px-10 [&_svg]:pointer-events-none">
                  Go to shop
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
