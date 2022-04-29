import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { VectorIcon } from "../../../public/assets/SvgIcons";
import Tag from "../../atoms/Tag";
import UserName from "../../atoms/UserName";
import ThreadTrend from "../ThreadTrend";
import {
  TagShowMore,
  TagWrapper,
  ThreadBounty,
  ThreadContainer,
  ThreadHeader,
  ThreadInfoWrapper,
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
  const [overflowActive, setOverflowActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const tagWrapperRef = useRef<HTMLDivElement | null>(null);

  const isOverflowActive = (event: HTMLDivElement | null) => {
    return event.clientHeight > 24 || event.clientWidth > 479;
  };

  useEffect(() => {
    if (isOverflowActive(tagWrapperRef.current)) {
      setOverflowActive(true);
    }
  }, [tagWrapperRef]);

  const tagShowMoreHandler = () => {
    tagWrapperRef.current.style.height = `${(tagWrapperRef.current.clientHeight * 2).toString()}px`;
    setOpen(true);
  };

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
        <Link href="/Thread/1">
          <ThreadTitle>{props.title}</ThreadTitle>
        </Link>
        <ThreadBounty>+{props.bounty}</ThreadBounty>
      </ThreadHeader>

      <TagWrapper ref={tagWrapperRef}>
        {props.tags.map((tag, i) => (
          <Tag key={i} style={{ marginRight: 8, marginBottom: 4, fontWeight: 600 }} label={tag} />
        ))}

        {!isOpen && overflowActive && (
          <TagShowMore onClick={tagShowMoreHandler}>{VectorIcon}</TagShowMore>
        )}
      </TagWrapper>

      <ThreadInfoWrapper>
        <div style={{ marginBottom: 8 }}>
          <ThreadTrend label="조회" style={{ marginRight: 18 }} count={props.trend.view} />
          <ThreadTrend label="좋아요" style={{ marginRight: 18 }} count={props.trend.like} />
          <ThreadTrend label="답변" count={props.trend.answerCount} />
        </div>

        <div style={{ textAlign: "right" }}>
          <UserName url="/" name={props.userName} />
          <ThreadTime>
            <ThreadDateRender date={props.createAt} />
          </ThreadTime>
        </div>
      </ThreadInfoWrapper>
    </ThreadContainer>
  );
};

export default index;
