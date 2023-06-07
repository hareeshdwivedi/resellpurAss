import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";

import Seo from "../components/Seo";
import theme from "../utils/mui-theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
