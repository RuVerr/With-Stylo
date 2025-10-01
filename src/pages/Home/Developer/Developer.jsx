import React from "react";
import WithStyloSpan from "../../../Components/WithStyloSpan/WithStyloSpan";

import developer1 from "../../../images/Developer/developer1.jpeg";

import "./developer.scss";
import "./developerMedia.scss";
export default function Developer() {
  return (
    <section className="developer">
      <div className="container">
        <div className="developerContent">
          <h2 className="developerTitleMain">Developer</h2>
          <div className="developerImgBox">
            <img src={developer1} alt="Developer" className="developerImg" />
            <div className="developerTitleInParagraph">
              <h3 className="developerTitle">
                Creator of <WithStyloSpan shadow={"none"} />
              </h3>
              <h4 className="developerTitle2">Ruben Vermishyan</h4>
              <p className="pDeveloper">
                I am a Front-End Engineer and the creator of WithStylo, a SCSS utility library that helps developers
                write cleaner and more structured styles. I focus on building modern, well-organized interfaces and
                enjoy creating tools that make the development process more efficient and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
