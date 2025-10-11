import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Layout from "../pages/Layout/Layout";
import Install from "../pages/Install/Install";
import Documentation from "../pages/Documentation/Documentation";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/install" element={<Install />} />
          <Route path="/documentation" element={<Documentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
