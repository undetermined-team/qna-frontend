import React from "react";
import styled, { css } from "styled-components";
import { LeftArrow, RightArrow } from "../../../public/assets/SvgIcons";

interface PaginationProps {
  className?: string;
}

interface PaginationChipProps {
  isActive?: boolean;
  isDisable?: boolean;
}

const PaginationChip = styled.li<PaginationChipProps>`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? props.theme.palette.LightBlue500 : "none")};
  color: ${(props) => (props.isActive ? "white" : "black")};

  :hover {
    background-color: ${(props) =>
      props.isActive ? props.theme.palette.LightBlue500 : (props) => props.theme.palette.Gray100};
  }

  :focus {
    color: white;
    background-color: ${(props) => props.theme.palette.LightBlue500};
  }
`;

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <ul className={props.className}>
      <LeftArrow />
      <PaginationChip isActive>1</PaginationChip>
      <PaginationChip>2</PaginationChip>
      <PaginationChip>3</PaginationChip>
      <PaginationChip>4</PaginationChip>
      <PaginationChip>5</PaginationChip>
      <li>...</li>
      <PaginationChip>32</PaginationChip>
      <RightArrow />
    </ul>
  );
};

export default Pagination;
