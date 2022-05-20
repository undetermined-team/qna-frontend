import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import { AsideWrapper, AsideHeader, AsideTitle, AsideChildren, AsideMoreButton } from "./styles";

interface AsideProps {
  title: String;
  subButtonText: String;
  onTextClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const index: React.FC<AsideProps> = (props) => {
  return (
    <AsideWrapper>
      <AsideHeader>
        <AsideTitle>{props.title}</AsideTitle>

        <AsideMoreButton variant="text" onClick={props.onTextClick}>
          {props.subButtonText}
        </AsideMoreButton>
      </AsideHeader>

      <AsideChildren>{props.children}</AsideChildren>
    </AsideWrapper>
  );
};

export default index;
