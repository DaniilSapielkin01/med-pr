import { style } from "@vanilla-extract/css";

// Img
export const imgLogo = style({
  position: "absolute",
  top: "0",
  right: "0",
  width: "300px",
  height: "auto",

  "@media": {
    "screen and (max-width: 680px)": {
      width: "150px",
    },
  },
});
