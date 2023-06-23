import React, { useEffect } from "react";

export const Spotlight: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const spotlight = document.querySelector("#spotlight") as HTMLElement;
      const { clientX, clientY } = event;

      setTimeout(() => {
        spotlight.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 20px, #00000050 350px)`;
      }, 75);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="spotlight"></div>;
};
