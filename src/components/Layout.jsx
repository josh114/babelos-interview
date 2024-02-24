import React from "react";
import { Outlet } from "react-router-dom";
import PageLeft from "./PageLeft";
import Topbar from "./Topbar";
import Stepper from "./Stepper";
import { useLocation } from "react-router-dom";
import SmallScreenTopBar from "./SmallScreenTopBar";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="layout">
      <div className="layout_page-left">
        <PageLeft />
      </div>
      <div className="layout_page-right">
        <Topbar />
        <SmallScreenTopBar />
        <div className="layout_page-body">
          {pathname === "/" && <Stepper />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
