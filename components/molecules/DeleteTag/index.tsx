import React from "react";
import { Tag } from "../../atoms/Tag";
import { DeleteIcon } from "../../../public/assets/SvgIcons";

interface DeleteTagProps {
  label: String;
  onDelete?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  style?: React.CSSProperties;
}

const index: React.FC<DeleteTagProps> = (props) => {
  return (
    <Tag label={props.label} onDelete={props.onDelete} deleteIcon={DeleteIcon} sx={props.style} />
  );
};

export default index;
