import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DefaultSeo } from "next-seo";
import theme from "../styles/theme";
import SideBar from "../src/components/side_bar/side_bar";
import "simplebar/dist/simplebar.min.css";

function MyApp({ Component, pageProps }) {
  const RenderHead = () => {
    return (
      <React.Fragment>
        <DefaultSeo
          title="AutoRoute • Flutter Navigation Made Easy"
          description="A Flutter navigation package that allows for strongly-typed arguments passing, effortless deep-linking and code generation to simplify routes setup with minimal code"
        />
        <Head>
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <RenderHead />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
