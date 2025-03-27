import { ThemeType } from "@theme/styled";

const sizes = {
  xs: 320,
  sm: 480,
  md: 576,
  lg: 768,
  xl: 992,
  xxl: 1200,
  xxxl: 1400
} as const;

const baseTheme = {
  breakpoints: {
    xs: `${sizes.xs}px`,
    sm: `${sizes.sm}px`,
    md: `${sizes.md}px`,
    lg: `${sizes.lg}px`,
    xl: `${sizes.xl}px`,
    xxl: `${sizes.xxl}px`,
    xxxl: `${sizes.xxxl}px`
  },
  fontSizes: {
    headings: {
      heading1: "26px",
      heading2: "24px",
      heading3: "16px",
      heading4: "35px",
      heading5: "20px",
      heading6: "48px"
    },
    paragraph: {
      p: "10px",
      p1: "12px",
      p2: "14px"
    }
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700
  },
  borderRadius: {
    xs: "10px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
    circle: "50%"
  },
  spacings: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px"
  },
  zIndex: {
    z0: "0",
    z10: "10",
    z20: "20",
    z30: "30",
    z40: "40",
    z50: "50",
    zAuto: "auto"
  },
  colors: {
    white: "#FFFFFF",
    whiteOpacity: "255, 255, 255",
    gold: "#E0A949",
    black: "#000000",
    red: {
      100: "#FE9F9F",
      500: "#C34D4D",
      600: "#E04949"
    },
    gray: {
      100: "#e3e5ec",
      300: "#C4C4C4",
      400: "#999eb3",
      500: "#d5d7e3",
      950: "#0B0B0F"
    },
    indigo: {
      50: "#E0E5F2",
      100: "#AAAFC7",
      200: "#718EBF",
      300: "#6A729D",
      500: "#555E90",
      600: "#444650",
      700: "#2B3674"
    },
    indigoOpacities: {
      300: "106, 114, 157, 0.2",
      700: "43, 54, 116, 0.2"
    },
    blue: {
      100: "#BEDCFF",
      500: "#5E9AE1",
      600: "#4983E0"
    },
    green: {
      100: "#9FFEAE",
      200: "#73E79E",
      500: "#4DC367",
      800: "#73E79E"
    },
    orange: {
      100: "#FF9811",
      500: "#F73D05"
    },
    brown: {
      100: "#A4847B",
      500: "#C2674B"
    },
    orangeOpacities: {
      500: "247, 61, 5, 0.1"
    },
    light: {
      light: "#FFFFFF",
      light1: "#F4F7FE",
      light2: "#E9EBF1"
    },
    overlays: {
      overlay: "#00000080"
    },
    error: {
      0: "#000",
      10: "#2E0505",
      20: "#5C0A0A",
      30: "#8A0F0F",
      40: "#B81414",
      50: "#E61919",
      60: "#E93535",
      70: "#F07575",
      80: "#F5A3A3",
      90: "#FAD1D1",
      95: "#FCE8E8",
      98: "#FEF6F6",
      99: "#FEFAFA",
      100: "#FFFFFF"
    },
    primary: {
      0: "#0000",
      10: "#320C01",
      20: "#641902",
      30: "#962503",
      40: "#C83104",
      50: "#F73D05",
      60: "#FB6437",
      70: "#FC8B69",
      80: "#FDB29B",
      90: "#FED8CD",
      95: "#FEECE6",
      98: "#FFF7F5",
      99: "#FFFBFA",
      100: "#FFFFFF"
    },
    neutral: {
      0: "#000000",
      10: "#15151A",
      20: "#7A7A7A",
      25: "#2E2E33",
      30: "#46464D",
      40: "#5E5E67",
      50: "#757580",
      60: "#8D8D99",
      70: "#A8A8B3",
      80: "#C4C4CC",
      90: "#9A9AA6",
      100: "#FFFFFF"
    },
    surface: {
      bright: "#F7F7FA",
      surface: "#F7F7FA",
      dim: "#F5F5F7"
    },
    container: {
      highest: "#E1E1E6",
      high: "#E6E6EB",
      container: "#EBEBF0",
      low: "#F2F2F5",
      lowest: "#FFFFFF"
    },
    onSurface: {
      onSurface: "#15151A",
      1: "#46464D",
      2: "#5E5E67",
      3: "#757580"
    },
    outline: {
      var: "#C4C4CC",
      outline: "#A8A8B3"
    }
  }
};

export const theme: ThemeType = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    light: {
      light: "#232323",
      light1: "#151515",
      light2: "#343434",
      light3: "#343434"
    },
    dark: {
      dark1: "#FFFFFF",
      dark2: "#F4F7FE",
      dark3: "#FFFF",
      dark4: "#FFFFFF"
    },
    gray: {
      100: "#232323",
      300: "#C4C4C4",
      400: "#999eb3",
      500: "#d5d7e3",
      950: ""
    },
    textColor: {
      textColor: "#FFF",
      textColor2: "#FFF",
      textColor3: "#FFF",
      textColor4: "#FFF",
      textColor5: "#BBBBBB",
      textColor6: "#424242",
      textColor7: "#BBBBBB"
    },
    disabled: {
      disabled: "#1D1D1D",
      disabled1: "#d5d7e3"
    }
  }
} as const;
