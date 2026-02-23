import React, { useRef } from "react";
import gsap from "gsap";

const Audio = () => {
  const audioRef = useRef();
  const play = useRef();
  const pause = useRef();

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();

      gsap.to(pause.current, { opacity: 0, duration: 0.3 });
      gsap.to(play.current, { opacity: 1, duration: 0.3 });
    } else {
      audio.pause();

      gsap.to(play.current, { opacity: 0, duration: 0.3 });
      gsap.to(pause.current, { opacity: 1, duration: 0.3 });
    }
  };

  return (
    // <div
    //   onClick={toggleAudio}
    //   className="fixed top-[83vh] left-0 z-52 w-full scale-50 cursor-pointer md:left-4 md:scale-100"
    // >
    <div
      onClick={toggleAudio}
      className="fixed top-[calc(100vh-160px)] left-0 z-52 w-full origin-left scale-90 cursor-pointer md:top-[calc(100vh-125px)] md:left-4 md:scale-100"
    >
      <audio ref={audioRef} src="/audio/candy.mp3" autoPlay={false}></audio>
      <img
        src="/svg/pause.svg"
        ref={pause}
        alt=""
        className="absolute scale-75"
      />
      <img
        src="/svg/play.svg"
        ref={play}
        alt=""
        className="absolute scale-75 opacity-0"
      />
    </div>
  );
};

export default Audio;
