import styled from "styled-components";
import Button from "../../../atoms/Button";
import { Input } from "../../../atoms/Input";
import Tag from "../../../atoms/Tag";

export const FilterLayout = styled.section`
  padding: 23px 26px 25px 26px;
  border-bottom: 6px solid #f5f5f5;
`;

export const ServiceAbout = styled.header`
  margin-bottom: 22px;
`;

export const ServiceSummary = styled.h2`
  ${(props) => props.theme.typography.Heading1};
`;

export const QuestionCount = styled.span`
  ${(props) => props.theme.typography.Heading3};
  color: ${(props) => props.theme.palette.GreenA700};
`;

export const QuestionDescription = styled.p`
  ${(props) => props.theme.typography.Body2};
  color: ${(props) => props.theme.palette.Gray500};
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 11px;
  position: relative;
`;

export const AskQuestionButton = styled.button`
  ${(props) => props.theme.typography.Body2};
  line-height: normal;
  color: #fff;
  position: absolute;
  right: 0;
  width: 86px;
  height: 36px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.palette.LightBlueA400};
  background-color: ${(props) => props.theme.palette.LightBlueA400};
  border-radius: 2px;

  &:hover {
    background-color: ${(props) => props.theme.palette.LightBlueA700};
  }

  &:active {
    background: ${(props) => props.theme.palette.LightBlueA700};
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ToggleButton = styled(Button)`
  margin-right: 4px;
`;

export const TagSearchInput = styled(Input)`
  border-radius: 2px;
  padding: 6px 10px;
  width: 204px;
  height: 36px;
`;

export const DeleteAllButton = styled(Button)`
  height: 36px;
  color: #ff8f00;
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
