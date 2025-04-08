
// export const darkTheme = {
//     bg:"#1C1C27",
//     bgLight: "#1C1E27",
//     primary:"#854CE6",
//     text_primary:"#F2F3F4",
//     text_secondary:"#b1b2b3",
//     card:"#171721",
//     card_light: '#191924',
//     button:"#854CE6",
//     white:"#FFFFFF",
//     black:"#000000",
// }

// export const lightTheme = {
//     bg:"#FFFFFF",
//     bgLight: "#f0f0f0",
//     primary:"#be1adb",
//     text_primary:"#111111",
//     text_secondary:"#48494a",
//     card:"#FFFFFF",
//     button:"#5c5b5b",
// }


import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1C1C27",
      paper: "#1C1E27", // Light background for cards
    },
    primary: {
      main: "#854CE6",
    },
    text: {
      primary: "#F2F3F4",
      secondary: "#b1b2b3",
    },
    action: {
      disabledBackground: "#171721", // Card background
    },
    button: {
      main: "#854CE6",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
      paper: "#f0f0f0",
    },
    primary: {
      main: "#be1adb",
    },
    text: {
      primary: "#111111",
      secondary: "#48494a",
    },
    action: {
      disabledBackground: "#FFFFFF",
    },
    button: {
      main: "#5c5b5b",
    },
  },
});


