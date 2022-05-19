import styled from "styled-components";

export const NavContainer = styled.header`
  position: fixed;
  display: flex;
  background-color: white;
  border: 1px solid #eeeeee;
  padding: 10px;
  height: 60px;
  width: 100%;
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

export const SearchContainer = styled.div`
  position: relative;
`;
