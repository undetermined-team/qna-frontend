import React from "react";
import styled from "styled-components";
import ThreadContainer, { ThreadContainerProps } from "../../../molecules/ThreadContainer";

interface ThreadListProps {
  threadList: Array<ThreadContainerProps>;
}

const ThreadListWrapper = styled.main`
  background-color: white;
  height: 816px;
`;

const index: React.FC<ThreadListProps> = (props) => {
  return (
    <ThreadListWrapper>
      {props.threadList?.map((thread, index) => (
        <ThreadContainer
          title={thread.title}
          tags={thread.tags}
          userName={thread.userName}
          trend={thread.trend}
          bounty={thread.bounty}
          createAt={thread.createAt}
          key={index}
        />
      ))}
    </ThreadListWrapper>
  );
};

export default index;
