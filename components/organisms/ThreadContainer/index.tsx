import React from "react";
import { Tag } from "../../atoms/Tag";
import UserName from "../../atoms/UserName";
import ThreadTrend from "../../molecules/ThreadTrend";
import { ThreadBounty, ThreadContainer, ThreadTime, ThreadTitle } from "./styles";

interface ThreadContainerProps {
  title: String;
  tags: Array<String>;
  userName: String;
  bounty: Number;
  trend: Object;
}

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
