import * as React from "react";
import { AppProps } from "next/app";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../lib/theme";
import createEmotionCache from "../lib/createEmotionCache";
import { requireAuthentication, isAuthenticated } from "../lib/auth";
import { useRouter } from "next/router";
import AppDrawer from "@/components/Container/AppDrawer";
import { RecoilRoot } from "recoil";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(requireAuthentication(currentPath), []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RecoilRoot>
          <AppDrawer>
            <Component {...pageProps} />
          </AppDrawer>
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
