import Link from "next/link";
import React from "react";
import UserName from "../../atoms/UserName";
import ThreadTrend from "../ThreadTrend";
import {
  TagAndInfoContainer,
  TagWrapper,
  ThreadBounty,
  ThreadContainer,
  ThreadHeader,
  ThreadTag,
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
        <ThreadTime dateTime={craeteAtToDate.toISOString()}>
          {craeteAtToDate.getHours()}:{craeteAtToDate.getMinutes()}
        </ThreadTime>
      );
    } else {
      return (
        <ThreadTime dateTime={craeteAtToDate.toISOString()}>
          {craeteAtToDate.toISOString().substring(2, 10)}
        </ThreadTime>
      );
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
            <ThreadTag key={i} label={tag} />
          ))}
        </TagWrapper>

        <div>
          <UserName url="/" name={props.userName} />
          <ThreadDateRender date={props.createAt} />
        </div>
      </TagAndInfoContainer>
    </ThreadContainer>
  );
};

export default index;
