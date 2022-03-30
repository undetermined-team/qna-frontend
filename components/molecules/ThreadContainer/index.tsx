import React from "react";
import styled from "styled-components";
import { Tag } from "../../atoms/Tag";
import UserName from "../../atoms/UserName";
import ThreadTrend from "../ThreadTrend";
import { ThreadBounty, ThreadContainer, ThreadTime, ThreadTitle } from "./styles";

interface ITrend {
  view: Number;
  like: Number;
  answerCount: Number;
}

export interface ThreadContainerProps {
  title: String;
  tags?: Array<String>;
  userName: String;
  bounty: Number;
  trend: ITrend;
}

const ThreadHeader = styled.header`
  max-width: 498px;
  margin-bottom: 11px;
`;

const ThreadInfoWrapper = styled.div`
  position: absolute;
  right: 18px;
  top: 13px;
`;

const index: React.FC<ThreadContainerProps> = (props) => {
  return (
    <ThreadContainer>
      <ThreadHeader>
        <ThreadTitle>{props.title}</ThreadTitle>
        <ThreadBounty>+{props.bounty}</ThreadBounty>
      </ThreadHeader>

      {props.tags.map((tag, i) => (
        <Tag key={i} style={{ marginRight: "8px", fontWeight: 600 }} label={tag} />
      ))}

      <ThreadInfoWrapper>
        <div style={{ marginBottom: 8 }}>
          <ThreadTrend label="조회" style={{ marginRight: 18 }} count={props.trend.view} />
          <ThreadTrend label="좋아요" style={{ marginRight: 18 }} count={props.trend.like} />
          <ThreadTrend label="답변" count={props.trend.answerCount} />
        </div>

        <div style={{ textAlign: "right" }}>
          <UserName url="/" name={props.userName} />
          <ThreadTime>1시간 전</ThreadTime>
        </div>
      </ThreadInfoWrapper>
    </ThreadContainer>
  );
};

export default index;
