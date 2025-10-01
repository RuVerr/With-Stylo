import React, { useState } from "react";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import { Outlet, useLocation, useParams } from "react-router-dom";

import HomeHeader from "../../Components/Header/HomeHeader/HomeHeader";
import Footer from "../../Components/Footer/Footer";
import InstallHeader from "../../Components/Header/InstallHeader/InstallHeader";
import DocHeader from "../../Components/Header/DocHeader/DocHeader";

export default function Layout() {
  const location = useLocation();

  const headers = {
    "/": <HomeHeader />,
    "/install": <InstallHeader />,
    "/documentation": <DocHeader />
  };

  const currentHeader = headers[location.pathname] || null;

  return (
    <div>
      <NavigationMenu />
      {currentHeader}
      <Outlet />
      <Footer />
    </div>
  );
}
