import { Linear, TweenMax } from "gsap";
import React, { useEffect, useRef } from "react";

const Loader = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    TweenMax.to([blue.current], 3, {
      rotation: 360,
      transformOrigin: "33px 33px",
      repeat: -1,
      ease: Linear.easeOut
    });
    TweenMax.to([red.current], 3, {
      rotation: 360,
      transformOrigin: "33px 0px",
      repeat: -1,
      ease: Linear.easeOut
    });
    TweenMax.to([yellow.current], 3, {
      rotation: 360,
      transformOrigin: "0px 33px",
      repeat: -1,
      ease: Linear.easeOut
    });
    TweenMax.to([green.current], 3, {
      rotation: 360,
      transformOrigin: "0px 0px",
      repeat: -1,
      ease: Linear.easeOut
    });
  }, []);

  const border = { border: "1px solid black" };
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" style={border}>
      <circle ref={blue} cx="33.2" cy="33.2" r="16.1" fill="#527abd" />
      <circle ref={red} cx="33.2" cy="66.4" r="16.1" fill="#de4431" />
      <circle ref={yellow} cx="66.4" cy="33.2" r="16.1" fill="#f4b61a" />
      <circle ref={green} cx="66.4" cy="66.4" r="16.1" fill="#009e52" />
    </svg>
  );
};

export default Loader;
