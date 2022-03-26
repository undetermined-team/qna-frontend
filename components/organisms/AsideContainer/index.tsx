import React from "react";
import styled from "styled-components";
import { FilterButton } from "../../atoms/FilterButton";

const Title = styled.strong`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  height: 15px;
`;

interface AsideProps {
  title: String;
  subButtonText: String;
  onTextClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
  children?: React.ReactNode;
}

const index: React.FC<AsideProps> = (props) => {
  return (
    <aside style={{ paddingTop: "18px" }}>
      <div style={{ marginBottom: 9, position: "relative" }}>
        <Title>{props.title}</Title>

        <FilterButton
          sx={{
            position: "absolute",
            color: "#FF8F00",
            height: "15px",
            right: 0,
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 12,
          }}
          variant="text"
        >
          {props.subButtonText}
        </FilterButton>
      </div>

      <div style={{ width: 220 }}>{props.children}</div>
    </aside>
  );
};

export default index;
