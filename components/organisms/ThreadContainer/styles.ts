import styled from "styled-components";

export const ThreadTitle = styled.span`
  ${(props) => props.theme.typography.Heading3};
  margin-right: 12px;
`;

export const ThreadBounty = styled.span`
  ${(props) => props.theme.typography.Captions};
  padding: 3px;
  background-color: #69f0ae;
  color: "#004D40";
  border-radius: 2px;
  width: 29px;
  text-align: "center";
  height: 21px;
`;

export const ThreadContainer = styled.div`
  position: relative;
  padding: 13px 26px;
  border: 1px solid #e0e0e0;
  background-color: white;
  border-right: none;
  border-left: none;
`;

export const ThreadTime = styled.span`
  ${(props) => props.theme.typography.Captions};
  margin-left: 18px;
  color: #9e9e9e;
  text-align: right;
`;
