import styled from "styled-components";

interface PaginationChipProps {
  isActive?: boolean;
  isDisable?: boolean;
}

export const MoveToPageButton = styled.button`
  cursor: pointer;
  ${(props) => props.theme.typography.Button};
  font-size: 12px;
  width: 42px;
  height: 24px;
  padding: 2px 8px;
  background: ${(props) => props.theme.palette.Gray100};
  border-radius: 4px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 262px;
  margin-right: 26px;
`;

export const PaginationChip = styled.li<PaginationChipProps>`
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

export const MoveToPageNumber = styled.input`
  width: 38px;
  height: 24px;
  color: ${(props) => props.theme.palette.Gray900};
  margin-right: 6px;
`;

export const MoveWrapper = styled.div`
  display: flex;
`;

export const PaginationContainer = styled.ul`
  display: flex;
  align-items: center;
`;
