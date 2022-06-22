import styled from "styled-components";

export const UserSummaryWrapper = styled.div`
  display: flex;
  height: 36px;
`;

export const Bounty = styled.p`
  ${(props) => props.theme.typography.Captions};
  color: #616161;
  margin-top: 3px;
`;

export const Rank = styled.span`
  ${(props) => props.theme.typography.Captions};
  font-size: 13px;
  width: 13px;
  text-align: center;
  margin-right: 9px;
`;

export const ProfileWrapper = styled.p`
  margin-right: 8px;
`;

export const ProfileInfo = styled.div`
  line-height: 15.23px;
`;

export const UserSummaryContainer = styled.div`
  cursor: pointer;
`;
