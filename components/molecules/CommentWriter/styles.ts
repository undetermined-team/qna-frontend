import styled from "styled-components";
import { Input } from "../../atoms/Input";

export const CommentWriteContainer = styled.div`
  display: flex;
`;

export const CommentInput = styled(Input)`
  ${(props) => props.theme.typography.Footnote};
  width: 654px;
  height: 33px;
  padding: 4.5px 16px;
  border-radius: 2px;
  color: ${(props) => props.theme.palette.Gray600};
  resize: none;
`;
