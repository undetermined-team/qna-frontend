import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import styled from "styled-components";

const Label = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: right;
  margin-right: 4px;

  color: ${(props) => props.theme.palette.Gray600};
`;

const Count = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  color: ${(props) => props.theme.palette.Gray900};
`;

interface TrendProps {
  label: String;
  count: Number;
  margin?: CSSProperties;
}

const index: React.FC<TrendProps> = (props) => {
  const margin = { marginRight: props.margin };

  return (
    <span style={margin}>
      <Label>{props.label}</Label>
      <Count>{props.count}</Count>
    </span>
  );
};

export default index;
