import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  li {
    list-style : none;
  }
`;

export default GlobalStyle;
