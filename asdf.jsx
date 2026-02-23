import React from "react";

const Asdf = () => {
  return (
    <>
      <section className="flex flex-col items-center bg-[radial-gradient(ellipse,_#9A88B6_0%,_#ECE7F2_68%)] px-4 py-25 max-sm:mt-[-1px] md:px-22">
        {/* heading */}
        <div className="container flex flex-col justify-start max-md:items-center">
          <p className="font-Roundo mb-[1rem] text-[24px] font-semibold text-[#212121] max-md:text-center">
            SHOP THE LATEST SWEETS
          </p>

          <h1 className="font-Akina text-6xl leading-[65px] font-medium tracking-wider text-[#212121] uppercase max-md:w-full max-md:text-center max-md:text-[45px] max-md:leading-[50px]">
            OUR BESTSELLING TREATS
          </h1>

          <p className="font-Roundo mt-6 w-10/12 text-lg font-medium text-[#212121] max-md:mt-7 max-md:w-full max-md:text-center">
            Sweet, sour, chewy, or fruity we've got the right candy for every
            mood. From sharp bursts of sour to soft bites of sweetness, there's
            always something to enjoy. Whatever you're craving, there's a flavor
            here to make you smile.
          </p>
        </div>

        <div className="relative flex w-full max-md:flex-col">
          <div className="keen-slider mt-18 flex flex-row max-2xl:pl-24 max-lg:pl-12 max-sm:mt-12 max-sm:pl-2">
            <div
              className="keen-slider__slide hidden max-lg:block max-md:hidden"
              aria-hidden="true"
            ></div>

            {/* ---- CARD 1 ---- */}
            <div className="keen-slider__slide">
              <div className="bg-mercury relative flex flex-col rounded-[1.875rem] pb-5">
                <a
                  target="_top"
                  href="/shop/sugar-rush/banana-caramel-marshmallow-mushrooms"
                >
                  <div className="bg-purple-0 h-80 overflow-hidden rounded-[1.875rem] max-sm:h-70">
                    <img
                      alt="Blackberry Pucker"
                      loading="lazy"
                      className="h-full w-full object-contain"
                      src="https://cdn.shopify.com/s/files/1/0917/0101/8909/files/Frame1.png"
                    />
                  </div>

                  <div className="absolute top-0 left-0 flex flex-row flex-wrap gap-2 px-4 py-5">
                    <span className="tag bg-gluten-free rounded-full px-4 py-1 font-semibold uppercase">
                      gluten free
                    </span>
                    <span className="tag rounded-full bg-pink-100 px-4 py-1 font-semibold uppercase">
                      sweet
                    </span>
                  </div>
                </a>

                <div className="text-blackish flex flex-col items-start gap-4 px-4 py-6">
                  <p className="paragraph-lg line-clamp-2 h-18">
                    Blackberry Pucker
                  </p>

                  <div className="price flex w-full items-center justify-between">
                    550.0 RSD
                    <div className="flex items-center gap-3">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-50 transition-all hover:bg-purple-200">
                        -
                      </button>
                      <div className="price lowercase">100g</div>
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-50 transition-all hover:bg-purple-200">
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-stretch justify-between gap-4 px-[1rem] max-sm:flex-col">
                  <button className="bg-lime hover:bg-light-lime text-blackish border-lime flex-1 rounded-full border-4 px-8 py-3">
                    Add to cart +
                  </button>
                </div>
              </div>
            </div>

            {/* ---- (Your other slides stay same pattern — only className fixes) ---- */}
          </div>

          <div className="mt-12 hidden justify-center gap-4 max-md:flex">
            <button className="h-5 w-5 rounded-full bg-purple-100"></button>
            <button className="h-5 w-5 rounded-full bg-purple-100"></button>
            <button className="h-5 w-5 rounded-full bg-purple-100"></button>
            <button className="h-5 w-5 rounded-full bg-purple-100"></button>
            <button className="h-5 w-5 scale-110 rounded-full bg-purple-500"></button>
          </div>

          <div className="absolute right-[10vw] flex w-40 -translate-y-[100%] justify-end gap-8 max-md:hidden">
            <button>⬅</button>
            <button>➡</button>
          </div>
        </div>

        <a
          target="_top"
          className="mt-12 max-sm:w-full max-sm:px-4"
          href="/shop"
        >
          <button className="rounded-full border-4 border-purple-800 bg-purple-800 px-8 py-3 text-white max-sm:w-full">
            TREAT YOURSELF
          </button>
        </a>

        <div className="bestselling-section relative h-[50vh] w-full max-md:h-[35vh]">
          <img
            src="/images/home/bestselling/oblak1.png"
            className="absolute bottom-0 left-0 w-1/2 mix-blend-screen"
          />
          <img
            src="/images/home/bestselling/oblak2.png"
            className="absolute right-0 bottom-0 w-1/2 mix-blend-screen"
          />
          <img
            src="/images/home/bestselling/oblak3.png"
            className="absolute -bottom-1/4 left-1/2 w-1/4 -translate-x-1/2 mix-blend-screen"
          />
        </div>
      </section>
    </>
  );
};

export default Asdf;
