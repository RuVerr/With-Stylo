import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import NavigationLinks from "./NavigationLinks/NavigationLinks";

const burgerIcon = (
  <svg
    width="40px"
    height="40px"
    viewBox="-2.4 -2.4 28.80 28.80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
    stroke="#000000"
    strokeWidth="1.464"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M5 8H13.75M5 12H19M10.25 16L19 16"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

const burgerIconActive = (
  <svg
    width="40px"
    height="40px"
    viewBox="-2.4 -2.4 28.80 28.80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
    stroke="#000000"
    strokeWidth="1.464"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M5 8H13.75M5 12H19M10.25 16L19 16"
        stroke="#eb36c0"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

import "./navigation.scss";
import "./navigationMedia.scss";
import BgFocus from "../bgFocus/bgfocus";

export default function NavigationMenu() {
  const [burgerShow, setBurgerShow] = useState(false);
  const [burgerShowAnimStyle, setBurgerShowAnimStyle] = useState("");
  const [burgerAnimStart, setBurgerAnimStart] = useState(null);

  const [scrollHidden, setScrollHidden] = useState(false);
  const [bgFocusActive, setBgFocusActive] = useState(false);

  const handleShowBurger = () => {
    if (burgerAnimStart) return;
    setBurgerAnimStart(true);

    const newValue = !burgerShow;

    setBurgerShow(newValue);
    setBurgerShowAnimStyle(newValue ? "translateX(-40px)" : "translateX(180px)");
    setBgFocusActive(newValue);
  };

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 200 && lastScroll > 200) {
        if (currentScroll > lastScroll) {
          setScrollHidden(true);
        } else if (currentScroll < lastScroll) {
          setScrollHidden(false);
        }
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BgFocus isActive={bgFocusActive} isDisable={handleShowBurger} />
      <nav className={`navigationNav ${scrollHidden ? "scrollHidden" : "scrollShow"}`}>
        <div className="container">
          <div className="navigationMenuContent">
            <Link to={"/"} className="navigationLogo">
              With<span className="logoColorStylo">Stylo</span>
            </Link>
            <NavigationLinks className={"navigationList"} />
            <button className="burgerButton" onClick={handleShowBurger}>
              {burgerShow ? burgerIconActive : burgerIcon}
            </button>
          </div>
          <div
            className="burgerMenu"
            style={{ transform: burgerShowAnimStyle }}
            onTransitionEnd={() => setBurgerAnimStart(false)}
          >
            <NavigationLinks className="burgerMenuItem" onclick={handleShowBurger} />
          </div>
        </div>
      </nav>
    </>
  );
}
