import React, { useState } from "react";
import styled from "styled-components";
import Tag from "../../../atoms/Tag";
import {
  FilterLayout,
  ServiceAbout,
  ServiceSummary,
  QuestionDescription,
  QuestionCount,
  ButtonGroup,
  AskQuestionButton,
  ToggleButton,
  TagSearchInput,
  DeleteAllButton,
  TagsContainer,
  FilterTag,
  TagSearchDropDownContainer,
  TagSearchDropDownCount,
  TagSearchDropDownRow,
  TagSearchDropDownRowWrapper,
} from "./styles";

const FilterArea = () => {
  const [toggle, setToggle] = useState("newest");
  const [tagSearch, setTagSearch] = useState("");
  const [selectedFilterTags, setSelectedFilterTags] = useState([]);

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

  return (
    <FilterLayout>
      <ServiceAbout>
        <ServiceSummary>여러분의 지식을 나눠주세요.</ServiceSummary>

        <QuestionDescription>
          <QuestionCount>1,515,546</QuestionCount>
          <span>개의 질문이 답변을 기다리고 있습니다.</span>
        </QuestionDescription>
      </ServiceAbout>

      <ButtonGroup>
        <ToggleButton
          id="newest"
          onClick={toggleClickHandler}
          variant={toggle === "newest" ? "selected" : "normal"}
        >
          최신
        </ToggleButton>
        <ToggleButton
          id="popular"
          onClick={toggleClickHandler}
          variant={toggle === "popular" ? "selected" : "normal"}
        >
          인기
        </ToggleButton>
        <ToggleButton
          id="unanswered"
          onClick={toggleClickHandler}
          variant={toggle === "unanswered" ? "selected" : "normal"}
        >
          답변 필요
        </ToggleButton>
        <ToggleButton
          id="reward"
          onClick={toggleClickHandler}
          variant={toggle === "reward" ? "selected" : "normal"}
        >
          리워드
        </ToggleButton>

        <TagSearchDropDownContainer>
          <TagSearchInput
            value={tagSearch}
            onChange={tagSearchInputChangeHandler}
            type="text"
            placeholder="태그명으로 검색"
          />

          {tagSearch && (
            <TagSearchDropDownRowWrapper>
              {[{ label: tagSearch }].map((tag) => (
                <TagSearchDropDownRow onClick={() => dropDownRowClickHandler(tag.label)}>
                  <Tag label={tag.label} />
                  <TagSearchDropDownCount>질문 ?개</TagSearchDropDownCount>
                </TagSearchDropDownRow>
              ))}
            </TagSearchDropDownRowWrapper>
          )}
        </TagSearchDropDownContainer>

        <AskQuestionButton>질문하기</AskQuestionButton>
      </ButtonGroup>

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
