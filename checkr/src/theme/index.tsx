import React from "react"
import { createTheme } from "@mui/material"


declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    subtitle1: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption3: React.CSSProperties;
  }
  //allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption3?: React.CSSProperties;
  }
  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    accent: Palette["primary"];
    textColor: Palette["primary"];
  }
  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    accent?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
  }
  interface Color {
    primary50?: string;
    primary100?: string;
    primary300?: string;
    primary400?: string;
    primary500?: string;
    primary700?: string;
    white?: string;
    lowEmphasis?: string;
    mediumEmphasis?: string;
    highEmphasis?: string;
    stroke?: string;
    iconLight?: string;
    iconDark?: string;
    blue?: string;
    lightBlue?: string;
    green?: string;
    lightGreen?: string;
    yellow?: string;
    lightYellow?: string;
    textWhite?: string;
  }

  interface PaletteColor extends Color {}
  interface SimplePaletteColorOptions extends Color {}
}

//Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    caption2: true;
  }
}
export const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  typography: {
    fontFamily: "Inter",
    h1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "30px",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "28px",
    },
    subtitle1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    caption2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
  palette: {
    primary: {
      main: "#0B6D62",
      primary100: "#F7F8FA",
      primary300: "#EFF2FF",
      primary400: "#95AAFF",
      primary500: "#224DFF",
      primary700: "#1132B7",
    },

    textColor: {
      main: "#000000",
      white: "#FFFFFF",
      lowEmphasis: "#818287",
      mediumEmphasis: "#696A6E",
      highEmphasis: "#2C2C2E",
    },
    structural: {
      main: "#FFFFFF",
      white: "#FFFFFF",
      stroke: "#E5E7ED",
      iconLight: "#696A6E",
      iconDark: "#3E414D",
    },
    accent: {
      main: "#FFFFFF",
      blue: "#3E5FE2",
      lightBlue: "#F2F4FC",
      green: "#17A076",
      lightGreen: "#F2FCFB",
      yellow: "#A08817",
      lightYellow: "#FAF8EB",
    },
  },
});
export default theme;
