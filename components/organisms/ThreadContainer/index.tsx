import React from "react";
import styled from "styled-components";
import { Tag } from "../../atoms/Tag";
import UserName from "../../atoms/UserName";
import ThreadTrend from "../../molecules/ThreadTrend";

interface ThreadContainerProps {
  title: String;
  tags: Array<String>;
  userName: String;
  bounty: Number;
  trend: Object;
}

const ThreadTitle = styled.span`
  ${(props) => props.theme.typography.Heading3};
  margin-right: 12px;
`;

const ThreadBounty = styled.span`
  ${(props) => props.theme.typography.Captions};
  padding: 3px;
  background-color: #69f0ae;
  color: "#004D40";
  border-radius: 2px;
  width: 29px;
  text-align: "center";
  height: 21px;
`;

const ThreadContainer = styled.div`
  position: relative;
  padding: 13px 26px;
  border: 1px solid #e0e0e0;
  background-color: white;
  border-right: none;
  border-left: none;
`;

const ThreadTime = styled.span`
  ${(props) => props.theme.typography.Captions};
  margin-left: 18px;
  color: #9e9e9e;
  text-align: right;
`;

const index: React.FC<ThreadContainerProps> = (props) => {
  return (
    <ThreadContainer>
      <div style={{ marginBottom: 11 }}>
        <ThreadTitle>{props.title}</ThreadTitle>
        <ThreadBounty>+{props.bounty}</ThreadBounty>
      </div>

      {props.tags.map((tag, i) => (
        <Tag key={i} style={{ marginRight: "8px", fontWeight: 600 }} label={tag} />
      ))}

      <div style={{ position: "absolute", right: 18, top: 13 }}>
        <div style={{ marginBottom: 8 }}>
          <ThreadTrend label="조회" style={{ marginRight: 18 }} count={props.trend.view} />
          <ThreadTrend label="좋아요" style={{ marginRight: 18 }} count={props.trend.like} />
          <ThreadTrend label="답변" count={props.trend.answerCount} />
        </div>

        <div style={{ textAlign: "right" }}>
          <UserName url="/" name={props.userName} />
          <ThreadTime>1시간 전</ThreadTime>
        </div>
      </div>
    </ThreadContainer>
  );
};

export default index;
