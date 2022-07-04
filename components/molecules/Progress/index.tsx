import React from "react";
import { ProgressBar, ProgressWrapper } from "./styles";

interface ProgressProps {
  percent?: number;
}

const Progress: React.FC<ProgressProps> = ({ percent }) => {
  return (
    <ProgressWrapper>
      <ProgressBar percent={percent} />
    </ProgressWrapper>
  );
};

export default Progress;
