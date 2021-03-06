import React from "react";
import styled from "styled-components";
import { CommentInput, CommentWriteContainer } from "./styles";

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
      <CommentInput as="textarea" placeholder="댓글을 입력해 주세요" />
      <WriteButton>작성</WriteButton>
    </CommentWriteContainer>
  );
};

export default index;
