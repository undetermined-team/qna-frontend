import styled from "styled-components";
import Tag from "../../atoms/Tag";

export const AsideLayout = styled.aside`
  border-right: 1px solid #d6d6d6;
  padding: 0px 16px;
  height: 100vh;
`;

export const RecentQuestionWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 110px;
  padding: 10px 9px;
  background-color: #eceff1;
  border-radius: 3px;
`;

export const BountyRankWrapper = styled.div`
  padding: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 254px;
`;

export const AsideTag = styled(Tag)`
  margin-right: 6px;
  margin-bottom: 4px;
`;
