import React from "react";
import { SearchInput } from "../../components/atoms/SearchInput";
import Tag from "../../components/molecules/DeleteTag";
import { FilterButton } from "../../components/atoms/FilterButton";

const FilterArea = () => {
  const onDelete = (e) => {};

  return (
    <div
      style={{
        maxWidth: "708px",
        padding: "23px 26px",
        border: "2px solid #D6D6D6",
        borderTop: "none",
        borderBottom: "6px solid #F5F5F5",
      }}
    >
      <div style={{ marginBottom: "22px" }}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "-0.005em",
            color: "#212121",
          }}
        >
          여러분의 지식을 나눠주세요.
        </h2>

        <p
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 14,
            color: "#9E9E9E",
          }}
        >
          <span
            style={{
              color: "rgba(0, 200, 83, 1)",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 15,
              letterSpacing: "-0.005em",
            }}
          >
            1,515,546
          </span>
          개의 질문이 답변을 기다리고 있습니다.
        </p>
      </div>

      <div style={{ marginBottom: "11px", position: "relative" }}>
        <FilterButton
          sx={{
            color: "#fff",
            backgroundColor: "#00B0FF",
            height: 36,

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
      </div>

      <div style={{ position: "relative" }}>
        <Tag label="javascript" onDelete={onDelete} style={{ fontWeight: 600 }} />
        <Tag label="vue.js" onDelete={onDelete} style={{ fontWeight: 600 }} />
        <Tag label="react-native" onDelete={onDelete} style={{ fontWeight: 600 }} />
        <Tag label="react-js" onDelete={onDelete} style={{ fontWeight: 600 }} />

        <FilterButton
          sx={{
            position: "absolute",
            height: 36,
            color: "#FF8F00",
            right: 0,
          }}
          variant="text"
        >
          모두 삭제
        </FilterButton>
      </div>
    </div>
  );
};

export default FilterArea;
