import React, { useState } from "react";

import { documentationInformation } from "../../../Data/data";
import { useDocsContent } from "../../../Store/DocumentationContent/DocumentationContentStore";

import sideBarIcon from "../../../images/Icon/sideBarIcon.png";

import "./documentationBar.scss";
import BgFocus from "../../../Components/bgFocus/bgFocus";

export default function DocumentationBar() {
  const setActiveId = useDocsContent((state) => state.setActiveId);
  const activeId = useDocsContent((state) => state.activeId);
  const [activeButton, setActiveButton] = useState("buttonActive");
  const [activeSideBar, setActiveSideBar] = useState("");
  const [bgFocusActive, setBgFocusActive] = useState(false);

  const handleSideBarToggle = () => {
    const newValue = activeSideBar === "sideBarDisable" ? "" : "sideBarDisable";
    setActiveSideBar(newValue);
    setBgFocusActive(newValue === "sideBarDisable");
  };

  return (
    <>
      <BgFocus isActive={bgFocusActive} isDisable={handleSideBarToggle}/>
      <section className={`documentationBar ${activeSideBar}`}>
        <div className="documentationBarContent">
          <ul className="documentationBarList">
            {documentationInformation.map((el, i) => (
              <li
                key={i}
                className="documentationBarItem"
                onClick={() => {
                  setActiveId(el.id), handleSideBarToggle();
                }}
              >
                <button className={`documentationButton ${el.id === activeId ? activeButton : ""}`}>{el.prefix}</button>
              </li>
            ))}
          </ul>
        </div>
        <button className="documentationSideBarButton" onClick={() => handleSideBarToggle()}>
          <img src={sideBarIcon} alt="Side bar icon" />
        </button>
      </section>
    </>
  );
}
