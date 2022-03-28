import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  html,
  body {
    font-family: 'Roboto', sans-serif;
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
