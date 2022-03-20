import React from "react";
import { Tag } from "../../atoms/Tag";
import { DeleteIcon } from "../../../assets/SvgIcons";

interface IProps {
  label: String;
  onDelete?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  style?: React.CSSProperties;
}

const index: React.FC<IProps> = (props) => {
  return (
    <Tag label={props.label} onDelete={props.onDelete} deleteIcon={DeleteIcon} sx={props.style} />
  );
};

export default index;
