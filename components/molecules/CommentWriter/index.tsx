import React from "react";
import styled from "styled-components";
import { SearchInput } from "../../atoms/SearchInput";
import { CommentWriteContainer } from "./styles";

const WriteButton = styled.button`
  ${(props) => props.theme.typography.Captions};
  border: 1px solid ${(props) => props.theme.palette.BlueGray200};
  width: 55px;
  height: 33px;
  color: #fff;
  padding: 8.5px 13px;
  margin-left: 12px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.palette.BlueGray300};

  &:hover {
    border-color: ${(props) => props.theme.palette.BlueGray400};
  }
`;

const index = () => {
  return (
    <CommentWriteContainer>
      <SearchInput
        placeholder="댓글을 입력해 주세요"
        sx={{
          width: 590,
          height: 33,
          ".MuiInputBase-input": { padding: "5px 16px", borderRadius: "2px" },
        }}
      />

      <WriteButton>작성</WriteButton>
    </CommentWriteContainer>
  );
};

export default index;
