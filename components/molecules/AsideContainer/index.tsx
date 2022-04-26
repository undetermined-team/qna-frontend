import React from "react";
import Button from "../../atoms/Button";
import { AsideWrapper, AsideHeader, AsideTitle, AsideChildren } from "./styles";

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

        <Button
          variant="text"
          style={{
            color: "#FF8F00",
            height: "15px",
            padding: 0,
            lineHeight: "14.06px",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 12,
          }}
          onClick={props.onTextClick}
        >
          {props.subButtonText}
        </Button>
      </AsideHeader>

      <AsideChildren>{props.children}</AsideChildren>
    </AsideWrapper>
  );
};

export default index;
