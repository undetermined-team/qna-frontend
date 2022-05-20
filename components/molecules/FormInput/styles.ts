import styled, { css } from "styled-components";
import IconButton from "../../atoms/IconButton";
import { Input } from "../../atoms/Input";

interface SignInputProps {
  isError?: boolean | string | number;
  name: string;
}

interface ValidityGuidelinesProps {
  isError?: boolean | string | number;
}

export const SignInput = styled(Input)<SignInputProps>`
  border-color: ${(props) => props.isError && props.theme.palette.RedA400};
  box-shadow: ${(props) => props.isError && "0px 0px 0px 3px rgba(255, 138, 128, 0.25);"};
  ${(props) => props.theme.typography.Body};
  width: 310px;
  height: 38px;
  padding: 10px;
  ${(props) =>
    props.name === "password" &&
    css`
      padding-right: 52px;
    `}
  border-radius: 4px;

  & :hover {
    border: 1px solid
      ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.GreenA400)};
  }

  & :active {
    border: 1px solid
      ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.GreenA400)};
    box-shadow: 0px 0px 0px 3px rgba(0, 230, 118, 0.25);
  }

  &:focus {
    border: 1px solid
      ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.GreenA400)};
  }
`;

export const FormLabel = styled.p`
  ${(props) => props.theme.typography.Footnote};
  color: #000000;
`;

export const FormInputWrapper = styled.div`
  margin-bottom: 24px;
`;

export const ValidityGuidelines = styled.p<ValidityGuidelinesProps>`
  ${(props) => props.theme.typography.Body3};
  color: ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.Gray600)};
  width: 305px;
  margin-top: 7px;
`;

export const PasswordShowButton = styled(IconButton)`
  position: absolute;
  right: 16px;
  top: 7px;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
`;
