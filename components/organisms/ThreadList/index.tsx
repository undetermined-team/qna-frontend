import React from "react";
import styled from "styled-components";
import ThreadContainer, { ThreadContainerProps } from "../../molecules/ThreadContainer";

interface ThreadListProps {
  threadList: Array<ThreadContainerProps>;
}

const ThreadListWrapper = styled.main`
  height: 788px;
  background-color: #f5f5f5;
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
          key={index}
        />
      ))}
    </ThreadListWrapper>
  );
};

export default index;
