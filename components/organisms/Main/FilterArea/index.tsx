import React from "react";
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
import ToggleButton from "../../../atoms/ToggleButton";

const FilterArea = () => {
  const onDelete = (e) => {};

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
        <ToggleButton style={{ marginRight: 4 }} variant="selected">
          최신
        </ToggleButton>
        <ToggleButton style={{ marginRight: 4 }} variant="normal">
          인기
        </ToggleButton>
        <ToggleButton style={{ marginRight: 4 }} variant="normal">
          답변 필요
        </ToggleButton>
        <ToggleButton style={{ marginRight: 4 }} variant="normal">
          리워드
        </ToggleButton>

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

        <ToggleButton
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
        </ToggleButton>
      </div>
    </FilterLayout>
  );
};

export default FilterArea;
