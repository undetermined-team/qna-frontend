import React from "react";
import CommentContainer from "../CommentContainer";
import Verified from "../../../molecules/Verified";
import {
  AnswerArticle,
  AnswerContent,
  ArticleInfoContainer,
  QuestionButtonPackContainer,
  ThreadCreateAt,
  UserRank,
} from "./styles";
import QuestionButtonPack from "../../../molecules/QuestionButtonPack";
import { ThreadTrends } from "../../../molecules/ThreadContainer/styles";

interface AnswerArticleProps {}

const index: React.FC<AnswerArticleProps> = (props) => {
  return (
    <AnswerArticle>
      <AnswerContent>
        static String m 은 스태틱 변수입니다. 스태틱 변수의 초기화 시점은 앱 기동할 때 딱~ 한
        번입니다. 그래서static은 보통 상수를 정의할 때 사용합니다. get 클래스를 안스태틱으로
        해봤다는 말은:
      </AnswerContent>

      <ArticleInfoContainer>
        <div>
          <Verified />

          <div>
            <ThreadTrends label="댓글" count={4} />
            <ThreadTrends label="좋아요" count={13} />

            <QuestionButtonPackContainer>
              <QuestionButtonPack shareLink="naver.com" />
            </QuestionButtonPackContainer>
          </div>
        </div>

        <div>
          <UserRank userName="jojorabbit21" bounty={8750} />
          <ThreadCreateAt>2022-03-03 18:47 에 작성됨</ThreadCreateAt>
        </div>
      </ArticleInfoContainer>

      <CommentContainer />
    </AnswerArticle>
  );
};

export default index;
