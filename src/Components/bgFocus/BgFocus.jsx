import React, { useEffect, useState } from "react";

import "./bgFocus.scss";
export default function BgFocus({ isActive, isDisable }) {
  const [visible, setVisible] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [blurFilter, setBlurFilter] = useState("0px");

  const body = document.body;
  const html = document.documentElement;

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      setTimeout(() => {
        setBgColor("#0000008c");
        setBlurFilter("blur(15px)");
      }, 100);
    } else {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
      setBgColor("transparent");
      setBlurFilter("blur(0px)");
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [isActive]);
  return visible ? (
    <div
      className="bgFocus"
      style={{ backgroundColor: bgColor, backdropFilter: blurFilter, WebkitBackdropFilter: blurFilter }}
      onClick={isDisable}
    />
  ) : null;
}
