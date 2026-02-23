import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const CandyHotspot = ({
  candy,
  art,
  title,
  pos,
  artPos,
  size,
  svgPos,
  onOpen,
  onClose,
  posMobile,
}) => {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);
  const plusSvg = useRef(null);

  const useMedia = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
  };

  const isMobile = useMedia("(max-width: 768px)");

  const toggleCard = () => {
    if (!open) {
      setOpen(true);
      onOpen?.();

      requestAnimationFrame(() => {
        gsap.to(plusSvg.current, { rotate: 45, duration: 0.3 });
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" },
        );
      });
    } else {
      onClose?.();

      gsap.to(plusSvg.current, { rotate: 0, duration: 0.3 });
      gsap.to(cardRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => setOpen(false),
      });
    }
  };

  return (
    <div className={`absolute ${isMobile ? posMobile : pos}`}>
      <div className="relative flex justify-center">
        {/* shadow */}
        <div className="absolute -bottom-2 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black blur-md" />

        {/* candy */}
        <img
          src={candy}
          alt=""
          className="pointer-events-none relative z-10"
          style={{ width: `${size}px` }}
        />
      </div>

      {/* card */}
      {open && (
        <div
          ref={cardRef}
          className={`font-Roundo absolute z-[20] w-[400px] rounded-3xl bg-purple-50 p-6 text-[#212121] shadow-xl ${artPos}`}
        >
          <img src={art} className="w-full" alt="" />
          <h3 className="mt-4 text-center text-2xl font-semibold">{title}</h3>
          <p className="text-center font-medium">oil on canvas</p>
        </div>
      )}

      {/* glass button */}
      <div
        onClick={toggleCard}
        className={`group absolute z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#1f191f]/25 backdrop-blur-md ${svgPos}`}
      >
        <img
          src="/svg/circle.svg"
          className="transition group-hover:rotate-45"
          alt=""
        />

        <svg
          ref={plusSvg}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-7 w-7 text-white"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CandyHotspot;
