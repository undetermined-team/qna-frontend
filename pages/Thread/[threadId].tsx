import React from "react";
import { useRouter } from "next/router";
import Aside from "../../components/organisms/Aside";
import styled from "styled-components";
import AnswerArticle from "../../components/organisms/Thread/AnswerArticle";
import ThreadHeader from "../../components/organisms/Thread/ThreadHeader";
import { DivideContainer } from "../../components/atoms/DivideContainer";
import Button from "../../components/atoms/Button";

const AnswerCount = styled.h3`
  ${(props) => props.theme.typography.Heading3};
  color: ${(props) => props.theme.palette.Gray900};
  height: 36px;''
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

export const AnswerButton = styled(Button)`
  ${(props) => props.theme.typography.ButtonBold};
  padding: 12px 29px;
  margin-bottom: 10px;
  line-height: normal;
  color: white;
  width: 110px;
  height: 40px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.palette.LightBlue500};
  background-color: ${(props) => props.theme.palette.LightBlue500};
  border-radius: 2px;

  &:hover {
    border-color: ${(props) => props.theme.palette.LightBlue700};
    background-color: ${(props) => props.theme.palette.LightBlue700};
  }

  &:active {
    border-color: ${(props) => props.theme.palette.LightBlue700};
    background-color: ${(props) => props.theme.palette.LightBlue700};
  }
`;

const AnswerButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.palette.Gray500};
  margin-bottom: 20px;
`;

const Thread = () => {
  return (
    <DivideContainer>
      <ThreadPostSection>
        <ThreadHeader />

        <QuestionArticle>
          <p>
            객체생성없이 변수를 사용할 목적으로 내부클래스로 정적클래스를 하나 만들고, static 변수를
            불러오니 처음에는 에딧텍스트의 값을 읽어 텍스트뷰에 뿌렸는데 두번째 부터는 처음값
            그대로를 불러오네요..... 맴버클래스로 바꾼뒤 객체 생성해서 불러오면 계속 바뀐 변수를
            불러오는데, static은 그렇지 못한 이유가 뭘까요? 아래는 연습한 코드입니다.
          </p>
        </QuestionArticle>

        <AnswerSection>
          <AnswerButtonWrapper>
            <AnswerCount>2개의 답변이 있습니다.</AnswerCount>
            <AnswerButton>답변하기</AnswerButton>
          </AnswerButtonWrapper>

          <main>
            <AnswerArticle />
          </main>
        </AnswerSection>
      </ThreadPostSection>

      <Aside />
    </DivideContainer>
  );
};

export default Thread;
