import styled from "styled-components";

export const RecentQuestionTitle = styled.h4`
  ${(props) => props.theme.typography.Body3};
  color: ${(props) => props.theme.palette.Gray800};
  max-width: 179px;
  height: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

export const RecentQuestionList = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const RecentQuestionDeleteButton = styled.button`
  height: 12px;
  line-height: normal;
  padding: 0;
  border: none;
  cursor: pointer;
`;
