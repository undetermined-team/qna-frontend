import React from "react";
import Tag from "../../atoms/Tag";
import { DeleteIcon } from "../../../public/assets/SvgIcons";

interface DeleteTagProps {
  label: string;
  onDelete?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  style?: React.CSSProperties;
}

const index: React.FC<DeleteTagProps> = (props) => {
  return (
    <Tag
      label={props.label}
      deleteIcon={DeleteIcon}
      onDelete={props.onDelete}
      style={props.style}
    />
  );
};

export default index;
