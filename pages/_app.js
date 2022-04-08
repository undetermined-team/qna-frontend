import GlobalStyle from "../styles/globalStyles";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { muiTheme, theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <GlobalStyle />
          <Layout>
            <CssBaseline />
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </Layout>
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
