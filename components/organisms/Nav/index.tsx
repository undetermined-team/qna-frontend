import React from "react";
import { NavContainer, NavContent, LogoExample, NavUl, SearchInputWrapper } from "./styles";
import {
  HomeIcon,
  CommunityButton,
  PeopleButton,
  SearchIcon,
  ProfileIcon,
} from "../../../public/assets/SvgIcons";
import IconButton from "../../atoms/IconButton";
import Link from "next/link";
import { Input } from "../../atoms/Input";
import styled from "styled-components";

const SearchInput = styled(Input)`
  border-radius: 8px;
  padding: 9px 16px;
  padding-right: 45px;
  width: 562px;
  height: 40px;
`;

const SearchIconButton = styled(IconButton)`
  position: absolute;
  padding: 10px;
  right: 10px;
`;

const NavIconButton = styled(IconButton)`
  padding: 10px;
`;

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavContent>
        <Link href="/">
          <LogoExample>Logo Here</LogoExample>
        </Link>

        <SearchInputWrapper>
          <SearchInput type="search" placeholder="궁금한게 있다면 검색해보세요." />
          <SearchIconButton>{SearchIcon}</SearchIconButton>
        </SearchInputWrapper>

        <nav>
          <NavUl>
            <li>
              <NavIconButton>{HomeIcon}</NavIconButton>
            </li>

            <li>
              <NavIconButton>{PeopleButton}</NavIconButton>
            </li>

            <li>
              <NavIconButton>{CommunityButton}</NavIconButton>
            </li>

            <li>
              <NavIconButton>{ProfileIcon}</NavIconButton>
            </li>
          </NavUl>
        </nav>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
