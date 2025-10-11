// src/main.jsx
import React from "react";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

// Лоадер из HTML
window.addEventListener("load", () => {
  const loader = document.getElementById("screenLoader");
  if (loader) {
    loader.remove();
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
