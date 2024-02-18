"use client";
import { useState, useCallback } from "react";
import { PiTrendUpBold } from "react-icons/pi";

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const Card = ({ data }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className="card relative h-68 md:w-80 w-[90%] overflow-hidden transition-all duration-400 ease-in-out will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
        <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-midColor/10 via-midColor/60 to-highlight/30 rounded-lg"></div>
        <div className="group ease relative flex flex-col mx-auto gap-2 h-full w-full select-none items-start px-4 py-4 rounded-lg border border-[#707D61]/60 backdrop-blur-lg bg-RcornerColor/80 text-sm font-light text-gray-300 shadow-[inset_-2px_-2px_120px_#424844]">
          <div className="flex flex-col text-gray-400">
            <p>{data.title}</p>
            <p>{data.date}</p>
          </div>
          <PiTrendUpBold className=" text-7xl" />
          <p className="text-4xl font-bold">{data.heading}</p>
          <p className="text-[1.2em]">{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
