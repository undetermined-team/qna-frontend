import React from "react";
import styled from "styled-components";

const IconButton = styled.button`
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

export default IconButton;
