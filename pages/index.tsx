import React, { useState } from "react";
import FilterArea from "../components/organisms/Main/FilterArea";
import styled, { css } from "styled-components";
import Aside from "../components/organisms/Aside";
import ThreadList from "../components/organisms/Main/ThreadList";
import { DivideContainer } from "../components/atoms/DivideContainer";
import Button from "../components/atoms/Button";

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
    title: "Title Here",
    tags: [
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
      "React-Native",
    ],

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
];

interface ToggleButtonStateType {
  isSelected: boolean;
  borderRadius?: boolean;
}

const ToggleButton = styled(Button)<ToggleButtonStateType>`
  color: ${(props) => props.theme.palette.Gray500};
  height: 28px;
  padding: 6px 17px;

  ${(props) =>
    props.isSelected &&
    css`
      border-color: ${(props) => props.theme.palette.Amber700};
      color: black;
    `}

  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: 2px 0px 0px 2px;
    `}

  :hover {
    border-color: ${(props) => props.theme.palette.Amber700};
    background-color: ${(props) => props.theme.palette.Amber50};
  }
`;

const SorterContainer = styled.div`
  padding: 13px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Thread = () => {
  const [toggle, setToggle] = useState("newest");

  const toggleClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(e.currentTarget.id);
  };

  return (
    <DivideContainer>
      <ThreadSection>
        <FilterArea />

        <SorterContainer>
          <SearchResult>57개의 검색 결과가 있습니다.</SearchResult>

          <div>
            <ToggleButton
              isSelected={toggle === "newest"}
              borderRadius
              id="newest"
              onClick={toggleClickHandler}
            >
              최신
            </ToggleButton>
            <ToggleButton
              isSelected={toggle === "popular"}
              id="popular"
              onClick={toggleClickHandler}
            >
              인기
            </ToggleButton>
            <ToggleButton
              isSelected={toggle === "unanswered"}
              id="unanswered"
              onClick={toggleClickHandler}
            >
              답변 필요
            </ToggleButton>
            <ToggleButton
              isSelected={toggle === "reward"}
              borderRadius
              id="reward"
              onClick={toggleClickHandler}
            >
              리워드
            </ToggleButton>
          </div>
        </SorterContainer>

        <ThreadList threadList={exampleThreadList} />
      </ThreadSection>

      <Aside />
    </DivideContainer>
  );
};

export default Thread;
