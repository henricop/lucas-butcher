import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  p, h1, h2, h3, h4, h4 {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
  }

  :root {
    font-size: 14px;
    --transition: .2s ease-in-out;
    --transform-scale: scale(1.05);
  } 

`;
