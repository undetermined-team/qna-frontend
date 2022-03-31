import React from "react";
import { useRouter } from "next/router";
import Aside from "../../components/organisms/Aside";
import styled from "styled-components";
import { Tag } from "../../components/atoms/Tag";
import ThreadTrend from "../../components/molecules/ThreadTrend";
import UserSummary from "../../components/molecules/UserSummary";

const Thread = () => {
  const ThreadSection = styled.section`
    position: relative;
    min-width: 705px;
    border: 1px solid #d6d6d6;
    border-top: none;
    padding: 23px 26px;
  `;

  const ThreadTitle = styled.h1`
    ${(props) => props.theme.typography.Heading1};
    color: ${(props) => props.theme.palette.Gray900};
  `;

  return (
    <div style={{ display: "inline-flex" }}>
      <ThreadSection>
        <header style={{ marginBottom: 29 }}>
          <ThreadTitle>정적 클랙스의 static 변수값은 왜 변하지 않을까요?</ThreadTitle>

          <div style={{ marginTop: "10px" }}>
            <Tag label="android-studio" style={{ marginRight: "4px", fontWeight: 600 }} />
            <Tag label="java" style={{ marginRight: "4px", fontWeight: 600 }} />
          </div>
        </header>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 163,
            flexDirection: "row",
            alignItems: "flex-start",
            padding: 0,
          }}
        >
          <ThreadTrend label="조회" count={87} />
          <ThreadTrend label="좋아요" count={87} />
          <ThreadTrend label="답변" count={3} />
        </div>

        <UserSummary
          userName="jojorabbit21"
          bounty={8750}
          style={{ marginBottom: 14, position: "absolute", right: 26 }}
        />
      </ThreadSection>

      <Aside />
    </div>
  );
};

export default Thread;
