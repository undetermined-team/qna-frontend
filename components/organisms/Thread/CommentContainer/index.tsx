import React from "react";
import CommentList from "../../../molecules/CommentList";
import CommentWriter from "../../../molecules/CommentWriter";
import { CommentContainer } from "./styles";

const index = () => {
  return (
    <CommentContainer>
      <CommentList />
      <CommentWriter />
    </CommentContainer>
  );
};

export default index;
