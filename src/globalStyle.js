import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    
    background: #0D0C1D;
    color: #EFFFFA;

    height: 100vh;
  
    text-rendering: optimizeLegibility;
  }
  `;
