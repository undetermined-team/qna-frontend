import styled, { css } from "styled-components";

interface Button {
  variant?: "selected" | "normal" | "text" | undefined;
}

const Button = styled.button<Button>`
  cursor: pointer;
  ${(props) => props.theme.typography.Button};
  color: ${(props) =>
    props.variant === "normal" || undefined
      ? css`
          ${(props) => props.theme.palette.Gray700}
        `
      : "#fff"};

  min-width: 64px;
  height: 36px;
  background-color: ${(props) =>
    props.variant === "normal" || undefined
      ? "#fff"
      : props.variant === "text"
      ? "transparent"
      : css`
          ${(props) => props.theme.palette.LightBlueA400}
        `};

  border: ${(props) =>
    props.variant === "text" ? "none" : css`1px solid ${(props) => props.theme.palette.Gray300};`};
  text-align: center;
  border-radius: 2px;
  box-shadow: none;
  transition: border-color 250ms;
  padding: 10px 17px;

  &:hover {
    border-color: ${(props) => props.theme.palette.Gray400};
  }

  &:disabled {
    color: ${(props) => props.theme.palette.Gray400};
    border-color: ${(props) => props.theme.palette.Gray300};
  }
`;

export default Button;
