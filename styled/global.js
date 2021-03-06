import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
  };
  body {
    height: 100%;
    margin: 0;
  };
`;

export default GlobalStyle;
