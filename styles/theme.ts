import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      blackDark: string;
      blackLight: string;
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    gradients: {};
    shadows: {};
    responsive: {};
  }
}

const theme: DefaultTheme = {
  colors: {
    white: "#fcfcfb",
    black: "#353b27",
    blackDark: "#25291b",
    blackLight: "#5d6252",
    primary: "#f4f0ed",
    primaryDark: "#c3b098",
    secondary: "#f7f0e7",
    secondaryDark: "#ebd9c3",
  },
  fonts: {
    primary:
      "'Nunito',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    secondary:
      "'Noto Serif Display', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
  gradients: {},
  shadows: {},
  responsive: {},
};

export default theme;
