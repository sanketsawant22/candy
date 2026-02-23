import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const line1 = "WELCOME TO THE";
const line2 = "KINGDOM OF BOMBON";

const StickySection = () => {
  const sectionRef = useRef();
  const cloudRefs = useRef([]);

  const centerRef = useRef();
  const logoRef = useRef();
  const headingRef = useRef();
  const subtitleRef = useRef();

  useGSAP(() => {
    gsap.set(
      [...cloudRefs.current, ...headingRef.current.querySelectorAll(".char")],
      { willChange: "transform, opacity" },
    );
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      cloudRefs.current.forEach((cloud) => {
        gsap.fromTo(
          cloud,
          { y: 0 },
          {
            y: () => gsap.utils.random(200, 500),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      cloudRefs.current.forEach((cloud) => {
        gsap.fromTo(
          cloud,
          { y: 0 },
          {
            y: () => gsap.utils.random(60, 120), // MUCH lighter
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.3,
            },
          },
        );
      });
    });

    return () => mm.revert();
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      desktopAnimations();
    });

    mm.add("(max-width: 767px)", () => {
      mobileAnimations();
    });

    return () => mm.revert();
  });

  const desktopAnimations = () => {
    const split = new SplitText(headingRef.current, {
      type: "words,chars",
      charsClass: "char",
    });

    gsap.set(split.chars, {
      y: -80,
      opacity: 0,
      filter: "blur(10px)",
      transformOrigin: "50% 100%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=200 bottom",
        scrub: true,
        pin: centerRef.current,
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(split.chars, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      stagger: { amount: 2, from: "random" },
      ease: "power3.out",
    });

    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        scale: 1,
        y: -10,
        ease: "back.out(1.7)",
        duration: 0.8,
      },
      "+=0.3",
    );

    return () => {
      split.revert();
    };
  };

  const mobileAnimations = () => {
    const split = new SplitText(headingRef.current, {
      type: "words,chars",
      charsClass: "char",
    });

    gsap.set(split.chars, {
      y: -80,
      opacity: 0,
      transformOrigin: "50% 100%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top-=100 top",
        end: "bottom+=150 bottom",
        scrub: 0.5,
        pin: centerRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        // markers: true,
      },
    });

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.to(split.chars, {
      y: 0,
      opacity: 1,
      stagger: { amount: 2, from: "random" },
      ease: "power3.out",
    });

    tl.to(subtitleRef.current, {
      opacity: 1,
      y: -6,
      duration: 0.4,
      ease: "power2.out",
    });

    return () => {
      split.revert();
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[350vh] w-full overflow-hidden bg-linear-to-t from-[#ece7f2] to-transparent"
    >
      {/* <div className="pointer-events-none absolute -top-95 left-0 w-full max-md:-top-25"> */}
      <div className="pointer-events-none absolute -top-[calc(min(60vw,100vh)*0.50)] left-0 w-full">
        <img
          src="/Images/clouds/cloud.webp"
          className="w-full mix-blend-screen"
        />
        <img
          src="/Images/clouds/cloud.webp"
          className="absolute inset-0 w-full opacity-50 mix-blend-screen"
        />
      </div>

      <img
        ref={(el) => (cloudRefs.current[0] = el)}
        src="/Images/clouds/cloud-left.webp"
        className="absolute top-36 w-[500px] mix-blend-screen"
      />

      <img
        ref={(el) => (cloudRefs.current[1] = el)}
        src="/Images/clouds/cloud-right.webp"
        className="absolute top-24 right-0 w-[500px] mix-blend-screen"
      />

      <img
        ref={(el) => (cloudRefs.current[2] = el)}
        src="/Images/clouds/cloud-right.webp"
        className="absolute top-220 right-0 w-[500px] mix-blend-screen"
      />

      <img
        ref={(el) => (cloudRefs.current[3] = el)}
        src="/Images/clouds/cloud-left.webp"
        className="absolute top-280 left-0 w-[500px] mix-blend-screen"
      />

      <img
        ref={(el) => (cloudRefs.current[4] = el)}
        src="/Images/clouds/cloud-left.webp"
        className="absolute top-450 left-0 w-[500px] mix-blend-screen"
      />

      <div
        ref={centerRef}
        className="absolute top-10 flex h-screen w-full flex-col items-center justify-center max-md:-top-30"
      >
        <img
          ref={logoRef}
          src="/svg/logo.svg"
          alt=""
          className="scale-75 opacity-0"
        />

        <div
          ref={headingRef}
          className="font-Akina mt-10 max-w-[1200px] text-center text-[85px] leading-[90px] text-[#7a58a8] max-md:text-[52px] max-md:leading-[50px]"
        >
          WELCOME TO THE KINGDOM OF BOMBON
        </div>

        <span
          ref={subtitleRef}
          className="font-Roundo mt-5 scale-90 text-[22px] font-semibold text-[#212121] opacity-0 max-md:text-sm"
        >
          ...where sweet & sour rule in delicious harmony.
        </span>
      </div>
    </section>
  );
};

export default StickySection;
