import styled from "styled-components";

export const ThreadTitle = styled.h3`
  display: inline-flex;
  ${(props) => props.theme.typography.Heading3};
  line-height: 19px;
  margin-right: 12px;
  max-width: 470px;
  max-height: 58px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  cursor: pointer;
`;

export const ThreadBounty = styled.span`
  ${(props) => props.theme.typography.Captions};
  padding: 3px;
  background-color: #69f0ae;
  color: #004d40;
  border-radius: 2px;
  width: 29px;
  text-align: center;
  height: 21px;
  cursor: default;
`;

export const ThreadContainer = styled.article`
  position: relative;
  padding: 13px 18px 14px 25px;
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
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  position: relative;
  max-width: 31.6rem;
  height: 24px;
  overflow-y: hidden;
  white-space: nowrap;

  svg {
    display: flex;
  }
`;

export const TagShowMore = styled.button`
  position: absolute;
  right: 0;
  width: 31px;
  height: 21px;
  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.palette.BlueGray200};
  padding: 5px 9px;
  text-align: center;
  color: ${(props) => props.theme.palette.BlueGray500};
  cursor: pointer;
  border-radius: 2px;

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
