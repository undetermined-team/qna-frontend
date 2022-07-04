import styled from "styled-components";
import Button from "../../../atoms/Button";
import { Input } from "../../../atoms/Input";
import Tag from "../../../atoms/Tag";

export const FilterLayout = styled.section`
  padding: 23px 26px 0px 26px;
  border-bottom: 6px solid #f5f5f5;
`;

export const ServiceAbout = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const ServiceSummary = styled.h2`
  ${(props) => props.theme.typography.Heading1};
`;

export const QuestionCount = styled.span`
  ${(props) => props.theme.typography.Heading3};
  color: ${(props) => props.theme.palette.Amber900};
`;

export const QuestionDescription = styled.p`
  ${(props) => props.theme.typography.Body};
  ${(props) => props.theme.palette.Gray900};
`;

export const MiddeGroup = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: center;
`;

export const AskQuestionButton = styled(Button)`
  ${(props) => props.theme.typography.ButtonBold};
  padding: 12px 29px;
  line-height: normal;
  color: white;
  width: 110px;
  height: 40px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.palette.LightBlue500};
  background-color: ${(props) => props.theme.palette.LightBlue500};
  border-radius: 6px;

  &:hover {
    border-color: ${(props) => props.theme.palette.LightBlue700};
    background-color: ${(props) => props.theme.palette.LightBlue700};
  }

  &:active {
    border-color: ${(props) => props.theme.palette.LightBlue700};
    background-color: ${(props) => props.theme.palette.LightBlue700};
  }
`;

export const TagSearchInput = styled(Input)`
  border-radius: 2px;
  padding: 6px 10px;
  width: 204px;
  height: 32px;
`;

export const DeleteAllButton = styled(Button)`
  height: 36px;
  color: ${(props) => props.theme.palette.BlueGray800};
  padding: 0;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterTag = styled(Tag)`
  margin-right: 8px;
`;

export const TagSearchDropDownCount = styled.span`
  ${(props) => props.theme.typography.Tags};
  text-align: right;
  color: ${(props) => props.theme.palette.Gray600};
`;

export const TagSearchDropDownContainer = styled.div`
  position: relative;
  z-index: 10;
  margin-left: 13px;
`;

export const TagSearchDropDownRowWrapper = styled.div`
  position: absolute;
  padding: 10px;
  width: 204px;
  background-color: white;
  border: 1px soild ${(props) => props.theme.palette.Gray200};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const TagSearchDropDownRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
