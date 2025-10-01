import React from "react";

import gitHubSvg from "../../images/Icon/github.svg";
import facebookSvg from "../../images/Icon/facebook.svg";
import instagram from "../../images/Icon/instagram.svg";
import linkedin from "../../images/Icon/linkedin.svg";
import upWork from "../../images/Icon/upwork.svg";

const socialIcon = [
  {
    link: "https://github.com/RuVerr",
    icon: gitHubSvg
  },
  {
    link: "https://www.facebook.com/ruverrrrr",
    icon: facebookSvg
  },
  {
    link: "https://www.instagram.com/ruver._/",
    icon: instagram
  },
  {
    link: "https://www.linkedin.com/in/rubo-vermishyan-9b7195373/",
    icon: linkedin
  },
  {
    link: "https://www.upwork.com/freelancers/~01d5deeed7a42f4d5a?mp_source=share",
    icon: upWork
  }
];

import "./footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <h2 className="developerTitle">Contacts</h2>
          <div className="footerListInAuthor">
            <ul className="footerList">
              {socialIcon.map((el, i) => (
                <li key={i} className="footerItem">
                  <a href={el.link} className="footerLink" target="blanc">
                    <img className="footerIconImg" src={el.icon} alt="icon" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="pfooter">
              • Created by Ruben Vermishyan
              <br />
              • © 2025 WithStylo. All rights reserved.
              <br />• Open-source project maintained by Ruben Vermishyan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
