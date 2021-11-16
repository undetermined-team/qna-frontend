import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
