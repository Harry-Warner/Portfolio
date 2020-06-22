import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styled/tailwind.css";
import GlobalStyle from "../styled/global";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <title>Harry Warner</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
