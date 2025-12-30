import { style } from "@vanilla-extract/css";

export const flowerImg = style({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -1,
  height: "auto",
  width: "400px",
  "@media": {
    "screen and (max-width: 800px)": {
      width: "200px",
    },
  },
});
