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
          <meta
            name="description"
            content="I'm a front end developer looking to find a team who will push me to my limits and beyond! Learning new technologies is my passion and excellence is my virtue. I have worked mostly with React based apps."
          />
          <meta name="robots" content="index, follow" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
