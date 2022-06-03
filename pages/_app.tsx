import GlobalStyle from "../styles/globalStyles";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import Portal from "../components/Portal";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../mocks");
}

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
          <Portal />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
