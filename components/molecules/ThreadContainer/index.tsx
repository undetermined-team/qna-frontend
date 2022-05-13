import Link from "next/link";
import React from "react";
import Tag from "../../atoms/Tag";
import UserName from "../../atoms/UserName";
import ThreadTrend from "../ThreadTrend";
import {
  TagAndInfoContainer,
  TagWrapper,
  ThreadBounty,
  ThreadContainer,
  ThreadHeader,
  ThreadTime,
  ThreadTitle,
} from "./styles";

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
  createAt: string;
}

const index: React.FC<ThreadContainerProps> = (props) => {
  const ThreadDateRender = ({ date }: { date: string }) => {
    const craeteAtToDate = new Date(date);

    if (craeteAtToDate.toDateString() === new Date().toDateString()) {
      return (
        <span>
          {craeteAtToDate.getHours()}:{craeteAtToDate.getMinutes()}
        </span>
      );
    } else {
      return <span>{craeteAtToDate.toISOString().substring(2, 10)}</span>;
    }
  };

  return (
    <ThreadContainer>
      <ThreadHeader>
        <div>
          <Link href="/Thread/1">
            <ThreadTitle>{props.title}</ThreadTitle>
          </Link>
          <ThreadBounty>+{props.bounty}</ThreadBounty>
        </div>

        <div>
          <ThreadTrend label="조회" style={{ marginRight: 18 }} count={props.trend.view} />
          <ThreadTrend label="좋아요" style={{ marginRight: 18 }} count={props.trend.like} />
          <ThreadTrend label="답변" count={props.trend.answerCount} />
        </div>
      </ThreadHeader>

      <TagAndInfoContainer>
        <TagWrapper>
          {props.tags.map((tag, i) => (
            <Tag key={i} style={{ marginRight: 4, marginBottom: 4, fontWeight: 600 }} label={tag} />
          ))}
        </TagWrapper>

        <div>
          <UserName url="/" name={props.userName} />
          <ThreadTime>
            <ThreadDateRender date={props.createAt} />
          </ThreadTime>
        </div>
      </TagAndInfoContainer>
    </ThreadContainer>
  );
};

export default index;
