import React from "react";
import styled from "styled-components";
import { EmptyProfile } from "../../../assets/SvgIcons";
import UserName from "../../atoms/UserName";

interface UserSummaryProps {
  userName: String;
  bounty: Number;
  index?: Number;
  style?: React.CSSProperties;
}

const Bounty = styled.p`
  ${(props) => props.theme.typography.Captions};
  color: #616161;
  margin-top: 3px;
`;

const Rank = styled.span`
  ${(props) => props.theme.typography.Captions};
  margin-right: 9px;
`;

const index: React.FC<UserSummaryProps> = (props) => {
  return (
    <div style={{ display: "flex", height: 36, ...props.style }}>
      <p style={{ marginRight: 8 }}>{EmptyProfile}</p>

      <Rank>{props.index}</Rank>

      <div style={{ lineHeight: "15.23px" }}>
        <UserName name={props.userName} url="/" />
        <Bounty>{props.bounty.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}</Bounty>
      </div>
    </div>
  );
};

export default index;
