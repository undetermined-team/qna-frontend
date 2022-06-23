import styled from "styled-components";
import Tag from "../../atoms/Tag";
import ThreadTrend from "../ThreadTrend";

export const ThreadTitle = styled.h3`
  display: inline-flex;
  ${(props) => props.theme.typography.Heading3};
  line-height: 18px;
  margin-right: 12px;
  max-width: 470px;
  max-height: 58px;
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  cursor: pointer;
`;

export const ThreadBounty = styled.span`
  ${(props) => props.theme.typography.Captions};
  padding: 3px;
  background-color: ${(props) => props.theme.palette.AmberA700};
  color: black;
  border-radius: 2px;
  width: 29px;
  text-align: center;
  height: 21px;
  cursor: default;
`;

export const ThreadContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 17.3px 25px;
  height: 100px;
  position: relative;
  border: 1px solid #e0e0e0;
  background-color: white;
  border-right: none;
  border-left: none;
`;

export const ThreadTime = styled.time`
  ${(props) => props.theme.typography.Captions};
  margin-left: 6px;
  color: #9e9e9e;
  text-align: right;
`;

export const ThreadHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;

export const TagWrapper = styled.div`
  height: 24px;
  max-width: 500px;
  width: fit-content;
  overflow-y: hidden;
`;

export const TagShowMore = styled.button`
  width: 31px;
  height: 21px;
  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.palette.BlueGray200};
  padding: 5px 9px;
  text-align: center;
  color: ${(props) => props.theme.palette.BlueGray500};
  cursor: pointer;
  border-radius: 2px;

  svg {
    display: flex;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.palette.BlueGray400};
    color: ${(props) => props.theme.palette.BlueGray800};

    svg {
      path {
        fill: ${(props) => props.theme.palette.BlueGray800};
      }
    }
  }
  &:focus {
    border: 1px solid ${(props) => props.theme.palette.BlueGray400};
    color: ${(props) => props.theme.palette.BlueGray800};

    svg {
      path {
        fill: ${(props) => props.theme.palette.BlueGray800};
      }
    }
  }
`;

export const TagAndInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ThreadTag = styled(Tag)`
  margin-right: 4px;
  margin-bottom: 4px;
`;

export const TrendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 163px;
`;
