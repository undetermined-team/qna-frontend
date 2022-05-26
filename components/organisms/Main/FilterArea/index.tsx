import React, { useState } from "react";
import styled from "styled-components";
import Tag from "../../../atoms/Tag";
import {
  FilterLayout,
  ServiceAbout,
  ServiceSummary,
  QuestionDescription,
  QuestionCount,
  ButtonGroup,
  AskQuestionButton,
  ToggleButton,
  TagSearchInput,
  DeleteAllButton,
  TagsContainer,
} from "./styles";

const FilterArea = () => {
  const [toggle, setToggle] = useState("newest");

  const toggleClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(e.currentTarget.id);
  };

  const FilterTag = styled(Tag)`
    margin-right: 8px;
  `;

  const handleDelete = (e) => {};

  return (
    <FilterLayout>
      <ServiceAbout>
        <ServiceSummary>여러분의 지식을 나눠주세요.</ServiceSummary>

        <QuestionDescription>
          <QuestionCount>1,515,546</QuestionCount>
          <span>개의 질문이 답변을 기다리고 있습니다.</span>
        </QuestionDescription>
      </ServiceAbout>

      <ButtonGroup>
        <ToggleButton
          id="newest"
          onClick={toggleClickHandler}
          variant={toggle === "newest" ? "selected" : "normal"}
        >
          최신
        </ToggleButton>
        <ToggleButton
          id="popular"
          onClick={toggleClickHandler}
          variant={toggle === "popular" ? "selected" : "normal"}
        >
          인기
        </ToggleButton>
        <ToggleButton
          id="unanswered"
          onClick={toggleClickHandler}
          variant={toggle === "unanswered" ? "selected" : "normal"}
        >
          답변 필요
        </ToggleButton>
        <ToggleButton
          id="reward"
          onClick={toggleClickHandler}
          variant={toggle === "reward" ? "selected" : "normal"}
        >
          리워드
        </ToggleButton>

        <TagSearchInput type="text" placeholder="태그명으로 검색" />

        <AskQuestionButton>질문하기</AskQuestionButton>
      </ButtonGroup>

      <TagsContainer>
        <FilterTag label="javascript" onDelete={handleDelete} />
        <FilterTag label="vue.js" onDelete={handleDelete} />
        <FilterTag label="react-native" onDelete={handleDelete} />
        <FilterTag label="react-js" onDelete={handleDelete} />

        <DeleteAllButton variant="text">모두 삭제</DeleteAllButton>
      </TagsContainer>
    </FilterLayout>
  );
};

export default FilterArea;
