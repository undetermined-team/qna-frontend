import React from "react";
import { NavContainer, NavContent, LogoExample, NavUl, SearchContainer } from "./styles";
import {
  HomeIcon,
  MessageIcon,
  NetWorkIcon,
  SearchIcon,
  ProfileIcon,
} from "../../../assets/SvgIcons";
import IconButton from "@mui/material/IconButton";
import { SearchInput } from "../../atoms/SearchInput";

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavContent>
        <LogoExample>Logo Here</LogoExample>

        <SearchContainer>
          <SearchInput
            sx={{ width: 562, height: 40 }}
            placeholder="궁금한게 있다면 검색해보세요."
          />

          <IconButton
            sx={{
              position: "absolute",
              p: "10px",
              right: 10,
            }}
            aria-label="search"
          >
            {SearchIcon}
          </IconButton>
        </SearchContainer>

        <NavUl>
          <li>
            <IconButton sx={{ p: "10px" }} disableFocusRipple disableTouchRipple disableRipple>
              {HomeIcon}
            </IconButton>
          </li>

          <li>
            <IconButton sx={{ p: "10px" }} disableFocusRipple disableTouchRipple disableRipple>
              {NetWorkIcon}
            </IconButton>
          </li>

          <li>
            <IconButton sx={{ p: "10px" }} disableFocusRipple disableTouchRipple disableRipple>
              {MessageIcon}
            </IconButton>
          </li>

          <li>
            <IconButton sx={{ p: "10px" }} disableFocusRipple disableTouchRipple disableRipple>
              {ProfileIcon}
            </IconButton>
          </li>
        </NavUl>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
