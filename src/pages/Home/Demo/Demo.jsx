import React from "react";

import demoVideo1 from "../../../images/Example/video/withDemo1.mp4";
import demoVideo2 from "../../../images/Example/video/withstylodemo2.mp4";

import "./demo.scss";
export default function Demo() {
  return (
    <section className="demo">
      <div className="container">
        <div className="demoContent">
          <h2 className="demoTitle">Demonstration</h2>
          {[demoVideo1, demoVideo2].map((video, i) => (
            <div key={i} className="videoBox">
              <video autoPlay muted loop playsInline>
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
