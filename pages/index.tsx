import React from "react";
import FilterArea from "../components/organisms/Main/FilterArea";
import styled from "styled-components";
import Aside from "../components/organisms/Aside";
import ThreadList from "../components/organisms/Main/ThreadList";

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
    title: "Title Here",
    tags: [
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
      "next.js",
    ],
    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
  },
  {
    title: "Title Here",
    tags: ["next.js", "next.js", "next.js", "next.js"],
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
