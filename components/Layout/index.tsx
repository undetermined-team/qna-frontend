import React from "react";
import Nav from "../organisms/Nav/index";
import { LayoutContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
