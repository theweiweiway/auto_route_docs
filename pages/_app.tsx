import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DefaultSeo } from "next-seo";
import theme from "../styles/theme";
import SideBar from "../src/side_bar/side_bar";
import "simplebar/dist/simplebar.min.css";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const RenderHead = () => {
      return (
        <React.Fragment>
          <DefaultSeo
            title="AutoRoute"
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
}
