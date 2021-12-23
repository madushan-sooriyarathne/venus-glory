import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    };

    html {
        box-sizing: border-box;
        font-size: 62.5%;

    }

    body {

        min-height: 100vh;
        width: 100vw;
        overflow-y: auto;
        overflow-x: hidden;

         font-family:  ${(props) => props.theme.fonts.primary};
        font-weight: 400;
        font-size: 1.5rem;
        letter-spacing: 0.5px;
         color: ${(props) => props.theme.colors.black};


        text-rendering: optimizeLegibility;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;

  
    }

    p {
        font-size: 1.5rem;
        text-align: center;

    }

    a {
        outline: none;
        -webkit-tap-highlight-color: transparent;

        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-word-break: break-all;
        word-break: break-word;

        hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;

    }

`;

export default GlobalStyles;
