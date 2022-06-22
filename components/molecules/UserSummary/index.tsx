import React from "react";
import { EmptyProfile } from "../../../public/assets/SvgIcons";
import UserName from "../../atoms/UserName";
import {
  UserSummaryWrapper,
  ProfileWrapper,
  Rank,
  ProfileInfo,
  Bounty,
  UserSummaryContainer,
} from "./styles";
import Link from "next/link";

interface UserSummaryProps {
  userName: String;
  bounty: Number;
  profile?: string;
  index?: Number;
  className?: string;
}

const index: React.FC<UserSummaryProps> = (props) => {
  const getRankEmoji = (index) => {
    const rankEmoji = {
      1: "🥇",
      2: "🥈",
      3: "🥉",
    };

    return rankEmoji[index] || index;
  };

  return (
    <UserSummaryContainer>
      <Link href="/Profile/1">
        <UserSummaryWrapper className={props.className}>
          <ProfileWrapper>
            {props.profile ? <img width={36} height={36} src={props.profile} /> : <EmptyProfile />}
          </ProfileWrapper>

          <Rank>{getRankEmoji(props.index)}</Rank>

          <ProfileInfo>
            <UserName name={props.userName} url="/Profile/1" />
            <Bounty>{props.bounty.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}</Bounty>
          </ProfileInfo>
        </UserSummaryWrapper>
      </Link>
    </UserSummaryContainer>
  );
};

export default index;
