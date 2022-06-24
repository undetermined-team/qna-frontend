import React, { useEffect, useRef, useState } from "react";
import ThreadTrend from "../../../molecules/ThreadTrend";
import QuestionButtonPack from "../../../molecules/QuestionButtonPack";
import {
  ThreadHeader,
  ThreadTitle,
  TagWrapper,
  ThreadInfoContainer,
  ThreadTrendWrapper,
  ThreadCreateAt,
  ThreadHeaderTag,
  ThreadUserSummary,
} from "./styles";
import { TagShowMore } from "../../../molecules/ThreadContainer/styles";
import { VectorIcon } from "../../../../public/assets/SvgIcons";
import { TrendType } from "../../../../types/threadType";

interface ThreadHeaderProps {
  title: string;
  tags: Array<string>;
  threadTrend: TrendType;
  createAt: string;
}

const Index: React.FC<ThreadHeaderProps> = (props) => {
  const [overflowActive, setOverflowActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const tagWrapperRef = useRef<HTMLDivElement | null>(null);

  const isOverflowActive = (event: HTMLDivElement | null) => {
    return event.clientWidth > 653;
  };

  useEffect(() => {
    if (isOverflowActive(tagWrapperRef.current)) {
      setOverflowActive(true);
    }
  }, [tagWrapperRef]);

  const tagShowMoreHandler = () => {
    tagWrapperRef.current.style.height = `auto`;
    setOpen(true);
  };

  return (
    <ThreadHeader>
      <ThreadTitle>{props.title}</ThreadTitle>

      <div>
        <TagWrapper ref={tagWrapperRef}>
          {props.tags?.map((tag, i) => (
            <ThreadHeaderTag label={tag} key={i} />
          ))}
        </TagWrapper>

        {!isOpen && overflowActive && (
          <TagShowMore onClick={tagShowMoreHandler}>
            <VectorIcon />
          </TagShowMore>
        )}
      </div>

      <ThreadInfoContainer>
        <div>
          <ThreadTrendWrapper>
            <ThreadTrend label="조회" count={props.threadTrend?.view} />
            <ThreadTrend label="좋아요" count={props.threadTrend?.like} />
            <ThreadTrend label="답변" count={props.threadTrend?.answerCount} />
          </ThreadTrendWrapper>

          <QuestionButtonPack shareLink="google.com" />
        </div>

        <div>
          <ThreadUserSummary userName="jojorabbit21" bounty={8750} />
          <ThreadCreateAt>{props?.createAt} 에 작성됨</ThreadCreateAt>
        </div>
      </ThreadInfoContainer>
    </ThreadHeader>
  );
};

export default Index;
