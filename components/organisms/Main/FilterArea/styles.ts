import styled from "styled-components";

export const FilterLayout = styled.section`
  width: 708px;
  padding: 23px 26px 25px 26px;
  border-bottom: 6px solid #f5f5f5;
`;

export const ServiceAbout = styled.header`
  margin-bottom: 22px;
`;

export const ServiceSummary = styled.h2`
  ${(props) => props.theme.typography.Heading1};
`;

export const QuestionCount = styled.span`
  ${(props) => props.theme.typography.Heading3};
  color: ${(props) => props.theme.palette.GreenA700};
`;

export const QuestionDescription = styled.p`
  ${(props) => props.theme.typography.Body2};
  color: ${(props) => props.theme.palette.Gray500};
`;

export const ButtonGroup = styled.div`
  margin-bottom: 11px;
  position: relative;
`;
