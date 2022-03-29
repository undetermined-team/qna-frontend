import React from "react";
import Nav from "../organisms/Nav/index";
import { LayoutContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
