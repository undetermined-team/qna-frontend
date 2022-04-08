import React from "react";
import { EmptyProfile } from "../../../assets/SvgIcons";
import UserName from "../../atoms/UserName";
import { UserSummaryContainer, ProfileWrapper, Rank, ProfileInfo, Bounty } from "./styles";
import Link from "next/link";

interface UserSummaryProps {
  userName: String;
  bounty: Number;
  profile?: string;
  index?: Number;
  style?: React.CSSProperties;
}

const index: React.FC<UserSummaryProps> = (props) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <Link href="/">
        <UserSummaryContainer style={props.style}>
          <ProfileWrapper>
            {props.profile ? <img width={36} height={36} src={props.profile} /> : EmptyProfile}
          </ProfileWrapper>

          <Rank>{props.index}</Rank>

          <ProfileInfo>
            <UserName name={props.userName} url="/" />
            <Bounty>{props.bounty.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}</Bounty>
          </ProfileInfo>
        </UserSummaryContainer>
      </Link>
    </div>
  );
};

export default index;
