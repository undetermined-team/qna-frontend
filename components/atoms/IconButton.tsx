import React from "react";
import styled from "styled-components";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

const StyledButton = styled.button`
  height: 24px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    svg {
      path {
        stroke: ${(props) => props.theme.palette.BlueGray600};
      }
    }
  }

  &:active {
    svg {
      path {
        stroke: ${(props) => props.theme.palette.BlueGray800};
      }
    }
  }
`;

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <StyledButton onClick={props.onClick} style={props.style}>
      {props.children}
    </StyledButton>
  );
};

export default IconButton;
