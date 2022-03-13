import { useEffect } from 'react'
import GlobalStyle from "../styles/globalStyles";
import Layout from '../components/Layout';
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
