import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    * {
      box-sizing: border-box;
    }
  }
`;

export default GlobalStyle;
