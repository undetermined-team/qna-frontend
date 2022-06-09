import styled from "styled-components";
import { HayStack, Logo } from "../../../public/assets/SvgIcons";
import Button from "../../atoms/Button";
import IconButton from "../../atoms/IconButton";
import { Input } from "../../atoms/Input";

export const NavContainer = styled.header`
  position: sticky;
  display: flex;
  background-color: white;
  border: 1px solid #eeeeee;
  padding: 10px;
  height: 60px;
  top: 0;
  z-index: 500;
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

export const LogoWrapper = styled.p`
  cursor: pointer;
  display: flex;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled(Input)`
  border-radius: 8px;
  padding: 9px 16px;
  padding-right: 45px;
  width: 562px;
  height: 40px;
`;

export const SearchIconButton = styled(IconButton)`
  position: absolute;
  padding: 10px;
  right: 10px;
`;

export const NavIconButton = styled(IconButton)`
  padding: 10px;
`;

export const SignInButton = styled(Button)`
  width: 81px;
  background-color: white;
  margin-right: 11px;
  margin-left: 42px;
  border-color: ${(props) => props.theme.palette.LightBlueA100};
  color: ${(props) => props.theme.palette.BlueGray700};

  &:hover {
    border-color: ${(props) => props.theme.palette.LightBlueA100};
  }
`;

export const SignUpButton = styled(Button)`
  width: 101px;
  background-color: ${(props) => props.theme.palette.LightBlueA400};
  border-color: ${(props) => props.theme.palette.LightBlueA400};
  color: white;

  &:hover {
    border-color: ${(props) => props.theme.palette.LightBlueA400};
  }
`;

export const StyledLogo = styled(Logo)`
  margin-right: 7.67px;
`;

export const StyledHayStack = styled(HayStack)`
  margin-right: 16.77px;
`;
