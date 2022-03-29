import React from "react";
import { FilterButton } from "../../atoms/FilterButton";
import {
  AsideWrapper,
  AsideHeader,
  AsideTitle,
  AsideSubButtonStyle,
  AsideChildren,
} from "./styles";

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

        <FilterButton sx={AsideSubButtonStyle} variant="text" onClick={props.onTextClick}>
          {props.subButtonText}
        </FilterButton>
      </AsideHeader>

      <AsideChildren>{props.children}</AsideChildren>
    </AsideWrapper>
  );
};

export default index;
