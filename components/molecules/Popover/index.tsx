import React, { useState } from "react";
import { ArrowUp, PopoverWrapper } from "./styles";

interface PopoverProps {
  children: React.ReactNode;
  contents: React.ReactNode;
}

const index: React.FC<PopoverProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PopoverWrapper>
      {isVisible && <>{props.contents}</>}
      <span onClick={() => setIsVisible(!isVisible)}>{props.children}</span>
    </PopoverWrapper>
  );
};

export default index;
