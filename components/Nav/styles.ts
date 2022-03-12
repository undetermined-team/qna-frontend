import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const NavContainer = styled.nav`
  display: flex;
  background-color: white;
  padding: 10px;
  height: 60px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const NavContent = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`;

export const NavUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LogoExample = styled.p`
  font-size: 17;
  margin-right: 51px;
  color: #00e676;
  letter-spacing: -0.5px;
  font-weight: bold;
  font-family: "Roboto";
  line-height: 20;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = muiStyled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 13,
    position: "relative",
    backgroundColor: "#F5F5F5",
    border: "1px solid rgba(238, 238, 238, 1)",
    fontSize: 15,
    fontWeight: 400,
    color: "rgba(189,189,189,1)",
    paddingRight: "45px !important",
    padding: "11px 18px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto"].join(","),
  },
}));
