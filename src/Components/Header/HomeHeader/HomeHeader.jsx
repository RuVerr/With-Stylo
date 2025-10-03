import React, { useRef, useState } from "react";

import "./HomeHeader.scss";

export default function HomeHeader() {
  let [headerBgAnimAngle, setHeaderBgAnimAngle] = useState(15);
  const shadow = "0 0 1px black";
  const prevMouseX = useRef(null);
  const prevTouchY = useRef(null);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    if (prevMouseX.current != null) {
      const angleSpeed = 6;
      if (x > prevMouseX.current) {
        setHeaderBgAnimAngle((prev) => (prev + angleSpeed) % 365);
      } else if (x < prevMouseX.current) {
        setHeaderBgAnimAngle((prev) => (prev - angleSpeed + 365) % 365);
      }
    }

    prevMouseX.current = x;
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 0) return;
    const touchY = e.touches[0].clientY;
    const angleSpeed = 5;

    if (prevTouchY.current != null) {
      if (touchY < prevTouchY.current) {
        setHeaderBgAnimAngle((prev) => (prev + angleSpeed) % 365);
      } else if (touchY > prevTouchY.current) {
        setHeaderBgAnimAngle((prev) => (prev - angleSpeed + 365) % 365);
      }
    }

    prevTouchY.current = touchY;
  };

  return (
    <header
      className="header"
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
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
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
