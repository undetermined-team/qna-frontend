import GlobalStyle from "../styles/globalStyles";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import Portal from '../components/Portal';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <RecoilRoot>
            <Component {...pageProps} />
            <Portal />
          </RecoilRoot>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
