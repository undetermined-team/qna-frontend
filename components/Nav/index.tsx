import React from "react";
import {
  NavContainer,
  SearchInput,
  NavContent,
  LogoExample,
  NavUl,
  SearchContainer,
} from "./styles";
import IconButton from "@mui/material/IconButton";

const Nav = () => {
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 12.5L17.5 17.5"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        </SearchContainer>

        <NavUl>
          <li>
            <IconButton
              sx={{ p: "10px" }}
              disableFocusRipple
              disableTouchRipple
              disableRipple
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" fill="white" />
                <path
                  d="M27.6585 17.7012L20.6585 11.5762C20.2815 11.2463 19.7185 11.2463 19.3415 11.5762L12.3415 17.7012C12.1245 17.8911 12 18.1654 12 18.4538V27C12 27.5523 12.4477 28 13 28H27C27.5523 28 28 27.5523 28 27V18.4538C28 18.1654 27.8755 17.8911 27.6585 17.7012Z"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </li>

          <li>
            <IconButton
              sx={{ p: "10px" }}
              disableFocusRipple
              disableTouchRipple
              disableRipple
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" fill="white" />
                <path
                  d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29Z"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 20H29"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 29C21.6569 29 23 24.9706 23 20C23 15.0294 21.6569 11 20 11C18.3431 11 17 15.0294 17 20C17 24.9706 18.3431 29 20 29Z"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </li>

          <li>
            <IconButton
              sx={{ p: "10px" }}
              disableFocusRipple
              disableTouchRipple
              disableRipple
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" fill="white" />
                <path
                  d="M13.79 23.07L14.3257 22.2256C14.0718 22.0645 13.759 22.0262 13.4738 22.1213L13.79 23.07ZM11 24L10.0513 23.6838C9.93154 24.0431 10.0251 24.4393 10.2929 24.7071C10.5607 24.9749 10.9569 25.0685 11.3162 24.9487L11 24ZM11.93 21.21L12.8787 21.5262C12.9738 21.241 12.9355 20.9282 12.7744 20.6743L11.93 21.21ZM17 25C20.866 25 24 21.866 24 18H22C22 20.7614 19.7614 23 17 23V25ZM13.2542 23.9144C14.338 24.602 15.624 25 17 25V23C16.0146 23 15.0985 22.7159 14.3257 22.2256L13.2542 23.9144ZM13.4738 22.1213L10.6838 23.0513L11.3162 24.9487L14.1062 24.0187L13.4738 22.1213ZM11.9487 24.3162L12.8787 21.5262L10.9813 20.8938L10.0513 23.6838L11.9487 24.3162ZM10 18C10 19.376 10.398 20.662 11.0856 21.7458L12.7744 20.6743C12.2841 19.9015 12 18.9854 12 18H10ZM17 11C13.134 11 10 14.134 10 18H12C12 15.2386 14.2386 13 17 13V11ZM24 18C24 14.134 20.866 11 17 11V13C19.7614 13 22 15.2386 22 18H24Z"
                  fill="#BDBDBD"
                />
                <path
                  d="M17.3379 23.9896C18.1586 26.3254 20.3838 28 23.0001 28C24.1808 28 25.2819 27.659 26.2101 27.07L29.0001 28L28.0701 25.21L28.2122 24.9744C28.7136 24.0977 29.0001 23.0823 29.0001 22C29.0001 18.6863 26.3138 16 23.0001 16L22.7752 16.0041L22.6623 16.0101"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </li>

          <li>
            <IconButton
              sx={{ p: "10px" }}
              disableFocusRipple
              disableTouchRipple
              disableRipple
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" fill="white" />
                <path
                  d="M20 21C21.6569 21 23 19.6569 23 18C23 16.3431 21.6569 15 20 15C18.3431 15 17 16.3431 17 18C17 19.6569 18.3431 21 20 21Z"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 11H12C11.4477 11 11 11.4477 11 12V28C11 28.5523 11.4477 29 12 29H28C28.5523 29 29 28.5523 29 28V12C29 11.4477 28.5523 11 28 11Z"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 29C15 26.2386 17.2386 24 20 24C22.7614 24 25 26.2386 25 29"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </li>
        </NavUl>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
