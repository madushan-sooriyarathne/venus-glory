import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      blackDark: string;
      blackLight: string;
      gray: string;
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      error: string;
      warning: string;
      success: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    gradients: {
      cover: string;
      coverUpside: string;
    };
    shadows: {
      spread: string;
      close: string;
    };
    responsive: {};
  }
}

const theme: DefaultTheme = {
  colors: {
    white: "#fcfcfb",
    black: "#353b27",
    blackDark: "#25291b",
    blackLight: "#5d6252",
    gray: "#ccc",
    primary: "#f4f0ed",
    primaryDark: "#c3b098",
    secondary: "#f7f0e7",
    secondaryDark: "#ebd9c3",
    error: "#f54d1e",
    warning: "#e8bc0d",
    success: "#29c46a",
  },
  fonts: {
    primary:
      "'Nunito',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    secondary:
      "'Noto Serif Display', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
  gradients: {
    cover:
      "linear-gradient(45deg, rgba(247,240,231,0.8) 18%, rgba(247,240,231,0.2) 100%)",
    coverUpside:
      "linear-gradient(180deg, rgba(247,240,231,0.8) 18%, rgba(247,240,231,0.2) 100%)",
  },
  shadows: {
    spread: "0px 4px 22px 0px rgba(0,0,0,0.1)",
    close: "0px 4px 8px 0px rgba(0,0,0,0.1)",
  },
  responsive: {},
};

export default theme;
