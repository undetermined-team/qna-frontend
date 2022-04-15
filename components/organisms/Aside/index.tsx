import React from "react";
import { DeleteIcon, Space } from "../../../assets/SvgIcons";
import { Tag } from "../../atoms/Tag";
import styled from "styled-components";
import AsideContainer from "../../molecules/AsideContainer";
import UserSummary from "../../molecules/UserSummary";
import RecentQuestion from "../../molecules/RecentQuestion";

const AsideLayout = styled.aside`
  border-right: 1px solid #d6d6d6;
  padding: 0px 16px;
  height: 100vh;
`;

const exmapleBountyRank = [
  {
    userName: "jojorabbit21",
    bounty: 8750,
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

const RecentQuestionWrapper = styled.ol`
  padding: 10px 9px;
  background-color: #eceff1;
  max-height: 96px;
  border-radius: 3px;
`;

const BountyRankWrapper = styled.div`
  padding: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 254px;
`;

const onTextButton = (e) => {};
const onDelete = () => {};

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

      <AsideContainer title="최근에 본 질문" subButtonText="전체보기" onTextClick={onTextButton}>
        <RecentQuestionWrapper>
          <RecentQuestion
            title="위도/경도 불러오는 함수 질문드립니다."
            link="/"
            onDelete={onDelete}
          />

          <RecentQuestion
            title="위도/경도 불러오는 함수 질문드립니다."
            link="/"
            onDelete={onDelete}
          />

          <RecentQuestion
            title="위도/경도 불러오는 함수 질문드립니다."
            link="/"
            onDelete={onDelete}
          />
        </RecentQuestionWrapper>
      </AsideContainer>

      {Space}

      <AsideContainer title="명성 순위" subButtonText="모두 보기" onTextClick={onTextButton}>
        <BountyRankWrapper>
          {exmapleBountyRank.map((profile, i) => (
            <UserSummary
              userName={profile.userName}
              bounty={profile.bounty}
              index={i + 1}
              key={i}
            />
          ))}
        </BountyRankWrapper>
      </AsideContainer>
    </AsideLayout>
  );
};

export default index;
