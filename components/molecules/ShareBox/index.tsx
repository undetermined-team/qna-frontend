import React from "react";
import { ShareBox, ShareLink, ShareButton } from "./styles";

interface ShareBoxProps {
  link: string;
}

const index: React.FC<ShareBoxProps> = (props) => {
  return (
    <ShareBox>
      <ShareLink>{props.link}</ShareLink>
      <ShareButton onClick={() => navigator.clipboard.writeText(props.link)}>링크 복사</ShareButton>
    </ShareBox>
  );
};

export default index;
