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
  SignInButton,
  SignUpButton,
} from "./styles";
import {
  HomeIcon,
  CommunityButton,
  PeopleButton,
  SearchIcon,
  ProfileIcon,
} from "../../../public/assets/SvgIcons";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { signInStatus } from "../../../state/user";

const Nav: React.FC = () => {
  const isSignedIn = useRecoilValue(signInStatus);

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
          {isSignedIn ? (
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
          ) : (
            <NavUl>
              <Link href="/signin">
                <SignInButton>로그인</SignInButton>
              </Link>

              <Link href="/signup">
                <SignUpButton>계정 생성</SignUpButton>
              </Link>
            </NavUl>
          )}
        </nav>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
