import styled from "styled-components";
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

export const LogoExample = styled.p`
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.005em;
  margin-right: 51px;
  color: #00e676;
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
