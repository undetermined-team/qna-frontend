import React from "react";
import { LeftArrow, RightArrow } from "../../../public/assets/SvgIcons";
import {
  PaginationContainer,
  PaginationWrapper,
  PaginationChip,
  MoveWrapper,
  MoveToPageNumber,
  MoveToPageButton,
} from "./styles";

interface PaginationProps {
  className?: string;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <PaginationContainer className={props.className}>
      <PaginationWrapper>
        <LeftArrow />
        <PaginationChip isActive>1</PaginationChip>
        <PaginationChip>2</PaginationChip>
        <PaginationChip>3</PaginationChip>
        <PaginationChip>4</PaginationChip>
        <PaginationChip>5</PaginationChip>
        <li>...</li>
        <PaginationChip>32</PaginationChip>
        <RightArrow />
      </PaginationWrapper>

      <MoveWrapper>
        <MoveToPageNumber type="number" min={1} />
        <MoveToPageButton>이동</MoveToPageButton>
      </MoveWrapper>
    </PaginationContainer>
  );
};

export default Pagination;
