import React, { useState } from "react";
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

const FilterArea = () => {
  const [tagSearch, setTagSearch] = useState("");
  const [selectedFilterTags, setSelectedFilterTags] = useState([]);

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

      <MiddeGroup>
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
