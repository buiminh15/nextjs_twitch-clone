import React from "react";
import SideMenu from "./SideMenu";

function Layout({ children }) {
  return (
    <div className="pt-[50px] w-full flex">
      <SideMenu />
      <div className=" ml-14 sm:ml-16 xl:ml-[15rem] w-full h-full">{children}</div>
    </div>
  );
}

export default Layout;
