import React, { useState } from "react";
import { Input } from "../../../atoms/Input";
import Tag from "../../../molecules/DeleteTag";
import {
  FilterLayout,
  ServiceAbout,
  ServiceSummary,
  QuestionDescription,
  QuestionCount,
  ButtonGroup,
  AskQuestionButton,
} from "./styles";
import Button from "../../../atoms/Button";

const FilterArea = () => {
  const [toggle, setToggle] = useState("newest");

  const toggleClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(e.currentTarget.id);
  };

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
        <Button
          id="newest"
          onClick={toggleClickHandler}
          variant={toggle === "newest" ? "selected" : "normal"}
          style={{ marginRight: 4 }}
        >
          최신
        </Button>
        <Button
          id="popular"
          onClick={toggleClickHandler}
          variant={toggle === "popular" ? "selected" : "normal"}
          style={{ marginRight: 4 }}
        >
          인기
        </Button>
        <Button
          id="unanswered"
          onClick={toggleClickHandler}
          variant={toggle === "unanswered" ? "selected" : "normal"}
          style={{ marginRight: 4 }}
        >
          답변 필요
        </Button>
        <Button
          id="reward"
          onClick={toggleClickHandler}
          variant={toggle === "reward" ? "selected" : "normal"}
          style={{ marginRight: 4 }}
        >
          리워드
        </Button>

        <Input
          type="text"
          placeholder="태그명으로 검색"
          style={{
            borderRadius: 2,
            padding: "6px 10px",
            width: 204,
            height: 36,
          }}
        />

        <AskQuestionButton>질문하기</AskQuestionButton>
      </ButtonGroup>

      <div style={{ position: "relative" }}>
        <Tag label="javascript" style={{ fontWeight: 600, marginRight: "8px" }} />
        <Tag label="vue.js" style={{ fontWeight: 600, marginRight: "8px" }} />
        <Tag label="react-native" style={{ fontWeight: 600, marginRight: "8px" }} />
        <Tag label="react-js" style={{ fontWeight: 600, marginRight: "8px" }} />

        <Button
          variant="text"
          style={{
            position: "absolute",
            height: 36,
            color: "#FF8F00",
            right: 0,
            padding: 0,
          }}
        >
          모두 삭제
        </Button>
      </div>
    </FilterLayout>
  );
};

export default FilterArea;
