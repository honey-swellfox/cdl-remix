import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const WrongAnswer = ({ circle }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    gsap.fromTo(
      imageElement,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut',
      }
    );
  }, []);

  return (
    <img
      ref={imageRef}
      src="/img/icons/icon-wrong-click-big.svg"
      className="absolute"
      style={{ left: circle.x, top: circle.y }}
    />
  );
};
