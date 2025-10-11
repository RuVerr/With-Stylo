import React, { useEffect, useRef, useState } from "react";

import "./HomeHeader.scss";

export default function HomeHeader() {
  let [headerBgAnimAngle, setHeaderBgAnimAngle] = useState(15);
  const prevMouseX = useRef(null);
  const prevScrollY = useRef(null);
  const lastSource = useRef("scroll");
  const headerRef = useRef(null);
  const elementIsVisible = useRef(false);
  const shadow = "1px 1px #000000";

  const handleMouseMove = (e) => {
    if (!elementIsVisible.current) return;

    const x = e.clientX;

    if (lastSource.current !== "mouse") {
      prevMouseX.current = x;
      lastSource.current = "mouse";
      return;
    }

    if (prevMouseX.current != null) {
      const deltaX = x - prevMouseX.current;
      const mouseSpeed = 0.3;
      setHeaderBgAnimAngle((prev) => (prev + deltaX * mouseSpeed + 360) % 360);
    }

    prevMouseX.current = x;
    lastSource.current = "mouse";
  };

  useEffect(() => {
    lastSource.current = "scroll";

    const handleScroll = () => {
      if (!elementIsVisible.current) return;
      const y = window.scrollY;

      if (lastSource.current !== "scroll") {
        prevScrollY.current = y;
        lastSource.current = "scroll";
        return;
      }
      const deltaY = y - prevScrollY.current;
      const scrollFactor = 0.5;

      setHeaderBgAnimAngle((prev) => (prev + deltaY * scrollFactor + 360) % 360);

      prevScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        elementIsVisible.current = entry.isIntersecting;
      },
      {
        threshold: 0.1
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <header
      className="header"
      ref={headerRef}
      onMouseMove={handleMouseMove}
      style={{
        background: `conic-gradient(from ${headerBgAnimAngle}deg, 
        rgba(79, 0, 91, 1.000) 0.000deg, 
        rgba(108, 0, 101, 1.000) 30.000deg, 
        rgba(136, 0, 114, 1.000) 60.000deg, 
        rgba(161, 0, 128, 1.000) 90.000deg, 
        rgba(183, 0, 144, 1.000) 120.000deg, 
        rgba(200, 0, 160, 1.000) 150.000deg, 
        rgba(212, 0, 178, 1.000) 180.000deg, 
        rgba(219, 0, 196, 1.000) 210.000deg, 
        rgba(220, 0, 213, 1.000) 240.000deg, 
        rgba(215, 0, 230, 1.000) 270.000deg, 
        rgba(204, 0, 246, 1.000) 300.000deg, 
        rgba(188, 3, 255, 1.000) 330.000deg, 
        rgba(167, 6, 255, 1.000) 360.000deg)`
      }}
    >
      <div className="container">
        <div className="headerContent">
          <h1 className="headerTitle">
            <span
              className="headerWith"
              style={{
                color: headerBgAnimAngle > 200 && headerBgAnimAngle < 325 ? "#eb36c0" : "black",
                textShadow: headerBgAnimAngle > 200 && headerBgAnimAngle < 325 ? shadow : "none"
              }}
            >
              With
            </span>
            <span
              className="headerStylo"
              style={{
                color: headerBgAnimAngle > 200 && headerBgAnimAngle < 325 ? "black" : "#eb36c0",
                textShadow: headerBgAnimAngle > 200 && headerBgAnimAngle < 325 ? "none" : shadow
              }}
            >
              Stylo
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
}
