import React from "react";
import { Space } from "../../../public/assets/SvgIcons";
import AsideContainer from "../../molecules/AsideContainer";
import UserSummary from "../../molecules/UserSummary";
import RecentQuestion from "../../molecules/RecentQuestion";
import { AsideLayout, AsideTag, RecentQuestionWrapper, BountyRankWrapper } from "./styles";

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

const onTextButton = (e) => {};
const onDelete = () => {};

const index = () => {
  return (
    <AsideLayout>
      <AsideContainer title="검색한 태그" subButtonText="수정하기" onTextClick={onTextButton}>
        <AsideTag label="javascript" />
        <AsideTag label="node.js" />
        <AsideTag label="svelte" />
        <AsideTag label="next.js" />
        <AsideTag label="java" />
        <AsideTag label="ruby" />
        <AsideTag label="react" />
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
