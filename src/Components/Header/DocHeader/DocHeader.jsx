import React from "react";

import "./docHeader.scss";
import WithStyloSpan from "../../WithStyloSpan/WithStyloSpan";
export default function DocHeader() {
  return (
    <header className="headerDocumentation">
      <div className="container">
        <div className="documentationHeaderContent">
          <h1 className="headerDocumentationTitle">
            Documentation <WithStyloSpan />
          </h1>
        </div>
      </div>
    </header>
  );
}
