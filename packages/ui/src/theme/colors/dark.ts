const colors = {
  neutral: {
    100: "#1D252F",
    200: "#2C3641",
    300: "#D4D7DA",
  },
  orange: {
    50: "#ffce9317",
  },
  gray: {
    100: "#0f1211",
    200: "#181a19",
    300: "#202322",
    400: "#272b2a",
    500: "#2d3231",
    600: "#363c3a",
    700: "#434a48",
    800: "#586260",
    900: "#66716e",
    1000: "#747e7b",
    1100: "#adb7b4",
    1200: "#edeeee",
    a100: "#00911102",
    a200: "#c4f7de0a",
    a300: "#d1f7ea14",
    a400: "#dafef51c",
    a500: "#d8fbf424",
    a600: "#dafbf02f",
    a700: "#dffcf43e",
    a800: "#e2fff957",
    a900: "#e4fff867",
    a1000: "#e9fff975",
    a1100: "#f1fffbb2",
    a1200: "#feffffed",
    contrast: "#FFFFFF",
    surface: "rgba(0, 0, 0, 0.05)",
    indicator: "#66716e",
    track: "#66716e",
  },

  green: {
    "50": "#a4f3d273",
    "100": "#0b1310",
    "200": "#111b17",
    "300": "#0e2d22",
    "400": "#043c2b",
    "500": "#064a36",
    "600": "#0e5841",
    "700": "#156a4f",
    "800": "#147e5e",
    "900": "#127d5d",
    "1000": "#196d52",
    "1100": "#71cda9",
    "1200": "#a4f3d2",
    a100: "#00bb0003",
    a200: "#12f99d0b",
    a300: "#00ffa21e",
    a400: "#00fb9f2f",
    a500: "#00fcaa3e",
    a600: "#08fdb04d",
    a700: "#1bfdb560",
    a800: "#18ffb975",
    a900: "#14ffb974",
    a1000: "#26feb963",
    a1100: "#8afed0ca",
    a1200: "#abfedbf3",
    contrast: "#fff",
    surface: "#11251d80",
    indicator: "#127d5d",
    track: "#127d5d",
  },
};
const dark = {
  primary: "#127D5D",
  secondary: "gray.900",
  white: "#000",

  border: colors.gray["500"],

  error: "#111111",
  info: "#111111",
  success: "#111111",
  warning: "#111111",

  "background-primary": "#111111",
  "background-secondary": colors.gray["200"],

  "input-background": "gray.200",
  "input-border": "gray.200",
  "input-focus-background": "gray.200",
  "input-focus-border-color": "gray.200",
  "input-focus-color": "gray.200",
  "input-placeholder": "gray.200",
  "input-text": "gray.200",

  "text-primary": "#fff",
  "text-secondary": colors.gray["1000"],
  "text-disabled": "#111111",
  "text-error": "#111111",
  "text-success": "#111111",

  "background-scrollbar-track": colors.gray["300"],
  "background-scrollbar-thumb": colors.gray["600"],
  "background-scrollbar-thumb-hover": colors.gray["600"],

  "modal-background": "#111111",

  "button-secondary-bg": "#111111",
  icon: "#fff",
  ...colors,
};
export default dark;
