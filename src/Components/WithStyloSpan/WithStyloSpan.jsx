import React from "react";

import "./withStyloSpan.scss";

export default function WithStyloSpan({ shadow }) {
  return (
    <div className="mainWithStylo">
      <span className="with">With</span>
      <span className="stylo" style={{ textShadow: shadow }}>
        Stylo
      </span>
    </div>
  );
}
