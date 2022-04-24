import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ShareIcon, LikeIcon, ReportIcon } from "../../../public/assets/SvgIcons";
import { messageSetter } from "../../../state/modal";
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
  const [isMessageRender, setIsMessageRender] = useRecoilState(messageSetter);

  const shareButtonClickHandler = () => {
    setIsMessageRender(true);
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
function useSetRecoilValue(messageRenderer: any) {
  throw new Error("Function not implemented.");
}
