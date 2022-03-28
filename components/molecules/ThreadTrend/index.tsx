import React from "react";
import styled from "styled-components";

const Label = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: right;
  margin-right: 4px;
  line-height: 14.06px;

  color: ${(props) => props.theme.palette.Gray600};
`;

const Count = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;

  color: ${(props) => props.theme.palette.Gray900};
`;

interface TrendProps {
  label: String;
  count: Number;
  style?: React.CSSProperties;
}

const index: React.FC<TrendProps> = (props) => {
  return (
    <span style={props.style}>
      <Label>{props.label}</Label>
      <Count>{props.count}</Count>
    </span>
  );
};

export default index;
