import React from "react";
import { Tag } from "./styles";

interface IProps {
  label: String;
  onDelete?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  style?: React.CSSProperties;
}

const index: React.FC<IProps> = (props) => {
  const deleteButton = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33331 9.33331L4.66666 4.66666"
        stroke="#546E7A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33334 4.66666L4.66666 9.33334"
        stroke="#546E7A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Tag
      label={props.label}
      onDelete={props.onDelete}
      deleteIcon={deleteButton}
      sx={props.style}
    />
  );
};

export default index;
