import React from "react";
import { Space } from "../../../assets/SvgIcons";
import { Tag } from "../../atoms/Tag";
import styled from "styled-components";
import AsideContainer from "../../molecules/AsideContainer";
import UserSummary from "../../molecules/UserSummary";

const AsideLayout = styled.aside`
  border-right: 1px solid #d6d6d6;
  padding: 0px 16px;
`;

const exmapleBountyRank = [
  {
    userName: "jojorabbit21",
    bounty: 8750,
    profileImage:
      "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/48/User-blue-icon.png",
  },
  {
    userName: "naerkf0123",
    bounty: 7417,
  },
  {
    userName: "hardoop_man",
    bounty: 7104,
  },
  {
    userName: "mandalore808",
    bounty: 6415,
  },
  {
    userName: "gookbab5000",
    bounty: 5535,
  },
];

const onTextButton = (e) => {};

const index = () => {
  return (
    <AsideLayout>
      <AsideContainer title="검색한 태그" subButtonText="수정하기" onTextClick={onTextButton}>
        <Tag style={{ marginRight: 6, marginBottom: 4, fontWeight: 600 }} label="javascript" />
        <Tag style={{ marginRight: 6, marginBottom: 4, fontWeight: 600 }} label="node.js" />
        <Tag style={{ marginRight: 6, marginBottom: 4, fontWeight: 600 }} label="svelte" />
        <Tag style={{ marginRight: 6, marginBottom: 4, fontWeight: 600 }} label="next.js" />
        <Tag style={{ marginRight: 6, marginBottom: 4, fontWeight: 600 }} label="java" />
        <Tag style={{ marginRight: 6, marginBottom: 4, fontWeight: 600 }} label="ruby" />
        <Tag style={{ marginRight: 6, marginBottom: 4, fontWeight: 600 }} label="react" />
      </AsideContainer>

      {Space}

      <AsideContainer
        title="최근에 본 질문"
        subButtonText="전체보기"
        onTextClick={onTextButton}
      ></AsideContainer>

      {Space}

      <AsideContainer title="명성 순위" subButtonText="모두 보기" onTextClick={onTextButton}>
        {exmapleBountyRank.map((profile, i) => (
          <UserSummary
            userName={profile.userName}
            bounty={profile.bounty}
            profile={profile.profileImage}
            index={i + 1}
            key={i}
            style={{ marginBottom: 14 }}
          />
        ))}
      </AsideContainer>
    </AsideLayout>
  );
};

export default index;
