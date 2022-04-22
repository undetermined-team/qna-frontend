import React from "react";
import Tag from "../../../atoms/Tag";
import ThreadTrend from "../../../molecules/ThreadTrend";
import UserSummary from "../../../molecules/UserSummary";
import QuestionButtonPack from "../../../molecules/QuestionButtonPack";
import {
  ThreadHeader,
  ThreadTitle,
  TagWrapper,
  ThreadInfoContainer,
  ThreadTrendWrapper,
  ThreadCreateAt,
} from "./styles";

const index = () => {
  return (
    <ThreadHeader>
      <ThreadTitle>정적 클랙스의 static 변수값은 왜 변하지 않을까요?</ThreadTitle>

      <TagWrapper>
        <Tag label="android-studio" style={{ marginRight: "4px", fontWeight: 600 }} />
        <Tag label="java" style={{ marginRight: "4px", fontWeight: 600 }} />
      </TagWrapper>

      <ThreadInfoContainer>
        <div>
          <ThreadTrendWrapper>
            <ThreadTrend label="조회" count={87} />
            <ThreadTrend label="좋아요" count={87} />
            <ThreadTrend label="답변" count={3} />
          </ThreadTrendWrapper>

          <QuestionButtonPack shareLink="google.com" />
        </div>

        <div>
          <UserSummary
            userName="jojorabbit21"
            bounty={8750}
            style={{ marginBottom: 10, marginTop: 15 }}
          />
          <ThreadCreateAt>2022-03-03 18:47 에 작성됨</ThreadCreateAt>
        </div>
      </ThreadInfoContainer>
    </ThreadHeader>
  );
};

export default index;
