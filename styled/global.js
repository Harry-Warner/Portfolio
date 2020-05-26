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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    background: rgba(204, 234, 187, .75);
  };
`;

export default GlobalStyle;
