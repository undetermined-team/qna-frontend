import React from "react";
import { SearchInput } from "../../atoms/SearchInput";
import Tag from "../../molecules/DeleteTag";
import { FilterButton } from "../../atoms/FilterButton";
import {
  FilterLayout,
  ServiceAbout,
  ServiceSummary,
  QuestionDescription,
  QuestionCount,
  ButtonGroup,
} from "./styles";

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
        <FilterButton
          sx={{
            color: "#fff",
            backgroundColor: "#00B0FF",
            height: 36,
            marginRight: "4px",

            "&:hover": {
              backgroundColor: "#00B0FF",
            },
          }}
          variant="contained"
        >
          최신
        </FilterButton>

        <FilterButton
          sx={{
            color: "#757575",
            border: "1px solid #E0E0E0",
            height: 36,
            marginRight: "4px",
            "&:hover": {
              borderColor: "#E0E0E0",
            },
          }}
          variant="outlined"
        >
          인기
        </FilterButton>

        <FilterButton
          sx={{
            color: "#757575",
            border: "1px solid #E0E0E0",
            height: 36,
            marginRight: "4px",
            "&:hover": {
              borderColor: "#E0E0E0",
            },
          }}
          variant="outlined"
        >
          답변 필요
        </FilterButton>

        <FilterButton
          sx={{
            color: "#757575",
            border: "1px solid #E0E0E0",
            height: 36,
            marginRight: "4px",
            "&:hover": {
              borderColor: "#E0E0E0",
            },
          }}
          variant="outlined"
        >
          리워드
        </FilterButton>

        <SearchInput
          placeholder="태그명으로 검색"
          sx={{
            "& .MuiInputBase-input": { borderRadius: "2px", padding: "6px 10px" },
            width: 204,
            height: 35,
          }}
        />

        <FilterButton
          sx={{
            position: "absolute",
            color: "#fff",
            backgroundColor: "#00B0FF",
            height: 36,
            right: 0,

            "&:hover": {
              backgroundColor: "#00B0FF",
            },
          }}
          variant="contained"
        >
          질문하기
        </FilterButton>
      </ButtonGroup>

      <div style={{ position: "relative" }}>
        <Tag
          label="javascript"
          onDelete={onDelete}
          style={{ fontWeight: 600, marginRight: "8px" }}
        />
        <Tag label="vue.js" onDelete={onDelete} style={{ fontWeight: 600, marginRight: "8px" }} />
        <Tag
          label="react-native"
          onDelete={onDelete}
          style={{ fontWeight: 600, marginRight: "8px" }}
        />
        <Tag label="react-js" onDelete={onDelete} style={{ fontWeight: 600, marginRight: "8px" }} />

        <FilterButton
          sx={{
            position: "absolute",
            height: 36,
            color: "#FF8F00",
            right: 0,
            padding: 0,
          }}
          variant="text"
        >
          모두 삭제
        </FilterButton>
      </div>
    </FilterLayout>
  );
};

export default FilterArea;
