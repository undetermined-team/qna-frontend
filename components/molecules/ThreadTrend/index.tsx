import React from "react";
import styled from "styled-components";

const Label = styled.span`
  ${(props) => props.theme.typography.Footnote2}
  text-align: right;
  margin-right: 4px;

  color: ${(props) => props.theme.palette.Gray600};
`;

const Count = styled.span`
  ${(props) => props.theme.typography.Footnote2}

  color: ${(props) => props.theme.palette.Gray900};
`;

interface TrendProps {
  label: String;
  count: Number;
  className?: string;
}

const index: React.FC<TrendProps> = (props) => {
  return (
    <span className={props.className}>
      <Label>{props.label}</Label>
      <Count>{props.count}</Count>
    </span>
  );
};

export default index;
