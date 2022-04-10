import styled from "styled-components";

export const ShareBox = styled.div`
  display: flex;
  width: 350px;
  position: absolute;
  top: 40px;
  left: -20px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
`;

export const ShareLink = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 1;
  cursor: text;
  ${(props) => props.theme.typography.Button};
  width: 225px;
  padding: 7px 15px;
  color: ${(props) => props.theme.palette.BlueGray500};
  background-color: ${(props) => props.theme.palette.BlueGray50};
  margin-right: 6px;
`;

export const ShareButton = styled.button`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  width: 79px;
  height: 30px;
  cursor: pointer;
  ${(props) => props.theme.typography.Button};
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.BlueGray300};
  border-radius: 2px;
  box-sizing: border-box;

  &:hover {
    border-color: ${(props) => props.theme.palette.BlueGray900};
  }

  &:active {
    border-color: ${(props) => props.theme.palette.BlueGray900};
    background-color: ${(props) => props.theme.palette.BlueGray100};
  }
`;
