import React, { useEffect, useRef, useState } from "react";
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
import { TagShowMore } from "../../../molecules/ThreadContainer/styles";
import { VectorIcon } from "../../../../public/assets/SvgIcons";

const index = () => {
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

  const tags = [
    "android-studio",
    "node.js",
    "next.js",
    "React",
    "Vue",
    "React-Native",
    "Javascript",
    "Typescript",
    "Typescript",
    "Typescript",
    "Typescript",
    "Typescript",
  ];

  return (
    <ThreadHeader>
      <ThreadTitle>정적 클랙스의 static 변수값은 왜 변하지 않을까요?</ThreadTitle>

      <div>
        <TagWrapper ref={tagWrapperRef}>
          {tags.map((tag, i) => (
            <Tag
              label={tag}
              style={{ marginRight: "4px", marginBottom: 5, fontWeight: 600 }}
              key={i}
            />
          ))}
        </TagWrapper>

        {!isOpen && overflowActive && (
          <TagShowMore onClick={tagShowMoreHandler}>{VectorIcon}</TagShowMore>
        )}
      </div>

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
