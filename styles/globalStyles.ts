import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    letter-spacing: -1px;
    font-size: 15px;
  }

  p {
    margin: 0;
  }

  li {
    list-style : none;
  }
`;

export default GlobalStyle;
