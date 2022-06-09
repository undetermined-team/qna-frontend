import React from "react";
import styled from "styled-components";
import { CheckCircleIcon } from "../../../public/assets/SvgIcons";

const MessageBox = styled.div`
  display: flex;
  position: fixed;
  min-width: 204px;
  right: 50%;
  left: 50%;
  top: 65px;
  align-items: center;
  height: 46px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.Gray300};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  padding: 13px 16px;
  border-radius: 4px;
  z-index: 1100;
  transform: translate(-50%, -50%);

  animation-name: MessageMoveOut;
  animation-duration: 0.2s;

  @keyframes MessageMoveOut {
    0% {
      top: 0px;
      opacity: 0.7;
    }

    100% {
      top: 65px;
      opacity: 1;
    }
  }
`;

const MessageContent = styled.span`
  ${(props) => props.theme.typography.Body};
  margin-left: 10px;
  text-align: center;
`;

interface MessageProps {
  message: string;
}

const index = (props: MessageProps) => (
  <MessageBox>
    <CheckCircleIcon />
    <MessageContent>{props.message}</MessageContent>
  </MessageBox>
);

export default index;
