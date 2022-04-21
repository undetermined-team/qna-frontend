import React from "react";
import { NavContainer, NavContent, LogoExample, NavUl, SearchContainer } from "./styles";
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

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavContent>
        <Link href="/">
          <LogoExample>Logo Here</LogoExample>
        </Link>

        <SearchContainer>
          <Input
            type="search"
            style={{
              borderRadius: 8,
              padding: "9px 16px",
              paddingRight: "45px",
              width: 562,
              height: 40,
            }}
            placeholder="궁금한게 있다면 검색해보세요."
          />

          <IconButton
            style={{
              position: "absolute",
              padding: 10,
              right: 10,
            }}
          >
            {SearchIcon}
          </IconButton>
        </SearchContainer>

        <nav>
          <NavUl>
            <li>
              <IconButton style={{ padding: 10 }}>{HomeIcon}</IconButton>
            </li>

            <li>
              <IconButton style={{ padding: 10 }}>{PeopleButton}</IconButton>
            </li>

            <li>
              <IconButton style={{ padding: 10 }}>{CommunityButton}</IconButton>
            </li>

            <li>
              <IconButton style={{ padding: 10 }}>{ProfileIcon}</IconButton>
            </li>
          </NavUl>
        </nav>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
