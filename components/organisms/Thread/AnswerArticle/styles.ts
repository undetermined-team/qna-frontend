import styled from "styled-components";

export const ThreadCreateAt = styled.time`
  ${(props) => props.theme.typography.Footnote2};
  color: ${(props) => props.theme.palette.Gray600};
`;

export const AnswerArticle = styled.article`
  border-bottom: 1px solid #9e9e9e;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const ArticleInfoContainer = styled.div`
  padding: 0 10px;
  margin-bottom: 26px;
  display: flex;
  justify-content: space-between;
`;

export const AnswerContent = styled.p`
  margin-bottom: 48px;
`;
