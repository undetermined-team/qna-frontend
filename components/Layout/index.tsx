import React from "react";
import Nav from "../organisms/Nav/index";
import { LayoutContainer } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
