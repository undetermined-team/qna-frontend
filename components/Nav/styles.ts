import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";

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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.005em;
  margin-right: 51px;
  color: #00e676;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = muiStyled(InputBase)<InputBaseProps>(
  ({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 13,
      position: "relative",
      backgroundColor: theme.palette.Gray100,
      border: `1px solid ${theme.palette.Gray200}`,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 28,
      color: theme.palette.Gray400,
      paddingRight: "45px !important",
      padding: "11px 18px",
      fontFamily: "Roboto",
    },
  })
);
