import React from "react";
import WithStyloSpan from "../../../Components/WithStyloSpan/WithStyloSpan";

import example from "../../../images/Example/example.png";

import "./whyWithStylo.scss";
import "./whyWithStyloMedia.scss";

export default function WhyWithStylo() {
  return (
    <section className="whyWithStylo">
      <div className="container">
        <div className="whyWithStyloContent">
          <div className="whyWithStyloTitleBox">
            <h3 className="whyWithStyloTitle">
              The <WithStyloSpan shadow={"none"}/> Difference
            </h3>
          </div>
          <div className="whyWithStyloMainBox">
            <ul className="whyWithStylolist">
              <h2 className="whyWithStylolistTitle">
                With Stylo is built to make your workflow faster, cleaner, and more intuitive. By installing the With
                Stylo library together with the With Stylo Snippets extension, you can style your project in just one
                line. Simply type the with prefix and you’ll instantly see suggestions with available tools and helpers.
              </h2>
              <li className="pWhyWithStyloItem">
                {" "}
                • Efficiency – Save time by writing styles with ready-to-use mixins instead of repeating long code
                blocks.
              </li>
              <li className="pWhyWithStyloItem">
                {" "}
                • Self-documenting – Every command automatically generates a comment above it, showing what it does and
                which arguments it accepts.
              </li>
              <li className="pWhyWithStyloItem">
                {" "}
                • Clean separation – HTML is only for structure, SCSS only for styles, and JS only for logic. No need to
                clutter your HTML with endless class names like in other approaches.
              </li>
              <li className="pWhyWithStyloItem">
                {" "}
                • One-line power – Entire layout, typography, spacing, or animation utilities can be applied with a
                single mixin.
              </li>
              <li className="pWhyWithStyloItem">
                {" "}
                • Consistency – Standardized patterns across your project help keep the codebase clean and maintainable.
              </li>
              <li className="pWhyWithStyloItem">
                {" "}
                • Team-friendly – Developers instantly understand the logic behind your styles without digging through
                documentation.
              </li>
              <li className="pWhyWithStyloItem">
                {" "}
                • Unlike other solutions, With Stylo was created so you don’t have to write styles through overloaded
                HTML class names. Instead, you keep your structure semantic and let SCSS handle the design. Combined
                with automatic comments, your code becomes self-documented, making onboarding and collaboration much
                easier.
              </li>
            </ul>
            <div className="withStyloImgBox">
              <img className="withStyloImg" src={example} alt="With stylo example" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
