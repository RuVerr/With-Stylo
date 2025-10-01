import React from "react";

import "./navigationLinks.scss";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "Install",
    to: "/install"
  },
  {
    title: "Documentation",
    to: "/documentation"
  }
];
export default function NavigationLinks({ className, onclick }) {
  return (
    <ul className={className}>
      {links.map((link, i) => (
        <li key={i} className="navigationItem">
          <NavLink to={link.to} className="navigationLink" onClick={onclick}>
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
