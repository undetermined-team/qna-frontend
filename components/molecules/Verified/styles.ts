import styled from "styled-components";

export const Verified = styled.span`
  ${(props) => props.theme.typography.Footnote2};
  line-height: normal;
  color: ${(props) => props.theme.palette.Teal900};
  margin-left: 5px;
`;

export const VerifiedContainer = styled.div`
  display: flex;
  margin-bottom: 8;
`;
