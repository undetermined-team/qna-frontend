import styled from "styled-components";

export const Input = styled.input`
  ${(props) => props.theme.typography.Button};
  background-color: ${(props) => props.theme.palette.Gray100};
  border: 1px solid ${(props) => props.theme.palette.Gray200};
  color: ${(props) => props.theme.palette.Gray900};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.palette.Gray400};
    opacity: 1;
  }

  :focus {
    color: black;
    border-color: ${(props) => props.theme.palette.Gray300};
    background-color: #fff;
  }
`;
