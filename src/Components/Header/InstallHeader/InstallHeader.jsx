import React from "react";

import "./installHeader.scss";
import WithStyloSpan from "../../WithStyloSpan/WithStyloSpan";
export default function InstallHeader() {
  return (
    <header className="headerInstall">
      <div className="container">
        <div className="installHeaderContent">
          <h1 className="headerInstallTitle">
            Install <WithStyloSpan />
          </h1>
        </div>
      </div>
    </header>
  );
}
