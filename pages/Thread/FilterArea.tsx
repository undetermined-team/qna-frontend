import React from "react";
import { SearchInput } from "../../components/atoms/SearchInput";
import Tag from "../../components/molecules/DeleteTag";
import { FilterButton } from "../../components/atoms/FilterButton";

const FilterArea = () => {
  const onDelete = (e) => {};

  return (
    <article
      style={{
        minWidth: "705px",
        padding: "23px 26px 25px 26px",
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
            lineHeight: "16.41px",
          }}
        >
          <span
            style={{
              color: "rgba(0, 200, 83, 1)",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "-0.005em",
              lineHeight: "18px",
            }}
          >
            1,515,546
          </span>
          <span>개의 질문이 답변을 기다리고 있습니다.</span>
        </p>
      </div>

      <div style={{ marginBottom: "11px", position: "relative" }}>
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
      </div>

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
    </article>
  );
};

export default FilterArea;
