import React from "react";
import styled from "styled-components";
import { CheckCircleIcon } from "../../../public/assets/SvgIcons";

const MessageBox = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  height: 46px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.Gray300};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  padding: 13px 16px;
  border-radius: 4px;
  z-index: 1100;
  transform: translate(-50%, -50%);
`;

const MessageContent = styled.span`
  ${(props) => props.theme.typography.Body};
  margin-left: 10px;
  text-align: center;
`;

interface MessageProps {
  content?: React.ReactNode;
}

const index: React.FC<MessageProps> = (props) => {
  return (
    <MessageBox>
      {CheckCircleIcon}
      <MessageContent>{props.content}</MessageContent>
    </MessageBox>
  );
};

export default index;
