import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface IProps {
  url: string;
  name?: String;
}

const NickName = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.LightBlueA700};
`;

const UserName: React.FC<IProps> = (props) => {
  return (
    <Link href={props.url}>
      <NickName>{props.name}</NickName>
    </Link>
  );
};

export default UserName;
