import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface UserNameProps {
  url: string;
  name: String;
}

const NickName = styled.a`
  font-style: normal;
  line-height: 15.23px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.LightBlueA700};
`;

const UserName: React.FC<UserNameProps> = (props) => {
  return (
    <Link href={props.url}>
      <NickName>{props.name}</NickName>
    </Link>
  );
};

export default UserName;
