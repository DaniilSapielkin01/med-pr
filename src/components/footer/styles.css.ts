import { style } from "@vanilla-extract/css";

export const navItem = style({
  position: "relative",
});

export const spanBg = style({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: -4,
  height: 1,
  backgroundColor: "currentColor",
  transform: "scaleX(0)",
  transformOrigin: "center",
  transition: "transform 200ms ease",
  pointerEvents: "none",
});

export const navItemHover = style({
  selectors: {
    [`${navItem}:hover &`]: {
      transform: "scaleX(1)",
    },
  },
});

export const footerWrapper = style({
  borderTop: "2px solid #000",
  backgroundColor: "#f3f2f2",
});
