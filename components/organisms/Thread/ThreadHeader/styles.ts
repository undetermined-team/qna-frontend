import styled from "styled-components";

export const ThreadTitle = styled.h1`
  ${(props) => props.theme.typography.Heading1};
  color: ${(props) => props.theme.palette.Gray900};
`;

export const ThreadCreateAt = styled.time`
  ${(props) => props.theme.typography.Footnote2};
  color: ${(props) => props.theme.palette.Gray600};
`;

export const TagWrapper = styled.div`
  margin-top: 10px;
`;

export const ThreadHeader = styled.header`
  position: relative;
  border-bottom: 6px solid #f5f5f5;
  padding: 23px 26px;
`;

export const ThreadTrendWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 163px;
  padding: 0;
  margin-top: 29px;
  margin-bottom: 15px;
`;

export const ThreadInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
