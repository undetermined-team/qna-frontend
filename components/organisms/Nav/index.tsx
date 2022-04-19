import React from "react";
import { NavContainer, NavContent, LogoExample, NavUl, SearchContainer } from "./styles";
import {
  HomeIcon,
  MessageIcon,
  NetWorkIcon,
  SearchIcon,
  ProfileIcon,
} from "../../../public/assets/SvgIcons";
import IconButton from "../../atoms/IconButton";
import { SearchInput } from "../../atoms/SearchInput";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavContent>
        <Link href="/">
          <LogoExample>Logo Here</LogoExample>
        </Link>

        <SearchContainer>
          <SearchInput
            sx={{
              ".MuiInputBase-input": { borderRadius: "8px", padding: "11px 18px" },
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
            aria-label="search"
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
              <IconButton style={{ padding: 10 }}>{NetWorkIcon}</IconButton>
            </li>

            <li>
              <IconButton style={{ padding: 10 }}>{MessageIcon}</IconButton>
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
