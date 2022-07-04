import styled from "styled-components";

export const ProgressWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 4px;
  background-color: ${(props) => props.theme.palette.Gray200};
  border-radius: 4px;
`;

interface ProgressBarProps {
  percent?: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${(props) => props.percent}%;
  height: 4px;
  transition: width 250ms;
  position: absolute;
  background-color: ${(props) =>
    props.percent <= 33
      ? props.theme.palette.RedA400
      : props.percent <= 66
      ? props.theme.palette.Amber900
      : props.theme.palette.GreenA700};
`;
