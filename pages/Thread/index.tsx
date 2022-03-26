import React from "react";
import FilterArea from "./FilterArea";
import { Tag } from "../../components/atoms/Tag";
import DeleteTag from "../../components/molecules/DeleteTag";
import AsideContainer from "../../components/organisms/AsideContainer";
import { Space } from "../../assets/SvgIcons";
import ThreadContainer from "../../components/organisms/ThreadContainer";

const Thread = () => {
  const onDelete = (e) => {};
  const onTextButton = (e) => {};

  return (
    <div style={{ display: "inline-flex" }}>
      <div style={{ border: "1px solid #D6D6D6", borderTop: "none" }}>
        <FilterArea />
        <p
          style={{
            padding: "13px 26px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 13,
            color: "#616161",
          }}
        >
          57개의 검색 결과가 있습니다.
        </p>

        <div style={{ height: 788, backgroundColor: "#F5F5F5" }}>
          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />

          <ThreadContainer
            title="Title Here"
            tags={["javascript", "vue.js", "react"]}
            userName="Jojorabbit21"
            trend={{ view: 87, like: 13, answerCount: 3 }}
            bounty={75}
          />
        </div>
      </div>

      <div style={{ borderRight: "1px solid #D6D6D6", padding: "0px 16px" }}>
        <AsideContainer title="검색한 태그" subButtonText="수정하기" onTextClick={onTextButton}>
          <Tag label="javascript" />
          <Tag label="node.js" />
          <Tag label="svelte" />
          <Tag label="next.js" />
          <Tag label="java" />
          <Tag label="ruby" />
          <Tag label="react" />
        </AsideContainer>

        {Space}

        <AsideContainer title="최근에 본 질문" subButtonText="전체보기" onTextClick={onTextButton}>
          <DeleteTag
            style={{ display: "block" }}
            onDelete={onDelete}
            label="위도/경도 불러오는 함수 질문드립니다."
          />
          <DeleteTag
            style={{ display: "block" }}
            onDelete={onDelete}
            label="파이썬 3항연산자 궁금합니다"
          />
          <DeleteTag
            style={{ display: "block" }}
            onDelete={onDelete}
            label="Pyside2 QThread 매개변수는 어떻게..."
          />
          <DeleteTag
            style={{ display: "block" }}
            onDelete={onDelete}
            label="Excel csv 저장시 맨 앞에 숫자 0을 붙..."
          />
        </AsideContainer>

        {Space}

        <AsideContainer
          title="명성 순위"
          subButtonText="모두 보기"
          onTextClick={onTextButton}
        ></AsideContainer>
      </div>
    </div>
  );
};

export default Thread;
