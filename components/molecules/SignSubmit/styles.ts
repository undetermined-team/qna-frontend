import styled from "styled-components";
import Button from "../../atoms/Button";

export const SignButtonContainer = styled.div`
  text-align: center;
`;

export const SignButton = styled(Button)`
  ${(props) => props.theme.typography.Body};
  line-height: normal;
  width: 310px;
  height: 38px;
  color: white;
  background-color: ${(props) => props.theme.palette.LightBlueA700};
  border: ${(props) => props.theme.palette.LightBlueA700};
  border-radius: 2px;
  margin-bottom: 16px;
`;

export const GithubSignButton = styled(Button)`
  ${(props) => props.theme.typography.Body};
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  width: 310px;
  height: 38px;
  background-color: ${(props) => props.theme.palette.Gray900};
  border-color: ${(props) => props.theme.palette.Gray900};
  border-radius: 2px;
  margin: 16px 0;

  svg {
    margin-right: 19px;
  }
`;

export const GoSign = styled.a`
  ${(props) => props.theme.typography.Body};
  color: ${(props) => props.theme.palette.LightBlueA700};
  cursor: pointer;
  margin-top: 33px;
`;
