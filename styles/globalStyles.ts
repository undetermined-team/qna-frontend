import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {  
    font-family : 'Roboto', 'Pretendard';
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ol,ul {
    margin : 0;
    padding : 0;
  }

  li {
    list-style : none;
  }
`;

export default GlobalStyle;
