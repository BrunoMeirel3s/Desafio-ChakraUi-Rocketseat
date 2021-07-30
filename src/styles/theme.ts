import { extendTheme } from "@chakra-ui/react";
import { transparentize } from "polished";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    hightlight50: transparentize(0.9, "#FFBA08"),
    headingsText: "#47585B",
    info: "#999999",
    info50: transparentize(0.5, "#999999"),
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "headingsText",
      },
    },
  },
});
