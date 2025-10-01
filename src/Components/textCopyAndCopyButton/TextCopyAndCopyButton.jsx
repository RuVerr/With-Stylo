import React from "react";

import copyIconSvg from "../../images/Icon/copyIcon.svg";
import linkIconSvg from "../../images/Icon/linkIcon.svg";

import "./textCopyAndCopyButton.scss";
export default function TextCopyAndCopyButton({ el, trueCopy, linkTo, width }) {
  const handleTrueCopy = () => {
    if (trueCopy) {
      navigator.clipboard.writeText(el);
    }
  };
  return (
    <div className="textCopyAndCopyButton" style={{ width: width }}>
      <div className="copyTextBar">
        <div className="copyTextBarDecoration">
          <span className="radius" />
          <span className="radius" />
          <span className="radius" />
        </div>
        {trueCopy && (
          <button className="copyButton" onClick={handleTrueCopy}>
            <img className="copyIconImg" src={copyIconSvg} alt="Copy Icon" />
          </button>
        )}
        {!trueCopy && linkTo && (
          <a
            className="linkButton"
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            alt="Link in VScode extension"
          >
            <img className="copyIconImg" src={linkIconSvg} alt="Copy Icon" />
          </a>
        )}
      </div>
      <pre className="copyText">{el}</pre>
    </div>
  );
}
