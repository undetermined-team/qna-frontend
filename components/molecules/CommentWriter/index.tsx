import React from "react";
import { FilterButton } from "../../atoms/FilterButton";
import { SearchInput } from "../../atoms/SearchInput";
import { CommentWriteContainer } from "./styles";

const index = () => {
  return (
    <CommentWriteContainer>
      <SearchInput
        placeholder="댓글을 입력해 주세요"
        sx={{
          ".MuiInputBase-input": { borderRadius: "2px", padding: "9px 16px" },
          width: 590,
          height: 33,
          marginRight: "12px",
        }}
      />

      <FilterButton
        variant="contained"
        style={{ width: 52, height: 33, color: "#fff", backgroundColor: "#37474F" }}
      >
        작성
      </FilterButton>
    </CommentWriteContainer>
  );
};

export default index;
