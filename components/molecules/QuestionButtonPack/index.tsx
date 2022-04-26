import React from "react";
import styled from "styled-components";
import { useMessage } from "../../../hook/useMessage";
import { ShareIcon, LikeIcon, ReportIcon } from "../../../public/assets/SvgIcons";
import { ThreadButton } from "../../atoms/ThreadButton";

interface QuestionButtonPackProps {
  shareLink?: string;
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 221px;
`;

const index: React.FC<QuestionButtonPackProps> = (props) => {
  const message = useMessage();

  const shareButtonClickHandler = () => {
    message({ message: "링크가 복사되었습니다.", duration: 1500 });
    navigator.clipboard.writeText(props.shareLink);
  };

  return (
    <ButtonWrapper>
      <ThreadButton onClick={shareButtonClickHandler}>
        {ShareIcon}
        <span>링크 복사</span>
      </ThreadButton>

      <ThreadButton isLike>
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
