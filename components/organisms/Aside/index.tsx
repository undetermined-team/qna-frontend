import React from "react";
import { Space } from "../../../public/assets/SvgIcons";
import AsideContainer from "../../molecules/AsideContainer";
import UserSummary from "../../molecules/UserSummary";
import RecentQuestion from "../../molecules/RecentQuestion";
import {
  AsideLayout,
  AsideTag,
  RecentQuestionWrapper,
  BountyRankWrapper,
  AsideTagWrapper,
  AsideFooter,
  AsideFooterText,
  Brand,
  FooterWrapper,
} from "./styles";

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
      <div>
        <AsideContainer title="검색한 태그" subButtonText="수정하기" onTextClick={onTextButton}>
          <AsideTagWrapper>
            <AsideTag label="javascript" />
            <AsideTag label="node.js" />
            <AsideTag label="svelte" />
            <AsideTag label="next.js" />
            <AsideTag label="java" />
            <AsideTag label="ruby" />
            <AsideTag label="react" />
          </AsideTagWrapper>
        </AsideContainer>

        <Space />

        <AsideContainer title="최근에 본 질문" subButtonText="모두 보기" onTextClick={onTextButton}>
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

        <Space />

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
      </div>

      <AsideFooter>
        <FooterWrapper>
          <AsideFooterText>서비스 정보</AsideFooterText>
          <AsideFooterText>개인정보 보호방침</AsideFooterText>
        </FooterWrapper>

        <FooterWrapper>
          <AsideFooterText>이용약관</AsideFooterText>
          <AsideFooterText>제안하기</AsideFooterText>
        </FooterWrapper>

        <Brand>@2022. Haystack</Brand>
      </AsideFooter>
    </AsideLayout>
  );
};

export default index;
