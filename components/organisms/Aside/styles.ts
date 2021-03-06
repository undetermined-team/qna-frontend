import styled from "styled-components";
import Tag from "../../atoms/Tag";

export const AsideLayout = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #d6d6d6;
  padding: 0px 16px;
  height: calc(100vh - 3.75rem);
`;

export const RecentQuestionWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 97px;
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

export const AsideTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  overflow-y: hidden;
`;

export const AsideFooter = styled.footer`
  margin: 26px;
  text-align: left;
`;

export const FooterWrapper = styled.div`
  display: flex;
`;

export const AsideFooterText = styled.p`
  ${(props) => props.theme.typography.Footer};
  color: ${(props) => props.theme.palette.BlueGray700};
  margin-right: 14px;
  line-height: 22px;
`;

export const Brand = styled.p`
  ${(props) => props.theme.typography.Footer};
  color: ${(props) => props.theme.palette.BlueGray400};
  margin-top: 9px;
  line-height: 22px;
`;
