import React, { useEffect, useRef } from "react";

interface SpotlightProps {
  blackout: boolean;
}

export const Spotlight: React.FC<SpotlightProps> = ({ blackout }) => {
    const mousePositionRef = useRef({ clientX: 0, clientY: 0 });

    useEffect(() => {
        const spotlight = document.querySelector("#spotlight") as HTMLElement;
        const spotlightBG = blackout ? `#000000 400px` : `#0000006a 350px`;
        spotlight.style.background = `radial-gradient(circle at ${mousePositionRef.current.clientX}px ${mousePositionRef.current.clientY}px, #00000000 20px, ${spotlightBG})`;
    
        const handleMouseMove = (event: MouseEvent) => {
          const { clientX = 0, clientY = 0 } = event;
          mousePositionRef.current.clientX = clientX;
      mousePositionRef.current.clientY = clientY;
          setTimeout(() => {
            spotlight.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 20px, ${spotlightBG})`;
          }, 100);
        };
    
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, [blackout]);
    
      return <div id="spotlight"></div>;
    };
