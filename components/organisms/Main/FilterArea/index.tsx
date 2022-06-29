import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../../atoms/Button";
import Tag from "../../../atoms/Tag";
import {
  FilterLayout,
  ServiceAbout,
  ServiceSummary,
  QuestionDescription,
  QuestionCount,
  AskQuestionButton,
  TagSearchInput,
  DeleteAllButton,
  TagsContainer,
  FilterTag,
  TagSearchDropDownContainer,
  TagSearchDropDownCount,
  TagSearchDropDownRow,
  TagSearchDropDownRowWrapper,
  MiddeGroup,
} from "./styles";

interface ToggleButtonStateType {
  isSelected: boolean;
  borderRadius?: boolean;
}

const ToggleButton = styled(Button)<ToggleButtonStateType>`
  color: ${(props) => props.theme.palette.Gray500};
  height: 32px;
  padding: 6px 17px;

  ${(props) =>
    props.isSelected &&
    css`
      border-color: ${(props) => props.theme.palette.Amber700};
      color: black;
    `}

  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: 2px 0px 0px 2px;
    `}

  :hover {
    border-color: ${(props) => props.theme.palette.Amber700};
    background-color: ${(props) => props.theme.palette.Amber50};
  }
`;

const FilterArea = () => {
  const [tagSearch, setTagSearch] = useState("");
  const [selectedFilterTags, setSelectedFilterTags] = useState([]);
  const [toggle, setToggle] = useState("newest");

  const toggleClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(e.currentTarget.id);
  };
  const tagSearchInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTagSearch(e.currentTarget.value);
  };

  const dropDownRowClickHandler = (label: String) => {
    setSelectedFilterTags([...selectedFilterTags, label]);
    setTagSearch("");
  };

  const handleDelete = (label: string) => {
    setSelectedFilterTags(selectedFilterTags.filter((tag) => tag !== label));
  };

  const tagAutoCompleteKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    console.log(e.key);
  };

  return (
    <FilterLayout>
      <ServiceAbout>
        <div>
          <ServiceSummary>여러분의 지식을 나눠주세요.</ServiceSummary>

          <QuestionDescription>
            <QuestionCount>1,515,546</QuestionCount>
            <span>개의 질문이 답변을 기다리고 있습니다.</span>
          </QuestionDescription>
        </div>

        <AskQuestionButton>질문하기</AskQuestionButton>
      </ServiceAbout>

      <MiddeGroup>
        <ToggleButton
          isSelected={toggle === "newest"}
          borderRadius
          id="newest"
          onClick={toggleClickHandler}
        >
          최신
        </ToggleButton>
        <ToggleButton isSelected={toggle === "popular"} id="popular" onClick={toggleClickHandler}>
          인기
        </ToggleButton>
        <ToggleButton
          isSelected={toggle === "unanswered"}
          id="unanswered"
          onClick={toggleClickHandler}
        >
          답변 필요
        </ToggleButton>
        <ToggleButton
          isSelected={toggle === "reward"}
          borderRadius
          id="reward"
          onClick={toggleClickHandler}
        >
          리워드
        </ToggleButton>

        <TagSearchDropDownContainer>
          <TagSearchInput
            value={tagSearch}
            onChange={tagSearchInputChangeHandler}
            onKeyDown={tagAutoCompleteKeyDownHandler}
            type="text"
            placeholder="태그명으로 검색"
          />

          {tagSearch && (
            <TagSearchDropDownRowWrapper>
              {[{ label: tagSearch }].map((tag, key) => (
                <TagSearchDropDownRow
                  key={key}
                  onClick={() => dropDownRowClickHandler(tag.label)}
                  style={{ border: "#2c8abd" }}
                >
                  <Tag label={tag.label} />
                  <TagSearchDropDownCount>질문 ?개</TagSearchDropDownCount>
                </TagSearchDropDownRow>
              ))}
            </TagSearchDropDownRowWrapper>
          )}
        </TagSearchDropDownContainer>
      </MiddeGroup>

      <TagsContainer>
        <div>
          {selectedFilterTags.map((filterTag, i) => (
            <FilterTag label={filterTag} onDelete={() => handleDelete(filterTag)} key={i} />
          ))}
        </div>

        {selectedFilterTags.length > 0 && (
          <DeleteAllButton variant="text" onClick={() => setSelectedFilterTags([])}>
            모두 삭제
          </DeleteAllButton>
        )}
      </TagsContainer>
    </FilterLayout>
  );
};

export default FilterArea;
