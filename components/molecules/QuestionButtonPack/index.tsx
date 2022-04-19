import React from "react";
import styled from "styled-components";
import { ShareIcon, LikeIcon, ReportIcon } from "../../../public/assets/SvgIcons";
import { ThreadButton } from "../../atoms/ThreadButton";
import Popover from "../Popover";
import ShareBox from "../ShareBox";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
`;

const index = () => {
  return (
    <ButtonWrapper>
      <Popover contents={<ShareBox link="/" />}>
        <ThreadButton>
          {ShareIcon}
          <span>링크 복사</span>
        </ThreadButton>
      </Popover>

      <ThreadButton>
        {LikeIcon}
        <span>좋아요</span>
      </ThreadButton>

      <ThreadButton>
        {ReportIcon}
        <span>신고</span>
      </ThreadButton>
    </ButtonWrapper>
  );
};

export default index;
