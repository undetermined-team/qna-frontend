import React from "react";
import {
  NavContainer,
  NavContent,
  LogoExample,
  NavUl,
  SearchInputWrapper,
  NavIconButton,
  SearchIconButton,
  SearchInput,
} from "./styles";
import {
  HomeIcon,
  CommunityButton,
  PeopleButton,
  SearchIcon,
  ProfileIcon,
} from "../../../public/assets/SvgIcons";
import Link from "next/link";

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
