import React from "react";
import LeftBar from "../components/shared/LeftBar";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {


  return (
    <div className="flex overflow-hidden w-full h-screen">
      <LeftBar />
      <div className="bg-[#fcf4f1] ml-[60px] md:ml-0 h-full flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
