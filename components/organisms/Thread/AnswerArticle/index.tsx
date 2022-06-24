import React from "react";
import CommentContainer from "../CommentContainer";
import Verified from "../../../molecules/Verified";
import {
  AnswerArticle,
  AnswerContent,
  ArticleInfoContainer,
  QuestionButtonPackContainer,
  QuestionTrendWrapper,
  ThreadCreateAt,
  UserRank,
} from "./styles";
import QuestionButtonPack from "../../../molecules/QuestionButtonPack";
import ThreadTrend from "../../../molecules/ThreadTrend";
import { AnswerListType } from "../../../../types/threadType";

interface AnswerArticleProps {
  answer: AnswerListType;
}

const index: React.FC<AnswerArticleProps> = ({ answer }) => {
  return (
    <AnswerArticle>
      <AnswerContent>{answer?.article}</AnswerContent>

      <ArticleInfoContainer>
        <div>
          <Verified />

          <div>
            <QuestionTrendWrapper>
              <ThreadTrend label="댓글" count={answer.comment.length} />
              <ThreadTrend label="좋아요" count={answer.like} />
            </QuestionTrendWrapper>

            <QuestionButtonPackContainer>
              <QuestionButtonPack shareLink="naver.com" />
            </QuestionButtonPackContainer>
          </div>
        </div>

        <div>
          <UserRank userName={answer.writer} bounty={8750} />
          <ThreadCreateAt>2022-03-03 18:47 에 작성됨</ThreadCreateAt>
        </div>
      </ArticleInfoContainer>

      <CommentContainer />
    </AnswerArticle>
  );
};

export default index;
