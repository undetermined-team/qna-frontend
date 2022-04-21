import React from "react";
import styled from "styled-components";
import { Input } from "../../atoms/Input";
import { CommentWriteContainer } from "./styles";

const WriteButton = styled.button`
  ${(props) => props.theme.typography.Captions};
  border: 1px solid ${(props) => props.theme.palette.BlueGray200};
  width: 55px;
  height: 33px;
  color: ${(props) => props.theme.palette.BlueGray700};
  padding: 8.5px 13px;
  margin-left: 12px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.palette.Gray200};

  &:hover {
    border-color: ${(props) => props.theme.palette.BlueGray400};
  }
`;

const index = () => {
  return (
    <CommentWriteContainer>
      <Input
        as="textarea"
        placeholder="댓글을 입력해 주세요"
        style={{
          width: 590,
          height: 33,
          padding: "5px 16px",
          borderRadius: 2,
          resize: "none",
        }}
      />

      <WriteButton>작성</WriteButton>
    </CommentWriteContainer>
  );
};

export default index;
