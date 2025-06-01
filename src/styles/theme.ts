import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      ":root": {
        "--light-orange": "#dd6b20",
        "--dark-orange": "#fbd38d",
      },
    },
  },
  colors: {
    main: "#4e5b6f",
    secondary: "#f0f4f8",
    customWhite: "whiteAlpha.900",
    lightMode: {
      orange: "#dd6b20",
    },
    darkMode: {
      orange: "#fbd38d",
    },
  },
});

export default theme;
