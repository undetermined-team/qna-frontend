import React from "react";
import Nav from "./Nav/index";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
