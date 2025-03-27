import "styled-components";

type ThemeType = {
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  fontSizes: {
    headings: {
      heading1: string;
      heading2: string;
      heading3: string;
      heading4: string;
      heading5: string;
      heading6: string;
    };
    paragraph: {
      p: string;
      p1: string;
      p2: string;
    };
  };
  fontWeight: {
    regular: number;
    semibold: number;
    bold: number;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    circle: string;
  };
  spacings: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  zIndex: {
    z0: string;
    z10: string;
    z20: string;
    z30: string;
    z40: string;
    z50: string;
    zAuto: string;
  };
  colors: {
    white: string;
    whiteOpacity: string;
    gold: string;
    black: string;
    error: {
      0: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      95: string;
      98: string;
      99: string;
      100: string;
    };
    primary: {
      0: string;
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      95: string;
      98: string;
      99: string;
      100: string;
    };
    neutral: {
      0: string;
      10: string;
      20: string;
      25: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      100: string;
    };
    surface: {
      bright: string;
      surface: string;
      dim: string;
    };
    container: {
      highest: string;
      high: string;
      container: string;
      low: string;
      lowest: string;
    };
    onSurface: {
      onSurface: string;
      1: string;
      2: string;
      3: string;
    };
    outline: {
      var: string;
      outline: string;
    };

    red: {
      100: string;
      500: string;
      600: string;
    };
    gray: {
      100: string;
      300: string;
      400: string;
      500: string;
      950: string;
    };
    indigo: {
      50: string;
      100: string;
      200: string;
      300: string;
      500: string;
      700: string;
    };
    indigoOpacities: {
      300: string;
      700: string;
    };
    blue: {
      100: string;
      500: string;
      600: string;
    };
    green: {
      100: string;
      200: string;
      500: string;
      800: string;
    };
    orange: {
      100: string;
      500: string;
    };
    brown: {
      100: string;
      500: string;
    };
    orangeOpacities: {
      500: string;
    };
    overlays: {
      overlay: string;
    };
    light: {
      light: string;
      light1: string;
      light2: string;
      light3: string;
    };
    dark: {
      dark1: string;
      dark2: string;
      dark3: string;
      dark4: string;
    };
    textColor: {
      textColor: string;
      textColor2: string;
      textColor3: string;
      textColor4: string;
      textColor5: string;
      textColor6: string;
      textColor7: string;
    };
    disabled: {
      disabled: string;
      disabled1: string;
    };
  };
};

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
