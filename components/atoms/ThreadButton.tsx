import styled, { css } from "styled-components";

interface ThreadButtonProps {
  readonly isLike?: boolean;
}

export const ThreadButton = styled.button<ThreadButtonProps>`
  display: flex;
  align-items: flex-start;
  ${(props) => props.theme.typography.Footnote2};
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #757575;
  height: 22px;
  padding: 4px 10px;
  cursor: pointer;

  span {
    margin-left: 4px;
  }

  &:hover {
    border-color: ${(props) => props.theme.palette.Gray600};

    svg {
      path {
        ${(props) =>
          props.isLike
            ? css`
                stroke: ${(props) => props.theme.palette.Gray600};
              `
            : css`
                fill: ${(props) => props.theme.palette.Gray600};
              `}
      }
    }
  }

  &:active {
    border-color: ${(props) => props.theme.palette.Gray900};
  }

  ${(props) =>
    props.isLike &&
    css`
      &:focus {
        border-color: ${(props) => props.theme.palette.Gray600};

        svg {
          path {
            stroke: ${(props) => props.theme.palette.PinkA400};
            fill: ${(props) => props.theme.palette.PinkA400};
          }
        }
      }
    `}
`;
