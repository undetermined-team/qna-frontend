import React from "react";
import FilterArea from "../../components/organisms/FilterArea";
import styled from "styled-components";
import Aside from "../../components/organisms/Aside";
import ThreadList from "../../components/organisms/ThreadList";

const SearchResult = styled.h4`
  ${(props) => props.theme.typography.Footnote};
  color: #616161;
  padding: 13px 26px;
`;

const ThreadSection = styled.section`
  border: 1px solid #d6d6d6;
  border-top: none;
`;

const exampleThreadList = [
  {
    title:
      "고결하고 아름다운 사랑의 형태이다. 사랑이 없는 사람은 쉽게 용서하지 못한다. 용서는 평화와 행복을 그 보답으로 준다. 그대, 용서함으로써 행복 하라! 용감한 자만이 용서할 줄 알고 비겁한 자는 용서하지 않는다. 용서는 남에게는 자주 베풀지만 자신에게는 베풀지 마라.고결하고 아름다운 사랑의 형태이다. 사랑이 없는 사람은 쉽게 용서하지 못한다. 용서는 평화와 행복을 그 보답으로 준다. 그대, 용서함으로써 행복 하라! 용감한 자만이 용서할 줄 알고 비겁한 자는 용서하지 않는다. 용서는 남에게는 자주 베풀지만 자신에게는 베풀지 마라.고결하고 아름다운 사랑의 형태이다. 사랑이 없는 사람은 쉽게 용서하지 못한다. 용서는 평화와 행복을 그 보답으로 준다. 그대, 용서함으로써 행복 하라! 용감한 자만이 용서할 줄 알고 비겁한 자는 용서하지 않는다. 용서는 남에게는 자주 베풀지만 자신에게는 베풀지 마라.고결하고 아름다운 사랑의 형태이다. 사랑이 없는 사람은 쉽게 용서하지 못한다. 용서는 평화와 행복을 그 보답으로 준다. 그대, 용서함으로써 행복 하라! 용감한 자만이 용서할 줄 알고 비겁한 자는 용서하지 않는다. 용서는 남에게는 자주 베풀지만 자신에게는 베풀지 마라.",
    tags: ["javascript", "react", "typescript"],
    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
  },
];

const Thread = () => {
  return (
    <div style={{ display: "inline-flex" }}>
      <ThreadSection>
        <FilterArea />
        <SearchResult>57개의 검색 결과가 있습니다.</SearchResult>

        <ThreadList threadList={exampleThreadList} />
      </ThreadSection>

      <Aside />
    </div>
  );
};

export default Thread;
