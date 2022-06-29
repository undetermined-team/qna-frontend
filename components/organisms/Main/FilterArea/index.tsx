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
import axios from "axios";

interface ToggleButtonStateType {
  isSelected: boolean;
  borderRadius?: boolean;
}

const ToggleButton = styled(Button)<ToggleButtonStateType>`
  color: ${(props) => props.theme.palette.Gray500};
  height: 28px;
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

interface TagListType {
  ProgrammingLanguage: string;
  createdAt: string;
  objectId: string;
  updatedAt: string;
}

const FilterArea = () => {
  const [tagSearch, setTagSearch] = useState("");
  const [suggestList, setSuggestList] = useState<TagListType[]>([]);
  const [selectedFilterTags, setSelectedFilterTags] = useState([]);
  const [toggle, setToggle] = useState("newest");
  const [isDropDownFocus, setIsDropDownFocus] = useState(false);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  const getTagList = async (label: string) => {
    const firstCharUpper = (label: string) => {
      return label.charAt(0).toUpperCase() + label.slice(1);
    };

    const where = encodeURIComponent(
      JSON.stringify({
        ProgrammingLanguage: {
          $regex: firstCharUpper(label),
        },
      })
    );

    return await axios.get(
      `https://parseapi.back4app.com/classes/ProgrammingLanguages_All_Programming_Languages?limit=10&keys=ProgrammingLanguage&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": "1xY6p1pf5RFZzu6Tg6N7aGVizI93qUbm7dOmbzL0", // This is your app's application id
          "X-Parse-REST-API-Key": "Gxn8RLxgIKurgeZM15iDorlWgrP4p8wmF6uqO8h1", // This is your app's REST API key
        },
      }
    );
  };

  const toggleClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(e.currentTarget.id);
  };

  const tagSearchInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    setTagSearch(e.currentTarget.value);
    setSuggestList((await getTagList(e.currentTarget.value)).data.results);
  };

  const handleDelete = (label: string) => {
    setSelectedFilterTags(selectedFilterTags.filter((tag) => tag !== label));
  };

  const tagAutoCompleteKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "ArrowUp") {
      return setDropDownItemIndex(dropDownItemIndex - 1);
    }

    if (e.key === "ArrowDown") {
      return setDropDownItemIndex(dropDownItemIndex + 1);
    }

    if (e.key === "Enter") {
      setSelectedFilterTags([
        ...selectedFilterTags,
        suggestList[dropDownItemIndex].ProgrammingLanguage,
      ]);
      setTagSearch("");
      setDropDownItemIndex(0);
    }
  };

  const onTagInputFocusHandler = () => {
    setIsDropDownFocus(true);
  };

  const onTagInputBlurHandler = () => {
    setIsDropDownFocus(false);
  };

  const dropDownRowClickHandler = (label: string) => {
    setDropDownItemIndex(0);
    setSelectedFilterTags([...selectedFilterTags, label]);
    setTagSearch("");
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
        <div>
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
        </div>

        <TagSearchDropDownContainer>
          <TagSearchInput
            value={tagSearch}
            onChange={tagSearchInputChangeHandler}
            onKeyDown={tagAutoCompleteKeyDownHandler}
            onFocus={onTagInputFocusHandler}
            type="text"
            placeholder="태그명으로 검색"
          />

          {tagSearch && isDropDownFocus && (
            <TagSearchDropDownRowWrapper>
              {suggestList?.map((tag, key) => (
                <TagSearchDropDownRow
                  onClick={() => dropDownRowClickHandler(tag.ProgrammingLanguage)}
                  key={key}
                  style={
                    key === dropDownItemIndex ? { background: "#ECEFF1" } : { background: "none" }
                  }
                >
                  <Tag label={tag.ProgrammingLanguage} />
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
