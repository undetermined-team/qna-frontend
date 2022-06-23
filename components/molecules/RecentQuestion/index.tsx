import React from "react";
import { DeleteIcon } from "../../../public/assets/SvgIcons";
import { RecentQuestionList, RecentQuestionTitle, RecentQuestionDeleteButton } from "./styles";
import Link from "next/link";

interface RecentQuestionProps {
  title: String;
  link: string;
  onDelete: (e: HTMLButtonElement) => void;
}

const Index: React.FC<RecentQuestionProps> = (props) => {
  return (
    <RecentQuestionList>
      <Link href={props.link}>
        <RecentQuestionTitle>{props.title}</RecentQuestionTitle>
      </Link>
      <RecentQuestionDeleteButton>
        <DeleteIcon />
      </RecentQuestionDeleteButton>
    </RecentQuestionList>
  );
};

export default Index;
