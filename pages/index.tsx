import React from "react";
import FilterArea from "../components/organisms/Main/FilterArea";
import styled from "styled-components";
import Aside from "../components/organisms/Aside";
import ThreadList from "../components/organisms/Main/ThreadList";
import { DivideContainer } from "../components/atoms/DivideContainer";

const SearchResult = styled.h4`
  ${(props) => props.theme.typography.Body};
  color: ${(props) => props.theme.palette.Gray700};
`;

const ThreadSection = styled.section`
  width: 708px;
  border: 1px solid #d6d6d6;
  border-top: none;
`;

const exampleThreadList = [
  {
    title: "자바스크립트로 공룡 점프하는 게임을 만드는 방법에 대해서",
    tags: ["javascript", "node.js", "html", "css", "firebase", "database"],

    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
    createAt: "2022-03-03 18:47",
  },
  {
    title: "Title Here",
    tags: ["next.js", "next.js", "next.js", "next.js", "next.js", "next.js", "next.js", "next.js"],
    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
    createAt: "2022-04-29 10:55:22",
  },
  {
    title: "자바스크립트로 공룡 점프하는 게임을 만드는 방법에 대해서",
    tags: ["javascript", "node.js", "html", "css", "firebase", "database"],

    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
    createAt: "2022-03-03 18:47",
  },
  {
    title: "자바스크립트로 공룡 점프하는 게임을 만드는 방법에 대해서",
    tags: ["javascript", "node.js", "html", "css", "firebase", "database"],

    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
    createAt: "2022-03-03 18:47",
  },
  {
    title: "자바스크립트로 공룡 점프하는 게임을 만드는 방법에 대해서",
    tags: ["javascript", "node.js", "html", "css", "firebase", "database"],

    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
    createAt: "2022-03-03 18:47",
  },
  {
    title: "자바스크립트로 공룡 점프하는 게임을 만드는 방법에 대해서",
    tags: ["javascript", "node.js", "html", "css", "firebase", "database"],

    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
    createAt: "2022-03-03 18:47",
  },
  {
    title: "자바스크립트로 공룡 점프하는 게임을 만드는 방법에 대해서",
    tags: ["javascript", "node.js", "html", "css", "firebase", "database"],

    userName: "Jojorabbit21",
    bounty: 75,
    trend: { view: 87, like: 13, answerCount: 3 },
    createAt: "2022-03-03 18:47",
  },
];

const SorterContainer = styled.div`
  padding: 13px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Thread = ({ thread }) => {
  return (
    <DivideContainer>
      <ThreadSection>
        <FilterArea />

        <ThreadList threadList={exampleThreadList} />
      </ThreadSection>

      <Aside />
    </DivideContainer>
  );
};

// export async function getServerSideProps() {
//   const thread = await useGetThrad("1");

//   return {
//     props: {
//       thread,
//     },
//   };
// }

export default Thread;
