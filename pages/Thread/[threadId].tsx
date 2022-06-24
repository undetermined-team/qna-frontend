import React from "react";
import Aside from "../../components/organisms/Aside";
import styled from "styled-components";
import AnswerArticle from "../../components/organisms/Thread/AnswerArticle";
import ThreadHeader from "../../components/organisms/Thread/ThreadHeader";
import { DivideContainer } from "../../components/atoms/DivideContainer";
import { fetcher } from "../../useRequest";
import { GetServerSideProps } from "next";
import { ThreadType } from "../../types/threadType";
import useSWR, { SWRConfig } from "swr";

const Thread = ({ fallback }) => {
  const { data: threadData } = useSWR("https://example.com/thread/0", fetcher);

  return (
    <DivideContainer>
      <ThreadPostSection>
        <ThreadHeader
          title={threadData.title}
          tags={threadData.tags}
          threadTrend={threadData.trend}
          createAt={threadData.createAt}
        />

        <QuestionArticle>
          <p>{threadData.questionArticle}</p>
        </QuestionArticle>

        <AnswerSection>
          <AnswerCount>{threadData.answerList?.length}개의 답변이 있습니다.</AnswerCount>

          <main>
            {threadData.answerList?.map((threadInfo, key) => (
              <AnswerArticle key={key} answer={threadInfo} />
            ))}
          </main>
        </AnswerSection>
      </ThreadPostSection>

      <Aside />
    </DivideContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const thread = await (await fetcher("https://example.com/thread/0")).data;

  return {
    props: {
      fallback: {
        "https://example.com/thread/0": thread,
      },
    },
  };
};

export default Thread;

const AnswerCount = styled.h3`
  ${(props) => props.theme.typography.Heading3};
  color: ${(props) => props.theme.palette.Gray900};
  height: 38px;
  border-bottom: 1px solid ${(props) => props.theme.palette.Gray500};
  margin-bottom: 20px;
`;

const QuestionArticle = styled.article`
  padding: 20px 16px;
  border-bottom: 6px solid #f5f5f5;
`;

const ThreadPostSection = styled.section`
  border: 1px solid #d6d6d6;
  border-top: none;
  width: 708px;
`;

const AnswerSection = styled.section`
  padding: 20px 16px;
`;
